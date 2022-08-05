import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
const Contact = () => {

    const [LetterClass] = useState('text-animate');
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
                        <form>
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