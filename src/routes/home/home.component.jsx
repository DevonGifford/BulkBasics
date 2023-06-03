import { Outlet } from 'react-router-dom';

import Directory from "../../Components/directory/directory.component";

const Home = () => {

  return (
    <div>
      <div>
        <h2>Welcome to the essentials</h2>
        <p>Here you will find only what you need - Nothing more and nothing less</p>
      </div>
      
      <Directory />
      <Outlet />

      <h2>BUILD FOOTER COMPONENT</h2>
    </div>
  );
};


export default Home;