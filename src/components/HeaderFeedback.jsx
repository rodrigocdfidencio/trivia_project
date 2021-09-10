import React from 'react';
import md5 from 'crypto-js/md5';

class HeaderFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: { name: '', gravatarEmail: '', score: 0 },
    };
    this.setPlayerState = this.setPlayerState.bind(this);
  }

  componentDidMount() {
    this.setPlayerState();
  }

  setPlayerState() {
    const state = JSON.parse(localStorage.getItem('state'));
    console.log(state);
    if (state) {
      this.setState({
        player: state.player,
      });
    }
  }

  render() {
    const { player: { name, gravatarEmail, score } } = this.state;
    const gravatar = gravatarEmail
      ? md5(gravatarEmail.toLowerCase().trim()).toString()
      : '';
    const srcImage = `https://www.gravatar.com/avatar/${gravatar}`;

    return (
      <header>
        <img src={ srcImage } alt="gravatar" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{`Jogador: ${name}`}</p>
        <p>Ponto: </p>
        <p data-testid="header-score">{score}</p>
      </header>
    );
  }
}

export default HeaderFeedback;
