import React from 'react';
import { List, Datagrid, ReferenceField, TextField } from 'admin-on-rest';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            {/* <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField> */}
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export default PostList;
