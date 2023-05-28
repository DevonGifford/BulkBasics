import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { UserContext } from '../../contexts/user.context';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

/*------------------------------------------------------------
//Setting Default Form Fields
------------------------------------------------------------*/

const defaultFormFields = {
  email: '',
  password: '',
};

/*------------------------------------------------------------
  Handle the Sign in 
------------------------------------------------------------*/
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  
  //Adding functionality to set the Context  
  const { setCurrentUser } = useContext(UserContext);


  //Return forms to blank after sign in
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };


  /*Handle Google Sign in
  -------------------------*/ 
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
  };

  
  /*Handle Email+Password  (submit & sign-in)
  -------------------------*/ 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
      //running setCurrentUser TESTS
      console.log('USER SIGNED IN!');
      console.log(user);
  
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  //Handle Changes made to the form 
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
          autoComplete='on'
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
          autoComplete='on'
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button 
            type='button' 
            buttonType='google' 
            onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
        
      </form>
    </div>
  );
};

export default SignInForm;