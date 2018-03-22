import React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'admin-on-rest';
import { EditButton } from '../Reusable'

const UserList = (props) => (
    <List {...props} perPage={20}>
      <Datagrid>
        {console.warn('user list props', props)}
        <TextField source="userId" />
        <TextField source="email" />
        <TextField source="fullName" />
        <BooleanField source="isVip" />
        <TextField source="phoneNumber" />
        <EditButton />
      </Datagrid>
    </List>
);

export default UserList;
