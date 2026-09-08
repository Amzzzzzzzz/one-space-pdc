import { useState } from "react";
import "./Tabs.css";

function Tabs({ id, title, data }) {
  const [activeTab, setActiveTab] = useState(data[0]);

  return (
<section id={id} className="tabsSection">

      <h2>{title}</h2>

      <div className="tabButtons">

        {data.map((tab) => (
          <button
            key={tab.id}
            className={activeTab.id === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.title}
          </button>
        ))}

      </div>

      <div className="tabContent">

        {typeof activeTab.content === "string" ? (
          <p>{activeTab.content}</p>
        ) : (
          <div className="serviceGrid">

            {activeTab.content.map((service) => (

              <div className="serviceCard" key={service.name}>

<h3>{service.name}</h3>

{service.description && (
    <p className="serviceDescription">
        {service.description}
    </p>
)}

{service.includes && (

    <ul className="includesList">

        {service.includes.map((item) => (

            <li key={item}>
                ✓ {item}
            </li>

        ))}

    </ul>

)}

<span>{service.price}</span>

              </div>

            ))}

          </div>
        )}

      </div>

    </section>
  );
}

export default Tabs;