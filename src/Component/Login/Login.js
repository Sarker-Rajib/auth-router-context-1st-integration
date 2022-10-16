import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {

   const { signIn, signInwithGoogle } = useContext(AuthContext);
   const navigate = useNavigate();
   
   const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      // console.log(email, password)
      signIn(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/home');
         })
         .catch((error) => {
            console.error('error', error);
         })
   }

   const handleGoogleSignIn = () => {
      signInwithGoogle()
         .then(result => {
            const user = result.user;
            console.log(user);
         })
         .catch(err => { console.log('error', err); })
   }

   return (
      <>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
               </div>

               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                           <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
                  <div className="pb-4">
                     <Link to="/register" className="label-text-alt link link-hover">Register Now</Link>
                  </div>
                  <br />
                  <div className=" p-2">
                     <button onClick={handleGoogleSignIn} className="btn btn-success btn-outline">Sign in with Google</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;