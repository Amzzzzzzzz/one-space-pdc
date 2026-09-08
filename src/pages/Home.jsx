import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Tabs from "../components/Tabs/Tabs";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";


import {
  aboutData,
  servicesData,
  packagesData
} from "../data/companyData";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

<Tabs
  id="about"
  title="About Us"
  data={aboutData}
/>

<Tabs
  id="services"
  title="Our Services"
  data={servicesData}
/>
<Tabs
    id="packages"
    title="Packages"
    data={packagesData}
/>
<Experience />

<Contact />
    </>
  );
}

export default Home;