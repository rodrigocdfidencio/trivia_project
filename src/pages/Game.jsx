import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Questions from '../components/Questions';
import Timer from '../components/Timer';
import Header from '../components/Header';
import setGravatarImage from '../services/utils';

class Game extends Component {
  constructor(props) {
    super(props);

    this.getTokenToState = this.getTokenToState.bind(this);
  }

  getTokenToState() {
    const { token, player } = this.props;
    const inState = {
      player: {
        ...player,
        score: 0,
        assertions: 0,
        picture: setGravatarImage(player.email),
      },
      token,
    };
    localStorage.setItem('token', token);
    localStorage.setItem('state', JSON.stringify(inState));
  }

  render() {
    this.getTokenToState();
    const { history, player: { email } } = this.props;
    const srcImage = setGravatarImage(email);
    return (
      <>
        <div>Game</div>
        <Timer />
        <Header srcImage={ srcImage } />
        <Questions history={ history } />
      </>
    );
  }
}

Game.propTypes = {
  token: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
  player: state.user.player,
});

export default connect(mapStateToProps)(Game);
