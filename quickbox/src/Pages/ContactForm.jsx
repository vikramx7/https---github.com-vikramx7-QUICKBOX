import React, { useState } from 'react';
import '../Styles/ContactForm.css'; // Import the CSS file for styling
import Navbar from '../Components/Navbar';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [activeField, setActiveField] = useState('');

  const handleFocus = (field) => {
    setActiveField(field);
    setFormErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleBlur = () => {
    setActiveField('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = true;
    if (!formData.email) errors.email = true;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  return (
    <div>
      <Navbar />
      <div className='wave'>
        <h1>Contact us</h1>
      </div>

      <div id="form">
        <div className="fish" id="fish"></div>
        <div className="fish" id="fish2"></div>

        <form id="waterform" onSubmit={handleSubmit} method="post">
          <div
            className={`formgroup ${
              activeField === 'name' ? 'formgroup-active' : ''
            } ${formErrors.name ? 'formgroup-error' : ''}`}
            id="name-form"
          >
            <label className='label1' htmlFor="name">Your name*</label>
            <div className="input-my-container">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                className="input-my"
              />
            </div>
          </div>

          <div
            className={`formgroup ${
              activeField === 'email' ? 'formgroup-active' : ''
            } ${formErrors.email ? 'formgroup-error' : ''}`}
            id="email-form"
          >
            <label htmlFor="email">Your e-mail*</label>
            <div className="input-my-container">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                className="input-my"
              />
            </div>
          </div>

          <div
            className={`formgroup ${
              activeField === 'message' ? 'formgroup-active' : ''
            }`}
            id="message-form"
          >
            <label htmlFor="message">Your message</label>
            <div className="input-my-container">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                className="textarea-my"
              ></textarea>
            </div>
          </div>

          <input type="submit" value="Send your message!" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
