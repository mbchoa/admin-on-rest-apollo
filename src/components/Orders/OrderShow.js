import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'admin-on-rest';

const OrderShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="orderId" />
    </SimpleShowLayout>
  </Show>
);

export default OrderShow
