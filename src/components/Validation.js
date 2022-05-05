// import React, { useState } from 'react';

// import { validateEmail, validateMessage, validateName } from '../utils/helpers'

// function FormValidation() {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleInputChange = (e) => {

//         const { target } = e;
//         const inputType = target.name;
//         const inputValue = target.value;

//         if (inputType === 'name') {
//             setName(inputValue);
//         } else if (inputType === 'email') {
//             setEmail(inputValue);
//         } else {
//             setMessage(inputValue);
//         }

//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) {
//             setErrorMessage('A name, a valid email, and message are required. Please check your entries and resubmit.')

//             return;
//         }

//         setName('');
//         setEmail('');
//         setMessage('');

//     }

// };


// export default FormValidation;