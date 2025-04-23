import AboutNavbar from "@/components/About/AboutNavbar";
import AboutSection from "@/components/About/AboutSection";

export default function About() {
  return (
    <div className={`flex flex-col min-h-screen font-inter`}>
      <AboutNavbar />
      <AboutSection />
    </div>
  );
}
