import React, { Component } from 'react';
import classnames from 'classnames';

import SectionWrap from '../components/resume/SectionWrap';
import Avatar from '../images/2r.jpeg';

import {
  ExperienceListMap1,
  ExperienceListMap2,
  SkillsListMap,
} from '../components/dataMap/listMap';

import styles from './Resume.module.css';

export default class Resume extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            <img className={styles.avatarImg} src={Avatar} alt="" />
          </div>
          <div className={styles.introduce}>
            <p className={styles.introSelf}>
              <span className={styles.introSelfName}>Katherine</span>
              <span className={styles.introSelfCareer}>Web前端开发工程师</span>
            </p>
            <div className={styles.introInfo}>
              <ul className={classnames(styles.introInfoList, styles.introList1)}>
                <li className={styles.introInfoListItem}>湖南科技大学</li>
                <li className={styles.introInfoListItem}>姓名：潘蕾</li>
                <li className={styles.introInfoListItem}>物联网工程</li>                
                <li className={styles.introInfoListItem}>籍贯：湖南 岳阳</li>
                <li className={styles.introInfoListItem}>本科 | 2017年6月毕业</li>
                <li className={styles.introInfoListItem}>工作经验：2年</li>
              </ul>

              <ul className={classnames(styles.introInfoList, styles.introList2)}>
                <li className={styles.introInfoListItem}>手机：17601256122</li>
                <li className={styles.introInfoListItem}>微信：pl6542580</li>
                <li className={styles.introInfoListItem}>邮箱：941399127@qq.com</li>
                <li className={styles.introInfoListItem}>github.com/panleihh</li>
              </ul>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.left}>
            <SectionWrap className={styles.contentItem} title="Work Experience">
              <ul className={styles.timeList}>
                {ExperienceListMap1.map((item, index) => (
                  <li className={styles.timeListItem} key={index}>
                    {item.date && (
                      <div className={styles.timeItemDate}>{item.date}</div>
                    )}
                    <ul className={styles.workList}>
                      {item.list.map(detail => (
                        <li className={styles.workItem} key={detail.name}>
                          <p className={styles.workContent1}>☀ {detail.name}</p>
                          <p className={styles.workContent2}>{detail.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </SectionWrap>
          </div>

          <div className={styles.right}>
            <SectionWrap className={styles.contentItem} title="Skill List">
              <ul className={styles.skillList}>
                {SkillsListMap.map((item, index) => (
                  <li className={styles.skillItem} key={index}>
                    <div className={styles.skillItemIcon}>☃</div>
                    <div>
                    <span className={styles.workContent1}>{item.name}</span>
                    <span className={styles.workContent2}>{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionWrap>
            <SectionWrap className={styles.contentItem} title="About Me" style={{ marginTop: 12 }}>
              <div className={styles.ballList}>
                <div className={classnames(styles.ballItem, styles.ball1)}>CET 6</div>
                <div className={classnames(styles.ballItem, styles.ball2)}>摄影</div>
                <div className={classnames(styles.ballItem, styles.ball3)}>班长</div>
                <div className={classnames(styles.ballItem, styles.ball4)}>助理班主任</div>
              </div>
            </SectionWrap>

            <SectionWrap className={styles.contentItem} title="Work Experience" style={{ marginTop: 12 }}>
              <ul className={styles.timeList}>
                {ExperienceListMap2.map((item, index) => (
                  <li className={styles.timeListItem} key={index}>
                    {item.date && (
                      <div className={styles.timeItemDate}>{item.date}</div>
                    )}
                    <ul className={styles.workList}>
                      {item.list.map(detail => (
                        <li className={styles.workItem} key={detail.name}>
                          <p className={styles.workContent1}>☀ {detail.name}</p>
                          <p className={styles.workContent2}>{detail.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </SectionWrap>
          </div>
        </div>
      </div>
    )
  }
}


