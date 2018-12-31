import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.css';

const Title = ({ content }) => <h3 className={styles.title}>{content}</h3>;

Title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Title;
