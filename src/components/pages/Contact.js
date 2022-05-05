import React, { useState } from 'react';

import { validateEmail, validateMessage, validateName } from '../../utils/helpers'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }

    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) {
            setErrorMessage('A name, a valid email, and message are required. Please check your entries and resubmit.')

            return;
        }
        alert(`Thank you ${name} for reaching out!`)

        setName('');
        setEmail('');
        setMessage('');
        errorMessage('');
    }

    return (
        <section className='px-6 py-6'>

            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Text input" />
                </div>
            </div>

            <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                    <input className="input"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email input" />

                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Textarea"></textarea>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={handleFormSubmit}>Submit</button>
                </div>
                {errorMessage && (
                    <div>
                        <p className="help is-danger is-size-6">{errorMessage}</p>
                    </div>
                )}
            </div>

        </section>

    );
}
