import gql from 'graphql-tag';

const allOrders = ({ pagination: { page, perPage }}) => ({
  query: gql`
    query ($limit: Int, $offset: Int){
      allOrders (limit:$limit, offset:$offset)  {
        id
        orderId
        isHto
        isCancelled
        orderCompleted
        shippingFee
        insuranceFee
        shippingAddress {
          street1
          street2
          city
          state
          zip
        }
      }
    }
  `,
  variables: {
    offset: (page - 1) * perPage,
    limit: page * perPage,
  }
});

const oneOrder = ({ id }) => ({
  query: gql`
    query ($id:String) {
      oneOrder (id:$id) {
        user {
          userId
		  firstName
          lastName
          email
          phoneNumber
          isVip
          birthdate
          lastLogin      
        }
        id
        orderId
        isHto
        isCancelled
        orderCompleted
        shippingFee
        insuranceFee
        shippingAddress{
          street1
          street2
          city
          state
          zip
        }
      }
    }
  `,
  variables: { id },
});

const updateOrder = ({ data }) => {
  return {
    mutation: gql`
      mutation ($input: UpdateOrderInputType) {
        updateOrder (input:$input) {
          id
          isCancelled
        }
      }
    `,
    variables: { input: data },
  }
};

export default {
  allOrders,
  oneOrder,
  updateOrder,
}
