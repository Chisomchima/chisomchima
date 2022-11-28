import React from 'react'
import './topbar.scss'
import { MdPerson, MdMail } from "react-icons/md";


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className= {'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>

            <div className='left'>
                <a href='#intro' className='logo'>CHISOM CHIMA.</a>
                <div className='item-container'>
                    <MdPerson className='icon'/>
                    <span>+234 803 917 2294</span>
                
                </div>
                <div className='item-container'>
                    <MdMail className='icon'/>
                    <span>chisomchima370@gmail.com</span>
                </div>
            </div>
                
            <div className='right'>
                <div className='hamburger' onClick={()=> setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>

            </div>
        </div>
    )
}
