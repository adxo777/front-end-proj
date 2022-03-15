
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  MANAGER,
 Datascience,
   developper ,
  
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("MANAGER");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "MANAGER",
      title: "MANAGER",
    },
    {
      id: " Datascience",
      title: " Data science",
    },
    {
      id: "developper",
      title: "developper",
    },
    
  ];

  useEffect(
    () => {
    switch (selected) {
      case "MANAGER":
        setData(MANAGER);
        break;
      case "Datascience":
        setData(Datascience);
        break;
      case "developper":
        setData(developper);
        break;
      
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
