import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './SectionWrap.module.css';

export default class SectionWrap extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  static defaltProps = {
    title: '',
    className: '',
    children: {},
  }

  render() {
    const { title, className, children } = this.props;

    const preFix = classnames(
      className,
      styles.container,
    )

    return (
      <div className={preFix}>
        <div className={styles.title}>
          <span>{title || 'Education'}</span>
          <span className={styles.line1} />
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    )
  }
}


