import { default as Graphcool, fromEvent, FunctionEvent } from 'graphcool-lib';
import { GraphQLClient } from 'graphql-request';
import * as bcrypt from 'bcryptjs';
import * as validator from 'validator';

interface User {
  id: string;
}

interface EventData {
  name: string;
  email: string;
  password: string;
}

const SALT_ROUNDS = 10;

export default async (event: FunctionEvent<EventData>) => {
  console.log(event);

  try {
    const graphcool: Graphcool = fromEvent<EventData>(event);
    const api: GraphQLClient = graphcool.api('simple/v1');

    // o json que chega ele pega os mesmos e atribui e cria as const com cada elemento do json
    const { name, email, password } = event.data;

    if (!validator.isEmail(email)) {
      return { error: 'Não é um e-mail válido' };
    }

    // check if user exists already
    const userExists: boolean = await getUser(api, email)
      .then(r => r.User !== null);
    if (userExists) {
      return { error: 'Email já em uso' };
    }

    // create password hash
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    // create new user
    const userId = await createGraphcoolUser(api, name, email, hash);

    // generate node token for new User node
    const token = await graphcool.generateNodeToken(userId, 'User');

    return { data: { id: userId, token } };
  } catch (e) {
    console.log(e);
    return { error: 'Ocorreu um erro inesperado durante a inscrição.' };
  }
};

async function getUser(api: GraphQLClient, email: string): Promise<{ User }> {
  const query = `
    query getUser($email: String!) {
      User(email: $email) {
        id
      }
    }
  `;

  const variables = {
    email,
  };

  return api.request<{ User }>(query, variables);
}

async function createGraphcoolUser(api: GraphQLClient, name: string, email: string, password: string): Promise<string> {
  const mutation = `
    mutation createGraphcoolUser($name: String!, $email: String!, $password: String!) {
      createUser(
        name: $name,
        email: $email,
        password: $password
      ) {
        id
      }
    }
  `;

  const variables = {
    name,
    email,
    password
  };

  return api.request<{ createUser: User }>(mutation, variables)
    .then(r => r.createUser.id);
}
