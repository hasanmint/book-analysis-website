import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='sticky bottom-0 bg-slate-200 px-12 py-5 flex justify-center  md:justify-between'>
            <div className='hidden md:block'><Link to='/' className='font-sans font-bold text-xl'>Logo</Link></div>
            <div className='flex gap-4 text-xl '>
                <p>@2022.Product Analysis Website Design By hasanmint</p>
            </div>
        </div>
    );
};

export default Footer;