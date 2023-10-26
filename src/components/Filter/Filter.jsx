import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends React.Component {
  render() {
    return (
      <>
        <p className={s.title}>Find contacts by name</p>
        <input
          className={s.inpt}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={event => this.props.filterChange(event.target.value)}
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
