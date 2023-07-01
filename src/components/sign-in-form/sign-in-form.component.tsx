import { useState, FormEvent, ChangeEvent } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { googleSignInStart, emailSignInStart, githubSignInStart } from '../../store/user/user.action';

import { SignInContainer, ButtonsContainer, TitleWrapper, GoogleIcon, GitHubIcon, FacebookIcon } from './sign-in-form.styles';

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
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //Return forms to blank after sign in
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  /*Handle Google Sign in
  -------------------------*/ 
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  /*Handle GitHub Sign in
  -------------------------*/ 
  const signInWithGithub = async () => {
    dispatch(githubSignInStart());
  };

  /*Handle Email+Password  (submit & sign-in)
  -------------------------*/ 
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
  
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.CREDENTIAL_MISMATCH) {
        // Handle the "user not found" error
        alert('No user associated with this email');
      } else {
        // Handle other errors
        console.log(error);
      }
    }
  };

  //Handle Changes made to the form 
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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

          <br/>

          <p>or sign in with:</p>

          <br/>
          
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            <GoogleIcon />
          </Button>

          <Button
            buttonType={BUTTON_TYPE_CLASSES.github}
            type='button'
            onClick={signInWithGithub}
          >
            <GitHubIcon/>
          </Button>

          {/* <Button
            buttonType={BUTTON_TYPE_CLASSES.facebook}
            type='button'
            
          >
            <FacebookIcon />
          </Button> */}


        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;