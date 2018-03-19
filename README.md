# TBT Admin POC with `admin-on-rest` & Apollo GraphQL

## Directory Structure
```
├── /build/                     # Client-side output build directory
├── /src/                       # Top-level package
│   ├── /components/            # Top-level React component package
│   ├── /graphql/               # Backend GraphQL server package
│   │   ├── /resolvers/         # GraphQL resolvers package
│   │   ├── /schema/            # GraphQL schemas package
│   │   │   ├── /mutations/     # GraphQL mutations
│   │   │   ├── /queries/       # GraphQL queries
│   │   │   ├── /types/         # GraphQL schema types
│   │   ├── index.js            # Server-side entry point
│   │   └── ...
│   ├── App.js                  # Root React component
│   ├── buildApolloClient.js    # Utility methods to build AoR Apollo client
│   └── index.js                # Client-side entry point
```

## Getting Started

### Client
1. `yarn install` Install npm dependencies
2. `yarn start`  Serves up client Express server
3. Navigate to `http://localhost:3000`

### Server
1. `cd /src/graphql` Navigate to graphql server source code
2. `yarn install` Install npm dependencies
3. `yarn build` Builds GraphQL server
4. `yarn serve` Serves up GraphQL Express server
