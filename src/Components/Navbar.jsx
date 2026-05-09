import { Link, NavLink } from "react-router";
import userIcon from '../assets/user.png'
import { use, } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Navbar = () => {
    const {user,logout}=use(AuthContext);
    const handleLogOut =()=>{
        console.log('logout');
        logout()
        .then(()=>{
            alert('you Loogged Out Successfully');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className="flex justify-between items-center py-3 ">
         <div>{user && user.email}</div>
         <div className="flex gap-5 items-center">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/Career'>Career</NavLink>
         </div>
         <div className="flex gap-5 items-center">
            <img src={userIcon} alt="User" />
            {
                user? <button onClick={handleLogOut} className="btn bg-primary text-white px-12">Logout</button>:<Link to="/auth/login" className="btn text-white bg-primary px-12"> Login</Link> 
            }
          
         </div>
        </div>
    );
};

export default Navbar;