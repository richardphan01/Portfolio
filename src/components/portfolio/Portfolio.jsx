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
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "ecommerce",
            title: "Ecommerce Site",
        },
        {
            id: "vchat",
            title: "Video Chat App",
        },
        {
            id: "tdlist",
            title: "To-do List",
        },
        {
            id: "game",
            title: "Space Evade",
        },
    ];

    useEffect(()=>{
        
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "ecommerce":
                setData(ecommerceSite);
                break;
            case "vchat":
                setData(videoChatApp);
                break;
            case "tdlist":
                setData(toDoList);
                break;
            case "game":
                setData(spaceEvade);
                break;
            default:
                setData(featuredPortfolio);
        }

    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img
                        src ={d.img}
                        alt=""
                    />
                    <h3>{d.title}</h3>
                </div>
            </div>
            
        </div>
    )
}
