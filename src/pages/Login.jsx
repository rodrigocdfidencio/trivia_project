import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../trivia.png';
import Input from '../components/Input';
import { getTokenThunk, getPlayerLogin } from '../actions';
/* import './login.css'; */

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      validEmail: false,
      validName: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.settingsClick = this.settingsClick.bind(this);
    this.playClick = this.playClick.bind(this);
  }

  settingsClick() {
    const { history } = this.props;
    history.push('/settings');
  }

  playClick() {
    const { history, getToken, getLogin } = this.props;
    const { email, name } = this.state;
    history.push('/game');
    getToken();
    const login = { name, gravatarEmail: email };
    getLogin(login);
  }

  handleNameChange({ target }) {
    const MIN_LENGTH_NAME = 1;
    this.setState({
      name: target.value,
      validName: target.value.length >= MIN_LENGTH_NAME,
    });
  }

  handleEmailChange({ target }) {
    const { email } = this.state;
    const emailPath = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    this.setState({
      validEmail: emailPath.test(email),
      email: target.value,
    });
  }

  render() {
    const { email, name, validEmail, validName } = this.state;
    return (
      <section>
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <form className="form">
          <Input
            type="text"
            label="Nome:"
            value={ name }
            name="name"
            onChange={ this.handleNameChange }
            testid="input-player-name"
          />
          <Input
            type="email"
            label="E-mail:"
            value={ email }
            name="email"
            onChange={ this.handleEmailChange }
            testid="input-gravatar-email"
          />

          <button
            type="button"
            onClick={ this.playClick }
            disabled={ !validEmail || !validName }
            data-testid="btn-play"
          >
            Jogar
          </button>

          <button
            type="button"
            data-testid="btn-settings"
            onClick={ this.settingsClick }
          >
            Settings
          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.string).isRequired,
  getToken: PropTypes.func.isRequired,
  getLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(getTokenThunk()),
  getLogin: (payload) => dispatch(getPlayerLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
