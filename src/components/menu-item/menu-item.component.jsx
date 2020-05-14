import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//utilisation des props venant du composant directory
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
    <div 
    //passage d'une classe en css de façon dynamique
        className = {`${ size } menu-item`}
    //redirection vers la page de hats. /shop/hats devient le chemin racine pour la boutique hats
        onClick={() => (history.push(`${match.url}${linkUrl}`))}>
        <div className='background-image'
            //ajouter un style de facon dynamique
        style={{
            backgroundImage: `url(${ imageUrl })`
        }} 
    
        
        />
        <div className='content'>
            <h1 className='title'> {title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);