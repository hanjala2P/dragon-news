
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from './LeftAside';
import RightAside from './RightAside/RightAside';
import Loading from '../Pages/Loading';


const Root = () => {
    const { state } =useNavigation()
    return (
        <div className='mx-10'>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5 '>
            
                <aside className='col-span-3 sticky top-0 h-fit'> <LeftAside></LeftAside></aside>
                <section className="main col-span-6">
                   {state == 'loading'? <Loading/> :  <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;