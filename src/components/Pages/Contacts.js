import './style/Contacts.css';
import github from './images/github-image.png';
import linkedin from './images/linkedin-image.png';
import React from 'react';

function Contacts() 
{
    return(
        <div className='contacts-page'>
            <div className='contacts-declaration'>CONTACTS</div>
            <div className='contact'>Contact me at <a href='mailto:victormegir@gmail.com'>victormegir@gmail.com</a></div>
            <div className='contact'>Find me on LinkedIn as <a href='https://www.linkedin.com/in/victor-megir-246b8b188/'>Victor Megir</a></div>
            <div className='contact'>Find me on GitHub as <a href='https://github.com/VictorMegir'>Victor Megir</a></div>
            <div className='link-images'>
                <a href='https://www.linkedin.com/'><img className='linkedin-image' src={linkedin} alt='T_T'/></a>
                <a href='https://github.com/'><img className='github-image' src={github} alt='T_T'/></a>
            </div>
        </div>
    )
}

export default Contacts;