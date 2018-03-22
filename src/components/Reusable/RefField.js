import React from 'react';
import { ReferenceField } from 'admin-on-rest';

const RefField = props => (
  <ReferenceField source="user.userId" reference="User" {...props}>
      {console.warn('props')}
  </ReferenceField>
);
// RefField.defaultProps = {
//     source: 'event.ownerId',
//     addLabel: true,
// };

export default RefField;
