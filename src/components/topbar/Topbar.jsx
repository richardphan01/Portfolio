import "./topbar.scss"
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from '@material-ui/icons/Person';
import Resume from '../../assets/Richard_Phan_-_Resume.pdf'

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">rich.</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>+1 (519) 550-0376</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>richard.phan01@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <span><a href={Resume} target="blank">Resume</a></span>
                    </div>
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>


                </div>
            </div>
        </div>
    )
}
