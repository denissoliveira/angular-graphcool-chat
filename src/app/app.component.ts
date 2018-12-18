import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private apollo: Apollo,
    private http: HttpClient
  ) {
    // this.createUser();
    this.allUsers();
  }

  allUsers(): void {
    this.apollo.query({
      query: gql`
        query {
          allUsers {
            id
            name
            email
          }
        }
      `
    }).subscribe(res => console.log('Query: ', res));
  }

  createUser(): void {
      this.apollo.mutate({
        mutation: gql`
          mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
            createUser(name: $name, email: $email, password: $password) {
              id
              name
              email
            }
          }
        `,
        variables: {
          name: 'IRON mAN',
          email: 'ironman@avengers.com',
          password: '1234567'
        }
      }).subscribe(res => console.log('Mutation: ', res));
  }

}
