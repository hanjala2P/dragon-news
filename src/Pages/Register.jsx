
import { use, useState,} from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [nameError , setNameError] = useState('');
    const {createUser,setUser,updateUser}=use(AuthContext);

    const navigate  = useNavigate();

    const handleRegister =(e)=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        if(name.length<3){
            setNameError("Name should be 3 Or more  Charecter ");
            return;
        }
        else{
            setNameError('')
        }
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log({name, email, photo, password});

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            // console.log(user);
            updateUser({displayName:name ,photoURL:photo})
            .then(()=>{
                 setUser({...user,displayName:name ,photoURL:photo});
                 navigate('/');
            })
            .cath((error)=>{
                console.log(error);
                setUser(user);
            })
           
        })
        .catch((error)=>{
            // const errorCode = error.code;
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
          {nameError && <p className='text-red-500'>{nameError}</p> }
            {/* email */}
          <label name='email' className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
           {/* photo URL */}
            <label name='photo' className="label">Photo URL</label>
            <input required name='photo' type="text" className="input" placeholder="Photo URL" />
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