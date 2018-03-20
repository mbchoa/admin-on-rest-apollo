import React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'admin-on-rest';
import { EditButton } from '../Reusable'

const OrderList = (props) => (
    <List {...props} perPage={20}>
      <Datagrid>
        <TextField source="orderId" />
        <BooleanField source="isHto" />
        <BooleanField source="isCancelled" />
        <BooleanField source="orderCompleted" />
        <TextField source="shippingAddress.zip" label="zip" />
        <EditButton />
      </Datagrid>
    </List>
);

export default OrderList;
