import { format } from 'date-fns';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='w-[400px] mt-12' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            
            <p className=' font-medium text-accent'>
                {format(new Date(), 'eeee, MMMM MM, yyyy')}
            </p>
        </div>
    );
};

export default Header;