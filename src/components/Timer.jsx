import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { isOver, passTime } from '../actions/index';

class Timer extends Component {
  componentDidMount() {
    this.timer();
  }

  componentDidUpdate() {
    const { over } = this.props;
    if (!over) return this.over();
  }

  timer() {
    const oneSecond = 1000;
    setInterval(
      () => {
        const { over, answered } = this.props;
        if (!over && !answered) return passTime();
      }, oneSecond,
    );
  }

  over() {
    const { time } = this.props;
    const { timeIsOver } = this.props;
    if (time === 0) {
      return timeIsOver();
    }
  }

  render() {
    const { time } = this.props;
    return (
      <span>{time}</span>
    );
  }
}

Timer.propTypes = {
  timeIsOver: PropTypes.func.isRequired,
  over: PropTypes.bool.isRequired,
  answered: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  passTime: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  timeIsOver: () => dispatch(isOver()),
  passTime: () => dispatch(passTime()),
});

const mapStateToProps = (state) => ({
  over: state.user.over,
  time: state.user.time,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
