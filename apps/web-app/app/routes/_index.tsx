import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import Showcase from "../components/Showcase/Showcase";
import Footer from "../components/Footer/Footer";

export default function Index() {
  return (
    <>
      <Container>
        {/*<Navbar/>*/}
        <Hero/>
        <TechStack/>
        <h1 className={"sm:text-3xl text-xl mt-20 px-10 pb-10 md:px-20 font-bold whitespace-nowrap"}>Showcase</h1>
      </Container>
      <Showcase/>
      <Footer />
    </>
  );
}
