import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-slate-200 px-12 py-5 flex justify-center  md:justify-between'>
            <div className='hidden md:block'><Link to='/' className='font-sans font-bold text-xl'>Logo</Link></div>
            <div className='flex gap-4 text-xl '>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reivews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;