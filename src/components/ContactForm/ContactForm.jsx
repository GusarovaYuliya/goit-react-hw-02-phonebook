import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = name => event=> {
    const { target } = event;

    this.setState(() => ({
      [name]: target.value,
    }));
    };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    if (!name || !number) {
      alert('Please fill in all fields');
      return;
    }

    if (this.props.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert('Contact with this name already exists');
      return;
    }


    

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formLabel}>Name:</label>
        <input
          className={css.formName}
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <label className={css.formLabel}>Number:</label>
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          required
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

 ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
















// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

//   handleChange = name => event => {
//     const { target } = event;

//     this.setState(() => ({
//       [name]: target.value,
//     }));
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (
//       this.props.contacts.some(
//         contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
//       )
//     )

//       if (this.state.number && this.state.name) {
//         this.props.createUser(this.state);
//         this.setState({ number: '', name: '' });
//       };
    
//     render() {
//       return (
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <label className={css.formLabel}>Name </label>
//           <input
//             className={css.formName}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             placeholder="Enter name"
//             value={name}
//             onChange={this.handleChange}
//           />
//           <label className={css.formLabel}>Number </label>
//           <input
//             className={css.formNumber}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             placeholder="Enter phone number"
//             value={number}
//             onChange={this.handleChange}
//           />
//           <button className={css.formBtn} type="submit">
//             Add contact
//           </button>
//         </form>
//       );
//     }
  
// }
// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };