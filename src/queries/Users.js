import gql from 'graphql-tag';

const allUsers = ({ pagination: { page, perPage }}) =>   ({
  query: gql`
    query ($limit: Int, $offset: Int){
      allUsers (limit:$limit, offset:$offset)  {
        id
        userId
        version
        email
        firstName
        lastName
        fullName
        token
        isVip
        birthdate
        lastLogin
        createdOn
        updatedOn
        braintreeId
        phoneNumber
        billingAddress{
          state
        }
      }
    }
  `,
  variables: {
    offset: (page - 1) * perPage,
    limit: page * perPage,
  }
});

const oneUser = ({ id }) => ({
  query: gql`
    query ($id:String) {
      oneUser (id:$id) {
        id
        userId
        version
        email
        firstName
        lastName
        fullName
        token
        isVip
        birthdate
        lastLogin
        createdOn
        updatedOn
        braintreeId
        phoneNumber
        billingAddress {
          state
        }
      }
    }
  `,
  variables: { id },
});

export default {
  allUsers,
  oneUser,
}
