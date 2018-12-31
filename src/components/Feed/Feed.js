import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Feed.module.css';

let cx = classNames.bind(styles);

const Feed = ({ children, type }) => {
  let className = cx({
    base: true,
    dashboard: type === 'dashboard',
    feed: type === 'feed',
  });

  return <main className={className}>{children}</main>;
};

Feed.propTypes = {
  type: PropTypes.oneOf(['dashboard', 'feed']),
};

Feed.defaultProps = {
  type: 'feed',
};

export default Feed;
