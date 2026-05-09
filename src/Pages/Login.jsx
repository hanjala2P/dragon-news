import  { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error,setError]=useState();
    const { signin}=use(AuthContext);
    const location = useLocation();
    const naviagte = useNavigate();

    const handleLogin =(e)=>{
        e.preventDefault();

        const form = e.target;
        const email= form.email.value;
        const password= form.password.value;
        // console.log({email,password})

         signin(email,password)
        .then(result=>{
            const user =result.user;
            naviagte(`${location.state? location.state : "/"}`)
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMassage = error.massage;
            setError(errorCode);
        })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-2">
                    <h2 className="text-2xl font-bold text-center mt-6">Login to Your Account</h2>
      <div className="card-body">
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset">
          <label name='email' className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label name='password' className="label">Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-500'>{error}</p>
          }
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
        <button type='submit' className="text-center py-4 font-medium">
          Don't have an account? <Link className='text-secondary hover:underline' to="/auth/register">Sign up</Link>
        </button>
      </div>
    </div>
        </div>
    );
};

export default Login;