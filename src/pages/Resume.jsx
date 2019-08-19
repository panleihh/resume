import React, { Component } from 'react';
import classnames from 'classnames';

import SectionWrap from '../components/resume/SectionWrap';
import List from '../components/resume/List';

import styles from './Resume.module.css';

export default class Resume extends Component {

  state = {}

  render() {
    return (
      <div className={styles.container}>
        {/* <header className={styles.header}>
          <div className={styles.avatar}>
            <img className={styles.avatarImg} src="data:image/jpeg;base64,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" alt="" />
          </div>
          <div className={styles.introduce}>
            <p className={styles.introSelf}>
              <span className={styles.introSelfName}>Katherine</span>
              <span className={styles.introSelfCareer}>Front End Engineer</span>
            </p>
            <div className={styles.introInfo}>
              <ul className={classnames(styles.introInfoList, styles.introList1)}>
                <li className={styles.introInfoListItem}>湖南科技大学 | 物联网工程</li>
                <li className={styles.introInfoListItem}>本科 | 2017年6月毕业</li>
                <li className={styles.introInfoListItem}>籍贯：湖南 岳阳</li>
                <li className={styles.introInfoListItem}>现居：上海市 杨浦区</li>
              </ul>

              <ul className={classnames(styles.introInfoList, styles.introList2)}>
                <li className={styles.introInfoListItem}>17601256122</li>
                <li className={styles.introInfoListItem}>pl6542580</li>
                <li className={styles.introInfoListItem}>941399127@qq.com</li>
                <li className={styles.introInfoListItem}>www.github.com/panleihh</li>
              </ul>
            </div>
          </div>
        </header> */}

        <header className={styles.header}>
          <div className={styles.avatar}>
            <img className={styles.avatarImg} src="data:image/jpeg;base64,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" alt="" />
          </div>
          <div className={styles.introduce}>
            <p className={styles.introSelf}>
              <span className={styles.introSelfName}>牛油果</span>
              <span className={styles.introSelfCareer}>Front End Engineer</span>
            </p>
            <div className={styles.introInfo}>
              <ul className={classnames(styles.introInfoList, styles.introList1)}>
                <li className={styles.introInfoListItem}>呀呀呀</li>
                <li className={styles.introInfoListItem}>呀呀呀</li>
                <li className={styles.introInfoListItem}>呀呀呀呀</li>
                <li className={styles.introInfoListItem}>呀呀呀呀呀</li>
              </ul>

              <ul className={classnames(styles.introInfoList, styles.introList2)}>
                <li className={styles.introInfoListItem}>呀呀呀呀呀</li>
                <li className={styles.introInfoListItem}>呀呀呀呀呀</li>
                <li className={styles.introInfoListItem}>呀呀呀呀呀</li>
                <li className={styles.introInfoListItem}>呀呀呀呀呀</li>
              </ul>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <SectionWrap className={styles.contentItem} title="1">
            <List dataList={[
              { date: '2017.08 - 至今', p1: 'fdd' },
              { date: '2016.08 - 2017.05', p1: 'rx', p2: '实习' },
            ]} />
          </SectionWrap>

          <SectionWrap className={styles.contentItem} title="2">
            <List dataList={[
              { p1: 'fdd' },
              { p1: 'rx' },
            ]} />
          </SectionWrap>

          <SectionWrap className={styles.contentItem} title="3">
            <List dataList={[
              { date: '2017.08 - 至今', p1: 'fdd' },
              { date: '2016.08 - 2017.05', p1: 'rx' },
            ]} />
          </SectionWrap>

          <SectionWrap className={styles.contentItem} title="4">
            <List dataList={[]} />
          </SectionWrap>

          <SectionWrap className={styles.contentItem} title="5" />

          <SectionWrap className={styles.contentItem} title="6" />
        </div>
      </div>
    )
  }
}


