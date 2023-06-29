import { USER_ACTION_TYPES } from './user.types';

import { 
  createAction,
  Action, 
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';

import { 
  AdditionalInformation, 
  UserData 
} from '../../utils/firebase/firebase.utils';

import { User } from 'firebase/auth';


/*---------------------------------------------------------------------------
    Generic check and set actions ✔
-----------------------------------------------------------------------------*/
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export const checkUserSession = withMatcher((): CheckUserSession => 
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);


/*---------------------------------------------------------------------------
    Gooogle Sign in ✔
-----------------------------------------------------------------------------*/
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export const googleSignInStart = withMatcher((): GoogleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

/*---------------------------------------------------------------------------
    GitHub Sign in ✔
-----------------------------------------------------------------------------*/
export type GithubSignInStart = Action<USER_ACTION_TYPES.GITHUB_SIGN_IN_START>;

export const githubSignInStart = withMatcher((): GithubSignInStart =>
  createAction(USER_ACTION_TYPES.GITHUB_SIGN_IN_START)
);



/*---------------------------------------------------------------------------
    Email Sign In ✔
-----------------------------------------------------------------------------*/
export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START, 
  { email: string; password: string }
>;

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);



/*---------------------------------------------------------------------------
   GENERIC SIGN-IN FLOW ✔
-----------------------------------------------------------------------------*/
export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED, 
  Error
>;


export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);


  
/*---------------------------------------------------------------------------
   GENERIC SIGN-UP FLOW
-----------------------------------------------------------------------------*/
export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS, 
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;


export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);
  


/*---------------------------------------------------------------------------
   GENERIC SIGN-OUT FLOW ✔
-----------------------------------------------------------------------------*/
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SingOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SingOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);





  
