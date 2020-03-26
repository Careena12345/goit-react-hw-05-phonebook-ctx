import React, { Component } from "react";
import Phonebook from "./PhoneBook";
import ContactsList from "./ContactsList";
import ContactFilter from "./ContactFilter";
import Section from "./Section";
import Notification from "./Notification";
import { v4 as uuidv4 } from 'uuid';
import withTheme from "./hoc/withTheme";
import PropTypes from "prop-types";

class PhoneBookPage extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      config: PropTypes.shape({
        bodyBg: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  state = {
    contacts: [],
    filter: ""
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  createContact = (name, number) => ({
    id: uuidv4(),
    name,
    number
  });

  addContact = (newName, number) => {
    const { contacts } = this.state;
    if (
      contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase())
    ) {
      alert(`${newName} is already in contacts`);
      return;
    }
    const newContact = this.createContact(newName, number);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId)
    }));
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    const { theme } = this.props;

    return (
      <div className={`phoneBook ${theme.config.bodyBg}`}>
        <Section title="Phonebook">
          <Phonebook onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && (
            <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
          )}
          {contacts.length < 1 ? (
            <Notification message="There is no contact yet..." />
          ) : (
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default withTheme(PhoneBookPage);
