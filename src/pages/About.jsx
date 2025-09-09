import React from "react";

import PageTitle from "../components/PageTitle";
import AboutContent from "../components/AboutPage/AboutContent";
import Stats from "../components/AboutPage/Stats";
import Testimonials from "../components/AboutPage/Testimonials";

const About = () => {
  return (
    <>
      <PageTitle pageTitle="About" />
      <AboutContent />
      <Stats />
      <Testimonials />
    </>
  );
};

export default About;
