import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.css';

import Title from './Title';

const Panel = ({ content, title }) => {
  return (
    <section className={styles.base}>
      {title && <Title content={title} />}
      {content}
    </section>
  );
};

Panel.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

export default Panel;
