/* react16 之后 */
import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const { second, timeEnd } = props;
  const [time, setTime] = useState(second || 0);

  useEffect(() => {
    let timer;

    if (time <= 0) {
      clearTimeout(timer);
      timeEnd();
    } else {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      倒计时 {time} 秒
    </div>
  );
}



/*   react 16之前 */

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// export default class Timer extends Component {
//   static propTypes = {
//     second: PropTypes.number,
//     timeEnd: PropTypes.func,
//   }

//   static defaultProps = {
//     second: 0,
//     timeEnd() { },
//   }

//   constructor(props) {
//     super(props);

//     this.state = {
//       time: props.second,
//     }
//   }

//   componentDidMount() {
//     this.countDown();
//   }

  // componentWillUnmount() {
  //   clearTimeout(this.timer);
  // }

//   countDown = () => {
//     clearTimeout(this.timer);

//     this.timer = setTimeout(() => {
//       const { time } = this.state;
//       this.setState({ time: time - 1 }, () => {
//         if (this.state.time <= 0) {
//           clearTimeout(this.timer);
//         } else {
//           this.countDown();
//         }
//       });
//     }, 2000);
//   }

//   render() {
//     const { time } = this.state;

//     return (
//       <div>
//         倒计时 {time} 秒
//       </div>
//     )
//   }
// }