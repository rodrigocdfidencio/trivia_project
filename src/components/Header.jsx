import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.setPlayerState = this.setPlayerState.bind(this);
  }

  componentDidMount() {
    this.setPlayerState();
  }

  setPlayerState() {
    const state = JSON.parse(localStorage.getItem('state'));
    this.setState({
      score: state.player.score,
    });
  }

  render() {
    const { name, srcImage } = this.props;
    const { score } = this.state;
    return (
      <header>
        <img src={ srcImage } alt="gravatar" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{`Jogador: ${name}`}</p>
        <p data-testid="header-score">{`Ponto: ${score}`}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.player.gravatarEmail,
  name: state.user.player.name,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  name: PropTypes.string,
}.isRequired;
