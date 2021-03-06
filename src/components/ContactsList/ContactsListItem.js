import React from "react";
import withTheme from "../hoc/withTheme";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";

const { contactsListItem, contactButton } = styles;

const ContactsListItem = ({ id, name, number, onDeleteContact, theme }) => (
  <li className={contactsListItem}>
    <p>
      {name}: {number}
    </p>
    <button
      type="submit"
      onClick={() => onDeleteContact(id)}
      className={`${contactButton} ${theme.config.btnBgColor}`}
    >
      Delete
    </button>
  </li>
);

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    config: PropTypes.shape({
      btnBgColor: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default withTheme(ContactsListItem);
