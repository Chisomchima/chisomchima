import React from 'react'
import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={ 'menu ' + (menuOpen && 'active') }>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>

                <li onClick={()=> setMenuOpen(false)}>
                    <a href='#portfolio'>Portfolio</a>
                </li>

                <li onClick={()=> setMenuOpen(false)}>
                    <a href='#works'>Works</a>
                </li>

                <li onClick={()=> setMenuOpen(false)}>
                    <a href='#testimonials'>Testimonials</a>
                </li>

                <li onClick={()=> setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                <a href="https://medium.com/@chimachisom360" target="_blank">Blog</a>
                </li>
            </ul>
        </div>
    )
}
