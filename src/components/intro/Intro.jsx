import "./intro.scss"
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import { init } from 'ityped'
import { useEffect, useRef } from "react";
import me from '../../assets/Me.jpg'


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
                    <img src={me} alt=""/>

                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome, I'm</h2>
                    <h1>Richard</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <ArrowDropDownSharpIcon className="icon"/>
                    </a>
                </div>
               
            </div>
        </div>
    )
}
