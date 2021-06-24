import React, { Component } from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';


const CollectionPreview = ({title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'> {title.toUpperCase()}</h1>
        <div className='preview'>
        {/* //affichage d'un nombre limite d'item à 4 avec filter */}
            {
                items
                .filter((item, idx) => idx < 4 )
                .map(item => ( 
                    <CollectionItem key={item.id} item = {item}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;