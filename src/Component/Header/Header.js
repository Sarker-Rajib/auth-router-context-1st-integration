import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   // console.log('context', user);
   const hadleSignOut = () => {
      logOut().then(() => { })
         .catch((error) => console.error(error));
   }

   return (
      <div>
         <div className="navbar bg-primary text-white">
            <Link className="btn btn-ghost normal-case text-xl"> Hello-Firebase</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
            {
               user?.email && <span>Welcome, {user.email}</span>
            }
            {
               user?.email ?
                  <button className="btn" onClick={hadleSignOut}>Log Out</button>
                  :
                  <div>
                     <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                  </div>
            }
         </div>
      </div>
   );
};

export default Header;