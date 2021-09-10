import "./intro.scss"
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import { init } from 'ityped'
import { useEffect, useRef } from "react";


export default function Intro() {

    const textRef = useRef();

    useEffect(()=> {

        init(textRef.current, {
            
            showCursor: true,
            backDelay: 1500,
            backSpeed: 100,

            strings: ['Developer.', 'Engineer.', 'Student.' ] })

    },[])


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Me.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Richard Phan</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ArrowDropDownSharpIcon className="icon"/>
                </a>
            </div>
        </div>
    )
}
