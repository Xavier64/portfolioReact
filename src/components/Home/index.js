import {   useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import '../AnimatedLetters/index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass ] = useState('text-animate');//setLetterClass
    const nameArray = ['a','v', 'i', 'e','r' ]
    const jobArray = ['d','é', 'v','e','l','o','p','p','e','u','r',' ','w','e','b']
    const welcomeArray = ['B','o','n','j','o','u','r',' ', 'j','e',' ','s','u','i','s'] 
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <AnimatedLetters letterClass={letterClass} 
               strArray={welcomeArray}
               idx = {1} />
                    {/* <span className={letterClass}>B</span> 
                    <span className={`${letterClass} _12 `}>o</span> 
                    <span className={`${letterClass} _13 `}>n</span> 
                    <span className={`${letterClass} _14 `}>j</span> 
                    <span className={`${letterClass} _15 `}>o</span> 
                    <span className={`${letterClass} _16 `}>u</span> 
                    <span className={`${letterClass} _17 `}>r</span> 
                <br />  
                    <span className={`${letterClass} _18 `}>J</span> 
                    <span className={`${letterClass} _19 `}>e</span>
                    <span className={`${letterClass} _20 `}> </span> 
                    <span className={`${letterClass} _21 `}>s</span> 
                    <span className={`${letterClass} _22 `}>u</span> 
                    <span className={`${letterClass} _23 `}>i</span> 
                    <span className={`${letterClass} _24 `}>s</span>  */}
                    <img  src={LogoTitle} alt="developer"/>
               <AnimatedLetters letterClass={letterClass} 
               strArray={nameArray}
               idx = {12} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
               strArray={jobArray}
               idx = {21} />
                </h1>
                <h2>A la recherche d'une Alternance </h2>
                <Link to="/contact" className='flat-button' > Contactez-moi </Link>
            </div>
            <Logo />
        </div>
    );

};

export default Home