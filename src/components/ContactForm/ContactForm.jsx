import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const formSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
    resetForm();
  };

  const inputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={formSubmit} className={s.form}>
      <label className={s.label}>
        <p className={s.title}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={inputChange}
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
          value={formData.number}
          onChange={inputChange}
          placeholder="Phone Number"
          required
        />
      </label>
      <button className={s.button}>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
