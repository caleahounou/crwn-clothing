import React from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/BoldlyWear.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component'
import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

//Optimisation du composant header
const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> 
                SHOP
            </Link>
            <Link className='option' to="/contact">
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className='option' onClick= {() => auth.signOut()}> SIGN OUT</div>
                )
                : (
                    <Link className='option' to="/signin">SIGN IN</Link>
            )}
            <CartIcon/>
        </div>
    {/* //affichage ou non du panier */}
        {hidden ? null : <CartDropdown/>}
    </div>
    
);

//on récupère le state de l'utilisateur connecté avec redux
const mapStateToProps = ({user: {currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);