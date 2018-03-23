import React from 'react';
import { List, Datagrid, NumberField, DateField, TextField, BooleanField } from 'admin-on-rest';
import { EditButton } from '../Reusable'

const EventList = (props) => (
    <List {...props} perPage={20}>
      <Datagrid>
        <TextField source="eventId" />
        <TextField source="name" />
        <DateField source="date" />
        <TextField source="ownerId" />
        <BooleanField source="cancelled" />
        <NumberField source="eventType" />
        <TextField source="eventTypeName" />
        <EditButton />
      </Datagrid>
    </List>
);

export default EventList;
