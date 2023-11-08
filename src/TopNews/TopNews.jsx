import "./TopNews.css";
import { TopNew } from "../TopNew/TopNew";

function TopNews() {
  const topNews = [
    {
      id: 1,
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      img: "/images/image-retro-pcs.jpg",
    },
    {
      id: 2,
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      img: "/images/image-top-laptops.jpg",
    },

    {
      id: 3,
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      img: "/images/image-gaming-growth.jpg",
    },
  ];

  return (
    <div className="top-news">
      {topNews.map((topNew) => {
        return <TopNew key={topNew.id} topNew={topNew} />;
      })}
    </div>
  );
}

export { TopNews };
