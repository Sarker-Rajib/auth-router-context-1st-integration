import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
   const {user} = useContext(AuthContext)
   // console.log(user);
   return (
      <div>
         <h3>This is home for {user?.email}</h3>
      </div>
   );
};

export default Home;