import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

class ContactList extends React.Component {
  render() {
    return (
      <ul className={s.ul}>
        {this.props.contacts.map(({ id, name, number }) => {
          return (
            <li className={s.list} key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                className={s.btn}
                onClick={() => {
                  this.props.deleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filteredName: PropTypes.string.isRequired,
};
export default ContactList;
