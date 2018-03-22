import React from 'react';
import {
  Edit,
  FullNameField,
  SimpleForm,
  TextInput,
} from 'admin-on-rest';

const OrderTitle = ({ title }) => title ? <FullNameField record={title} size={32} /> : null;

const OrderEdit = props => (
  <Edit title="Edit Order" {...props}>
    <SimpleForm>
        <TextInput source="shippingAddress.street1" label="Street 1" />
        <TextInput source="shippingAddress.street2" label="Street 2" />
        <TextInput source="shippingAddress.city" label="City" />
        <TextInput source="shippingAddress.state" label="State" />
        <TextInput source="shippingAddress.zip" label="Zip" />
    </SimpleForm>
  </Edit>
);

export default OrderEdit
