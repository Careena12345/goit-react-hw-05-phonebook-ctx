import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactFilter.module.css";

const { input } = styles;

const ContactFilter = ({ value, onChangeFilter }) => (
  <input
    className={input}
    type="text"
    placeholder="Search contacts by name*"
    value={value}
    onChange={({ target }) => onChangeFilter(target.value)}
  />
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

export default ContactFilter;
