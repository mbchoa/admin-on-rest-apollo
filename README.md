# TBT Admin POC with `admin-on-rest` & Apollo GraphQL

## Directory Structure
```
├── /build/                                 # Client-side output build directory
├── /src/                                   # Top-level package
│   ├── /apolloClient/                      # Top-level React component package
│   │   ├── buildApolloClient.js            # Helper file to build REST to GraphQL Apollo Client
│   │   ├── buildQuery.js                   # Helper file to build queries based on resource type
│   │   ├── mapResourceTypeToResolver.js    # Helper file to map resource type to GraphQL resolver names
│   ├── /components/                        # Top-level React component package
│   ├── /graphql/                           # Backend GraphQL server package
│   │   ├── /resolvers/                     # GraphQL resolvers package
│   │   ├── /schema/                        # GraphQL schemas package
│   │   │   ├── /mutations/                 # GraphQL mutations
│   │   │   ├── /queries/                   # GraphQL queries
│   │   │   ├── /types/                     # GraphQL schema types
│   │   ├── index.js                        # Server-side entry point
│   │   └── ...
│   ├── App.js                              # Root React component
│   └── index.js                            # Client-side entry point
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
