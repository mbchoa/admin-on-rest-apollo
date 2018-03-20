export default `
  type Mutation {
    createPosts(userId: Int!, title: String, body: String): Post
    updatePosts(id: Int!, userId: Int!, title: String, body: String): Post
  }
`;
