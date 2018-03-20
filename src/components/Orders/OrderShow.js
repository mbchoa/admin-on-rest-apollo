import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField } from 'admin-on-rest';

const OrderShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
        {console.warn('orderShow here')}
            <TextField source="orderId" />
        </SimpleShowLayout>
    </Show>
);

export default OrderShow
