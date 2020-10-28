import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './List.module.css';

export default class List extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    dataList: PropTypes.arrayOf(PropTypes.shape({})),
  }

  static defaltProps = {
    className: '',
    dataList: [],
  }

  render() {
    const { className, dataList = [] } = this.props;

    const preFix = classnames(
      className,
      styles.list,
    )

    return (
      <ul className={preFix}>
        {dataList.map((item, index) => (
          <li className={styles.listItem} key={index}>
            {item.date && (
              <div className={styles.itemDate}>{item.date}</div>
            )}

            <div className={styles.itemContent}>
              <p className={styles.content1}>{item.p1}</p>
              <p className={styles.content2}>{item.p2}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}


