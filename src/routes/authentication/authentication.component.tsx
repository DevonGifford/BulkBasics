import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer, FooterWrapper, PageWrapper } from './authentication.styles';
import Footer from '../../components/footer/footer.component';
import { Fragment } from 'react';

const Authentication = () => {
  return (
    <Fragment>
      <PageWrapper>
        
        <AuthenticationContainer>
          <SignInForm />
          <SignUpForm />
        </AuthenticationContainer>
        
        <FooterWrapper>
          <Footer />
        </FooterWrapper>

      </PageWrapper>


    </Fragment>
  );
};

export default Authentication;