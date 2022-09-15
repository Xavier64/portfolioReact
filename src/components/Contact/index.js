import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
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
            <div className='info-map'>
                Xavier Pinçon,
                <br />
                France,
                <br />
                52 avenue Pasteur Pavillon 17 64110 <br />
                GELOS 
                <span>xavierpincon@gmail.com</span>

            </div>
            <div className='map-wrap'>
                <MapContainer center={[43.282197, -0.379478]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[43.282197, -0.379478]}>
                        <Popup>Je vis ici :</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <Loader type='pacman' />
        </>
    )
};


export default Contact