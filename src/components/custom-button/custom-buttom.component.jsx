import React from 'react';

import './custom-button.styles.scss';
// on change le style des boutons en fonction des propriété passé au component CustomButton
const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps }>
        {children}
    </button>
)

export default CustomButton;