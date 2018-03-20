export default `
  type Post {
    userId: Int,
    id: Int,
    title: String,
    body: String
  }

  type LatLong {
    lat: String,
    lng: String
  }

  type Company {
    name: String,
    catchPhrase: String,
    bs: String
  }

  type Address {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: LatLong
  }

  type User {
    id: Int,
    name: String,
    username: String,
    email: String,
    address: Address
    phone: String,
    website: String,
    company: Company
  }
`;
