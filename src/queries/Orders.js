import gql from 'graphql-tag';

const allOrders = gql`
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
`

const oneOrder = gql`
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
`

export default {
  allOrders,
  oneOrder,
}
