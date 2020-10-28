import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './SectionWrap.module.css';

export default class SectionWrap extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.shape({}),
  }

  static defaltProps = {
    title: '',
    className: '',
    children: {},
    style: {},
  }

  render() {
    const { title, className, children, style } = this.props;

    const preFix = classnames(
      className,
      styles.container,
    )

    return (
      <div className={preFix} style={style}>
        <div className={styles.title}>
          <span className={styles.titleText}>{title || 'Education'}</span>
          <span className={styles.line1} />
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    )
  }
}


