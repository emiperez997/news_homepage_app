import "./SectionNew.css";
import { NewComponent } from "../New/NewComponent";

function SectionNew() {
  const newExample = [
    {
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse affects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <article className="section-new">
      <div className="section">
        <h3>New</h3>

        <div className="section-news">
          {newExample.map((newObject, index) => {
            return (
              <NewComponent
                key={index}
                newObject={newObject}
                isLast={index !== newExample.length - 1}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}

export { SectionNew };
