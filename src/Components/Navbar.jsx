import { NavLink } from "react-router";
import user from '../assets/user.png'


const Navbar = () => {
    return (
        <div className="flex justify-between items-center mt-6">
         <div></div>
         <div className="flex gap-5 items-center">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/Career'>Career</NavLink>
         </div>
         <div className="flex gap-5 items-center">
            <img src={user} alt="User" />
            <button className="btn btn-primary px-12">Login</button>
         </div>
        </div>
    );
};

export default Navbar;