import React from 'react';
import {
    FullNameField,
    Edit,
    TabbedForm,
    TextInput,
    FormTab,
} from 'admin-on-rest';

const OrderTitle = ({ title }) => title ? <FullNameField record={title} size={32} /> : null;

const OrderEdit = props => (
    <Edit title={<OrderTitle title="title here"/>} {...props}>
      {console.warn('Order Edit here')}
      <TabbedForm>
        <FormTab>
            <TextInput source="orderId" style={{ display: 'inline-block' }} />
            <TextInput source="street2" style={{ display: 'inline-block', marginLeft: 32 }} />
        </FormTab>
      </TabbedForm>
    </Edit>
);

export default OrderEdit
