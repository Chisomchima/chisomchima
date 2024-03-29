import React from 'react'
import './intro.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';



export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{ 
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ['Software Development', 'Frontend', 'Backend', 'Technical Writing', 'Programming'],
        });
    }, []);

    return (
        <div className='intro' id='intro'>

            <div className='left'>
                <div className='imgContainer'>
                    <img src='images/hello.png'></img>
                </div>
            </div>

            <div className='right'>
                    <div className='wrapper'>
                        <h2>Hi there, I'm</h2>
                        <h1>Chisom, Chima.</h1>
                        <h3>I Love <span ref={textRef}></span></h3>
                        {/* <a href="#portfolio" className='icon'>
                            <MdOutlineKeyboardArrowDown />
                        </a> */}
                    </div>
                    
            </div>

        </div>
    )
}
