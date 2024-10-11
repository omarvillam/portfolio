import React from "react";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import Showcase from "../components/Showcase/Showcase";
import Footer from "../components/Footer/Footer";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import {trans} from "../lib/lang";

export default function Index() {
  return (
    <>
      <LanguageSwitcher />
      <Container>
        <Hero/>
        <TechStack/>
        <h1 className={"sm:text-3xl text-xl mt-20 px-10 pb-10 md:px-20 font-bold whitespace-nowrap"}>{trans("showcase.title")}</h1>
      </Container>
      <Showcase/>
      <Footer />
    </>
  );
}
