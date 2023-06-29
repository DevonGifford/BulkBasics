import { FC, ButtonHTMLAttributes } from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  GitHubSignInButton,
  FaceBookSignInButton,
  InvertedButton,
  LoadingSpinner,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES  {
  base = 'base',
  inverted = 'inverted',
  google = 'google-sign-in',
  github = 'github-sign-in',
  facebook = 'facebook-sign-in',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.github]: GitHubSignInButton,
    [BUTTON_TYPE_CLASSES.facebook]: FaceBookSignInButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ 
  children, 
  buttonType, 
  isLoading, 
  ...otherProps 
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;