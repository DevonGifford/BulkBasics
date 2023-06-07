import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import FrontSplash from '../../Components/Front-splash/front-splash.component';
import Directory from "../../Components/directory/directory.component";
import Footer from '../../Components/Footer/footer.component';

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