import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("design");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "design",
      title: "Stack",
    },
    {
      id: "featured",
      title: "Contributions",
    },
    // {
    //   id: "web",
    //   title: "Web Apps",
    // },
    // {
    //   id: "mobile",
    //   title: "Mobile Apps",
    // },
    {
      id: "content",
      title: "Blogs",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
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
           <a href={d?.link} target="_blank">
           <img
              src={d.img}
              alt=""
            />
           </a> 
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
