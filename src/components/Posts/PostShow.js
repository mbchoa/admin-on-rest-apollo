import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
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
