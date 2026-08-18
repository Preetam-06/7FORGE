import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero/Hero";
import WhatWeSolve from "@/components/home/WhatWeSolve/WhatWeSolve";
import Solutions from "@/components/home/Solutions/Solutions";
import Technology from "@/components/home/Technology/Technology";
import SelectedWork from "@/components/home/SelectedWork/SelectedWork";
import About from "@/components/home/About/About";
import Footer from "@/components/layout/Footer";
import HomeCTA from "@/components/home/HomeCTA/HomeCTA";

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />

      <Hero />

      <WhatWeSolve />

      <Solutions />

      <Technology />

      <SelectedWork />

      <About />
      
      <HomeCTA />

      <Footer />
    </main>
  );
}