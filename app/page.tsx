import { Hero } from "../components/Hero";
import { Timeline } from "../components/Timeline";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./globals.css";
import { Socials } from "../components/Socials";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Socials />
      <Timeline />
      <Footer />
    </div>
  );
}
