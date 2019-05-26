import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Home.module.css';

export default class Home extends Component {

  state = {
    index: 1,
  }

  handleKeyPress = (e) => {
    const { keyCode } = e;
    if (keyCode === 38) { // 方向上键
      console.log(e.keyCode, 'up');
      this.setState((prevState) => ({ 
        index: prevState.index > 1 ? prevState.index - 1 : 1,
       }))
    } else if (keyCode === 40) { // 方向下键
      console.log(e.keyCode, 'down');
      this.setState((prevState) => ({ 
        index: prevState.index < 4 ? prevState.index + 1 : 4,
       }))
    }
  }

  render() {
    const { index } = this.state;
    const { handleKeyPress } = this;

    return (
      <div onKeyDown={handleKeyPress} tabIndex="0">
        <section className={classnames(styles.section, {
          [styles.visible]: index === 1,
        })}>
          <div className={styles.content}>
            1
          </div>
        </section>
        
        <section className={classnames(styles.section, {
          [styles.visible]: index === 2,
        })}>
          <div className={styles.content}>
            2
          </div>
        </section>
        
        <section className={classnames(styles.section, {
          [styles.visible]: index === 3,
        })}>
          <div className={styles.content}>
            3
          </div>
        </section>
        
        <section className={classnames(styles.section,{
          [styles.visible]: index === 4,
        })}>
          <div className={styles.content}>
            4
          </div>
        </section>
      </div>
    )
  }
}


