import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import {cyan500} from 'material-ui/styles/colors';
import ContentCreate from 'material-ui/svg-icons/content/create';

const EditButton = ({ basePath = '', record = {} }) => (
    <IconButton
        containerElement={<Link to={`${basePath}/${record.orderId}`} />}
        style={{ overflow: 'inherit' }}
    >
      {console.warn('link to ',`${basePath}/${record.orderId}` )}
        <ContentCreate color={cyan500} />
    </IconButton>
);

EditButton.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
};

EditButton.defaultProps = {
    style: { padding: 0 },
};

export default EditButton;
