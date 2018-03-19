import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    EditButton, 
    RichTextField
} from 'admin-on-rest';

export default (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <RichTextField source="body" />
    </SimpleShowLayout>
  </Show>
);
