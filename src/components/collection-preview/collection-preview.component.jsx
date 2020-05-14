import React, { Component } from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'> {title.toUpperCase()}</h1>
        <div className='preview'>
            {
                //affichage d'un nombre limite d'item a 4 avec filter
                items
                .filter((item, idx) => idx < 4 )
                .map(({id, ...otherItemProps}) => ( 
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;