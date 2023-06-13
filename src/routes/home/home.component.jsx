import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import FrontSplash from '../../components/Front-splash/front-splash.component';
import Directory from "../../components/directory/directory.component";
import Footer from '../../components/Footer/footer.component';

import { HomeDiv } from './home.styles';

const Home = () => {

  return (
    <Fragment>    
      <HomeDiv>

        <FrontSplash />
        
        <Directory />
        <Outlet />
        
      </HomeDiv>
      <Footer />
    </Fragment>
  );
};


export default Home;