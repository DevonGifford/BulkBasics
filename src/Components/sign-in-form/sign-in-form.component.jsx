import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonsContainer, TitleWrapper } from './sign-in-form.styles';

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

  //Return forms to blank after sign in
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };


  /*Handle Google Sign in
  -------------------------*/ 
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
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
      resetFormFields();
  
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
    <SignInContainer>
      <TitleWrapper>Already have an account?</TitleWrapper>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;