import gql from 'graphql-tag';
import { omit, forIn, isObject } from 'lodash'

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
      }
    }
  `,
  variables: { id },
});

const updateOrder = (props) => {
  console.warn('input props', props)

  let {data} = props
  console.warn('dat')
  data = omit(data, ["__typename"])
  forIn(data, (value, key) => {
    if (isObject(value)) {
      data[key] = omit(value, ["__typename"])
    }
  })
  console.warn('mutation input omitted __typename', data)

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
