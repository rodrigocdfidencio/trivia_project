import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, label, value, name, onChange, testid } = this.props;
    return (
      <div>
        <label htmlFor={ name } className="label">
          {label}
          <input
            type={ type }
            value={ value }
            name={ name }
            data-testid={ testid }
            onChange={ onChange }
            required
            className="input"
            id={ name }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
