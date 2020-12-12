import './style/NoContentPage.css';
import React from 'react';

function LoadingPage()
{
    return(
        <div className='loading-page'>
            <div className='message' id='message'>Loading</div>
            <div className='message' id='message'>Please wait</div>
        </div>
    );
}

export default LoadingPage;