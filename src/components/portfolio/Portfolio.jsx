import "./portfolio.scss"
import SE from "../../assets/space_evade_featured.jpg"
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect,useState } from "react";
import {
    featuredPortfolio,
    ecommerceSite,
    videoChatApp,
    toDoList,
    spaceEvade,
} from "../../data";

export default function Portfolio() {

    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <ul>
               
            </ul>
            <div className="container">
                
                <div className="tanMi">
                   
                    <h3>TanMi Spring Rolls</h3>
                </div>
                <div className="zoom">
                   
                    <h3>Zoom Clone</h3>
                </div>
                <div className="tdlist">
                   
                    <h3>To-do List</h3>
                </div>
                <div className="space">
                   
                    <h3>Space Evade</h3>
                </div>
                <div className="df">
                   
                    <h3>Deep-Focus</h3>
                </div>
                <div className="sca">
                   
                    <h3>Social Media App</h3>
                </div>
            </div>
            
            
        </div>
    )
}
