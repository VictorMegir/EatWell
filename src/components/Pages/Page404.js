import React from 'react';
import ultraheck from './images/ultraheck.jpg';

function Page404()
{
    return(
        <div className='404-page'>
            <h3 className='message' id='message'>Page Not Found</h3>
            <img src={ultraheck} alt='T_T'/>
        </div>
    );
}

export default Page404;