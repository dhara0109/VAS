import Link from "next/link";
import { useState } from 'react';
import { useEffect } from "react";

const ContactAreaTwo = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Message sent successfully!');
      } else {
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const form = document.getElementById('contact-form');

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      const name  = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, message, name})
      });

      if (response.ok) {
        alert('Successfully registered! Please check your email.');
      } else {
        alert('Registration failed. Please try again.');
      }
    };

    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);



  return (
    <>
      <section className="contact__area-2">
        <div className="container">
          <div className="contact__form">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section__wrapper mb-45">
                    <h4 className="section__title">
                      We can take your business to the next level. Connect with us for a quote.
                    </h4>
                    <div className="r-text">
                      <span>contact</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact-filed mb-20">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name here"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-mail mb-20">
                          <input
                            email="text"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address here"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="contact-filed contact-icon-message mb-25">
                      <textarea
                        placeholder="Enter message here"
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                 
                    <div className="form-submit text-center">
                      <button className="tp-btn" type="submit">
                        Submit Request
                      </button>
                    </div>
                    <p className="ajax-response"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default ContactAreaTwo;
