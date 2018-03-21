export default `
  type Query {
    allPosts: [Post]
    posts(id: ID!): Post
    allUsers: [User]
    users(id: ID!): User
  }
`;
