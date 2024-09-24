import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";

export default function Index() {
  return (
    <Container>
      <div className="bg-primary min-h-[200vh]">
        <Navbar />
        <Hero />
        <TechStack />
      </div>
    </Container>
  );
}
