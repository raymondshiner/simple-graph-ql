# SimpleGraphQL

A Simple client side React GraphQL Web App designed to showcase my passions and skillset.

This project was:
- Designed from scratch in [Figma](https://www.figma.com/) using scalable design best practices (both in UX/UI and figma layout). Design Files available [here](https://www.figma.com/file/VsQnLFK5WqzKiIzusF4ZK7/Untitled?node-id=0%3A1).
- Developed using [nx.dev](https://nx.dev/) as the core project architecture.
- Developed using only [Typescript](https://www.typescriptlang.org/), [URQL](https://formidable.com/open-source/urql/), and [Styled-Components](https://styled-components.com/)
- 100% Developed using [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Jest](https://jestjs.io/) and [Cypress.io](https://www.cypress.io/)
- Entirely Documented using [Storybook](https://storybook.js.org/) 
- Uses [Mock Service Worker](https://mswjs.io/docs/getting-started/mocks/graphql-api) for 100% Client Side mocking. This means that you can have the app running entirely locally without online capabilities (instructions below). In fact this app was entirely developed against mocks with the actual API being connected only at the end, to simulate the Real world scenario of a Front End Team working Independently of a Backend Team. 
- Uses [GraphQLZero](https://graphqlzero.almansi.me/) as a dummy api in place of a graphQL server (as this app is only focused on the client side).


## NX.Dev Auto Generated README

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@simple-graph-ql/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
