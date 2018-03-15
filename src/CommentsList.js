import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

const CommentsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="body" />
    </Datagrid>
  </List>
);

export default CommentsList;
