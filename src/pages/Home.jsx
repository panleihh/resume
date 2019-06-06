import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Home.module.css';

export default class Home extends Component {

  state = {
    index: 1,
    option: 1,
    isAnimate: false,
    direction: 'down',
  }

  handleName = (i) => {
    const { index, option } = this.state;
    return (index === i || index + option === i)
  }

  handleKeyPress = (e) => {
    const { index } = this.state;
    const { keyCode } = e;
    if (keyCode === 38 && index > 1) { // 方向上键
      console.log(e.keyCode, 'up');
      this.setState((prevState) => ({
        option: prevState.index > 1 ? 1 : -1,
        index: prevState.index > 1 ? prevState.index - 1 : 1,
        direction: 'up',
        isAnimate: true,
      }))
    } else if (keyCode === 40 && index + 1 <= 4) { // 方向下键
      console.log(e.keyCode, 'down');
      this.setState((prevState) => ({
        option: prevState.index < 4 ? -1 : 1,
        index: prevState.index < 4 ? prevState.index + 1 : 4,
        direction: 'down',
        isAnimate: true,
      }))
    }
  }

  handleAnimateEnd = (e) => {
    console.log(e);
    this.setState({ isAnimate: false });
  }

  render() {
    const { option, index, isAnimate, direction } = this.state;
    const { handleName, handleKeyPress, handleAnimateEnd } = this;

    console.log('index: ', index)
    console.log('index + option: ', index + option);

    return (
      <div className={styles.container} onKeyDown={handleKeyPress} tabIndex="0">
        <section
          className={classnames(styles.section, {
            [styles.active]: index === 1,
            [styles.visible]: handleName(1),
          })}
          onAnimationEnd={handleAnimateEnd}
        >
          <div
            className={classnames(styles.content, {
              [styles.animate0]: isAnimate && handleName(1) ,
              [styles.animate1]: isAnimate && handleName(1),
              [styles.animate2]: isAnimate && handleName(1),
            })}
          >
            1
          </div>
        </section>

        <section
          className={classnames(styles.section, {
            [styles.active]: index === 2,
            [styles.visible]: handleName(2),
          })}
          onAnimationEnd={handleAnimateEnd}
        >
          <div
            className={classnames(styles.content, {
              [styles.animateUp]: isAnimate && handleName(2),
            })}
          >
            2
          </div>
        </section>

        <section
          className={classnames(styles.section, {
            [styles.active]: index === 3,
            [styles.visible]: handleName(3),
          })}
        >
          <div
            className={classnames(styles.content, {
              [styles.animateUp]: isAnimate && handleName(3),
            })}
          >
            3
          </div>
        </section>

        <section
          className={classnames(styles.section, {
            [styles.active]: index === 4,
            [styles.visible]: handleName(4),
          })}
        >
          <div
            className={classnames(styles.content, {
              [styles.animateUp]: isAnimate && handleName(4),
            })}
          >
            4
          </div>
        </section>
      </div>
    )
  }
}


