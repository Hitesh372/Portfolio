import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import GitHubHighlight from "@/components/GitHubHighlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <GitHubHighlight />
      <Contact />
      <Footer />
    </main>
  );
}
