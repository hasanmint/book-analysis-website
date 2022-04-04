import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className='sticky top-0 bg-slate-200 px-12 py-5 flex justify-center  md:justify-between uppercase'>
            <div className='hidden md:block'><Link to='/' className='font-sans font-bold text-xl'>Logo</Link></div>
            <div className='flex gap-4 text-xl '>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reivews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
        </nav>
    );
};

export default Navbar;