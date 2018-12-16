# AngularGraphcoolChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Informações do Estudo

## Projeto completo no git
https://github.com/plinionaves/angular-graphcool-chat

## criando projeto
`ng new nomeProjeto --style=scss`
___
## Doc do AngularCLI
https://cli.angular.io/

https://github.com/angular/angular-cli

https://github.com/angular/angular-cli/wiki
___

## para abrir vscode dentro da pasta
```sh
code .
```
***
### instalando o angular Material 6.0
```sh
ng add @angular/material@6.0.1
```

#### poderá ser necessário instalar outros pacotes se solicitado na instalação acima

```sh
ng add @angular/cdk@6.0.1
```
```sh
ng add @angular/core@>=6.0.0-beta.0
```
```sh
ng add @angular/common@>=6.0.0-beta.0
```

### Para ultima versão acessar - [**clique aqui para link do Angular Material**](https://material.angular.io/guide/getting-started)
***
### ChangeLog 
`npm i -g standard-version` ou `npm i --save-dev standard-version`

#### Add an npm run script to your package.json:

```json
{
  "scripts": {
    "release": "standard-version"
  }
}
```
```json
"release": "standard-version",
"release-as": "npm run release -- --release-as 0.0.0"
```
Mais em https://github.com/conventional-changelog/standard-version/blob/master/README.md
***
### GHAPHCOOL: BAAS Baseado no GhaphQL

Dcumentação Oficial: https://graphql.org/ <br/>
Referências: https://www.howtographql.com/ <br/>
Apollo GraphQL: https://www.apollographql.com/ <br/>
Blog Apollo Data: https://blog.apollographql.com/ <br/>

Arquitetura graphcool: https://www.graph.cool/docs/concepts/overview/graphql-backend-architecture-thei2kephu/ <br/>

Instalando GraphCool: 
```sh
npm i -g graphcool
```
Criando projeto:
```sh
graphcool init graphcool
```

Fazendo deploy (gcf é abreviação de graphcool)
```sh
gcf deploy
```
