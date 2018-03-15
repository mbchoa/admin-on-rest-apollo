export default `
  type Post {
    userId: Int,
    id: Int,
    title: String,
    body: String
  }

  type Comment {
    postId: Int,
    id: Int,
    name: String,
    email: String,
    body: String
  }

  type Album {
    userId: Int,
    id: Int,
    title: String
  }
`;
