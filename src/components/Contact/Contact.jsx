import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { ContactContainer, ContactButton, ContactSection, ContactForm, Name, Email, Message, ContactTitle } from './ContactElements';

const Contact = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jun6ni9', 'template_9w19cbf', form.current, 'IUfZJfXK34YMUvebQ');
    setNameInput('');
    setEmailInput('');
    setMessageInput('');
  };
    
  
  return (
    <ContactContainer>
        <ContactSection>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactForm ref={form} onSubmit={sendEmail}>
                <Name>
                    <label htmlFor='name'>
                        <input name='name' value={nameInput} placeholder='Name...' onChange={e => setNameInput(e.target.value)} required/>
                    </label>
                </Name>
                <Email>
                    <label htmlFor="email">
                        <input name='email' value={emailInput} placeholder='Email...' onChange={e => setEmailInput(e.target.value)} required/>
                    </label>
                </Email>
                <Message>
                <label htmlFor="message">
                        <textarea name='message' value={messageInput} placeholder='Message...' onChange={e => setMessageInput(e.target.value)} required/>
                    </label>
                </Message>
                <ContactButton type='submit' value='Send'>Submit</ContactButton>
            </ContactForm>
        </ContactSection>
        
    </ContactContainer>
  )
}


export default Contact;