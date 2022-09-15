import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [LetterClass] = useState('text-animate');
    const refForm =useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'gmail',
            'template_3f3b1fd',
            refForm.current,
            'cDmk125gKIO5s3h2e'
        )
        .then(
            () => {
                alert('Le message a été bien envoyé!!')
                window.location.reload(false)
            },
            () => {
                alert("Vôtre message n'a pas été envoyé, réessayer s'il vous plait")
            }
        )
    }

    return (
        <>
            <div className='container contact-page' >
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                          letterClass={LetterClass}
                          strArray= {['C','o','n','t','a','c','t','e','z','-','m','o','i','!']}
                          idx={15}
                          />
                    </h1>
                    <p>
                       Je suis intéréssé par toutes les opportunités et tout les domaines d'activités.
                       Je suis disponible à tout moment, si vous avez une question ou une demande n'hésitez pas
                       à me contacter!! 
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className='half' >
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half' >
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required  />
                                </li>
                                <li>
                                    <textarea placeholder='Message'name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="ENVOYER" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};


export default Contact