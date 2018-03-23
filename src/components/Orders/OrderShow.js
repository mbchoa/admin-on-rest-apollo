import React from 'react';
import { BooleanField, FormTab, Show, TabbedForm, TextField } from 'admin-on-rest';

const OrderShow = (props) => (
  <Show {...props}>
    <TabbedForm>
      <FormTab label="Shipping Information">
        <TextField source="orderId" label="Order Id" />
        <TextField source="shippingAddress.street1" label="Street 1" />
        <TextField source="shippingAddress.street2" label="Street 2" />
        <TextField source="shippingAddress.city" label="City" />
        <TextField source="shippingAddress.state" label="State" />
        <TextField source="shippingAddress.zip" label="Zip" />
      </FormTab>
      <FormTab label="Customer Information">
        <TextField source="user.userId" label="User Id" />
        <TextField source="user.firstName" label="First Name" />
        <TextField source="user.lastName" label="Last Name" />
        <TextField source="user.email" label="Email" />
        <TextField source="user.phoneNumber" label="Phone Number" />
        <BooleanField source="user.isVip" label="Is VIP" />
      </FormTab>
    </TabbedForm>
  </Show>
);

export default OrderShow
