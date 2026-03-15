import Image from "next/image";
import  About  from "@/app/components/About";
import Projects  from "@/app/Projects";
import Link from "next/link";
import SectionNav from "./components/SectionNav";
import Blog from "./components/Blog";
import { Barlow } from 'next/font/google'
import { Lilita_One } from "next/font/google";
import ThemeToggle from "./components/ThemeToggle";

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600'], // choose weights
})
export default function Home() {
  return (
    <div>
      <div id="top" />
      <div className="flex justify-end p-4">
      <ThemeToggle />
    </div>
  <SectionNav />
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
<header className="flex items-center gap-6 p-4">
  <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-300 hover:scale-95 active:scale-90"
            >
              <span 
                className={`
                  ${barlow.className} 
                  text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
                  font-bold 
                  tracking-tight 
                  bg-clip-text 
                  text-transparent 
                  bg-gradient-to-r 
                  from-red-500 to-pink-500 
                  drop-shadow-2xl 
                  animate-pulse-slow
                `}
              >
                I MAKE TECH
              </span>
            </Link>
</header>
<br></br>
      </div>
          <div>  
           
</div>
             
      
<main className="flex flex-col gap-[12px] row-start-2 items-stretch sm:items-stretch">
      <section id="about" > <About/></section>
<section id="projects" className="min-h-screen">      <Projects/>
</section>
<section id="blog" className="min-h-screen">      <Blog/>
</section>

      </main>
      <footer className="row-start-3 flex gap-[14px] flex-wrap items-center justify-center">
       <center>Made with love
       <br></br>
       All rights reserved © imaketech</center>
      </footer>
    </div>

    </div>
  );
}
