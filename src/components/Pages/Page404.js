import './style/NoContentPage.css';
import React from 'react';

function Page404()
{
    return(
        <div className='404-page'>
            <div className='message' id='message'>Error 404</div>
            <div className='message' id='message'>Page Not Found</div>
        </div>
    );
}

export default Page404;