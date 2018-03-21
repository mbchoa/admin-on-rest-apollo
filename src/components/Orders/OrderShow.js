import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'admin-on-rest';

const OrderShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="orderId" />
      <TextField source="shippingAddress.street1" label="Street 1" />
      <TextField source="shippingAddress.street2" label="Street 2" />
      <TextField source="shippingAddress.city" label="City" />
      <TextField source="shippingAddress.state" label="State" />
      <TextField source="shippingAddress.zip" label="Zip" />
    </SimpleShowLayout>
  </Show>
);

export default OrderShow
