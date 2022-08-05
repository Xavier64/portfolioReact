import { useState } from 'react';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const About = () => {


    const [letterClass] = useState('text-animate');//setLetterClass

    //     useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])

    return (
        <>
        <div className='container about-page' >
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A',' ', 'P','r','o','p','o','s',' ','d','e',' ','m','o','i','!']}
                    idx={10}
                    />
                </h1>
                <p>Hello ! Je m’appelle Xavier Pinçon, développeur Web junior , </p>
                <p>j’effectue ma formation à La Fabrique du Numérique de Pau. </p>
                <p>J’ai 34 ans et je suis actuellement à la recherche d’une alternance </p>
                <p>pour continuer mes études afin de devenir Concepteur développeur d’application. </p>
                <p>J’ai travaillé dans plusieurs domaine les plus intéressant étant le médicales et bien sur le développement d’application.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner' >
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D0" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
};

export default About