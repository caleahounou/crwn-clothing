import React from 'react';
import './sign-in.styles.scss'
import FormImput from '../form-imput/form-imput.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    // gestion d'envoie du formulaire avec connexion email et password puis API google
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error);
        }
        
    }
    //on donne à la variable name la valeur de la propriété value
    handleChange = event => {
        const {value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormImput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required 
                        
                    />
                    
                    <FormImput  
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        label="password"
                        handleChange={this.handleChange}
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type="button" onClick = {signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
    
}

export default SignIn;