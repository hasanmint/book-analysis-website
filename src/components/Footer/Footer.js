import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='sticky bottom-0 bg-slate-300 px-12 py-5 flex justify-center  md:justify-between'>
            <div className='hidden md:block'><Link to='/' className='font-sans font-bold text-xl'>Book</Link></div>
            <div className='flex gap-4 '>
                <p>@2022.Islamic Book Analysis Website Design By Hasan</p>
            </div>
        </div>
    );
};

export default Footer;