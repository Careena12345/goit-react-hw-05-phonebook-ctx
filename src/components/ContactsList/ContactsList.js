import React from "react";
import ContactsListItem from "./ContactsListItem";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";

const { contactsList } = styles;

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={contactsList}>
    {contacts.map(({ id, name, number }) => (
      <ContactsListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactsList;
