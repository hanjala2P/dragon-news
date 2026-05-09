
import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser,setUser}=use(AuthContext);
    const handleRegister =(e)=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log({name, email, photoURL, password});
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            // console.log(user);
            setUser(user);
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMassage =error.massage;
            alert(errorMassage)
            
        })
    }
    return (
         <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-2">
                    <h2 className="text-2xl font-bold text-center mt-6">Register for an Account</h2>
      <div className="card-body">
       <form onSubmit={handleRegister}>
         <fieldset className="fieldset">
            {/* name */}
          <label name='name' className="label">Name</label>
          <input required name='name' type="text" className="input" placeholder="Name" />
            {/* email */}
          <label name='email' className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
           {/* photo URL */}
            <label name='photoURL' className="label">Photo URL</label>
            <input required name='photoURL' type="text" className="input" placeholder="Photo URL" />
            {/* password */}
          <label name='password' className="label">Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />
       
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
       </form>
        <p className="text-center py-4 font-medium">
         Already have an account? <Link className='text-secondary hover:underline' to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Register;