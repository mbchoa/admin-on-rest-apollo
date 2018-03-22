import React from 'react';
import {
    FullNameField,
    Edit,
    TabbedForm,
    TextInput,
    FormTab,
} from 'admin-on-rest';

const UserTitle = ({ title }) => title ? <FullNameField record={title} size={32} /> : null;

const UserEdit = props => (
    <Edit title={<UserTitle title="title here"/>} {...props}>
      {console.warn('UserEdit here')}
      <TabbedForm>
        <FormTab>
            <TextInput source="userId" style={{ display: 'inline-block' }} />
        </FormTab>
      </TabbedForm>
    </Edit>
);

export default UserEdit
