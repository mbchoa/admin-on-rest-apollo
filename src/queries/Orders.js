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
        orderItems{
          orderItemId
          productSetId
          productInfo {
            name
            price
            productImage
            slug
            categorySlug
            style
          }
        }
      }
    }
  `,
  variables: { id },
});

export default {
  allOrders,
  oneOrder,
};
