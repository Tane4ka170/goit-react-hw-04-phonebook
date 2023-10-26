import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  inputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit} className={s.form}>
        <label className={s.label}>
          <p className={s.title}>Name</p>
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
            placeholder="Name"
            required
          />
        </label>
        <label className={s.label}>
          <p className={s.title}>Number</p>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
            placeholder="Phone Number"
            required
          />
        </label>
        <button className={s.button}>Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
