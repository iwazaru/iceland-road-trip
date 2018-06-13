import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Overlay from '../Overlay/Overlay';

import './Photo.scss';

export default function Photo(props) {

  const { photoId } = props.match.params;

  const onClick = props.history.goBack;

  return (
    <Fragment>
      <Overlay onClick={onClick} />
      <img onClick={onClick} className="Photo"
        src={`/data/photos/${photoId}.jpg`} />
    </Fragment>
  );
}

Photo.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};