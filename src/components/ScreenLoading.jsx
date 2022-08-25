import React from 'react';
import '../styles/screenLoading.css';

//Making the function for to make an animation for screen loading 
const ScreenLoading = () => {
    return (
        <div className='screenLoading'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default ScreenLoading;