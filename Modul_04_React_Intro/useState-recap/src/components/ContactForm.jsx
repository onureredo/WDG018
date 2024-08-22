import { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // const handleChange = (event) => {
  //   // console.log(event);
  //   setName(event.target.value);
  // };
  // const handleChangeEmail = (event) => {
  //   // console.log(event);
  //   setEmail(event.target.value);
  // };

  // console.log(email);setFormState

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // const newState = { ...formState, [e.target.name]: e.target.value };
    // setFormState(newState);
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <h2>Contact us</h2>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' id='name' value={formState.name} onChange={handleChange} />
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' value={formState.email} onChange={handleChange} />
      <label htmlFor='phone'>Phone</label>
      <input type='tel' name='phone' id='phone' value={formState.phone} onChange={handleChange} />
      <label htmlFor='message'>Message</label>
      <textarea name='message' id='message' value={formState.message} onChange={handleChange}></textarea>
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
