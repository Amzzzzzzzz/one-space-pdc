import "./Experience.css";
import { experienceData } from "../../data/companyData";

function Experience() {
  return (
    <section id="experience" className="experience">

        <h2>Professional Expertise</h2>

<div className="experienceGrid">

  <div className="experienceCard">
    <h3>Architecture Degree</h3>
    <p>Prairie View A&M University (PVAMU)</p>
  </div>

  <div className="experienceCard">
    <h3>Design Experience</h3>
    <p>10+ Years</p>
  </div>

  <div className="experienceCard">
    <h3>Space Planning Experience</h3>
    <p>10+ Years</p>
  </div>

</div>

      <h2>Industries We Serve</h2>

      <p className="experienceIntro">
        Our experience spans a wide range of industries, allowing us to
        deliver tailored planning and design solutions for organisations
        of every size.
      </p>

      <div className="experienceGrid">

        {experienceData.map((item) => (

          <div className="experienceCard" key={item.title}>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            

          </div>

          

        ))}

      </div>

    </section>
  );
}


export default Experience;

