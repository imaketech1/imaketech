import Image from "next/image";
import { MainNav } from "@/app/components/MainNav";
import  About  from "@/app/components/About";
import Projects  from "@/app/Projects";
import Link from "next/link";
import SectionNav from "./components/SectionNav";
import Blog from "./components/Blog";
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600'], // choose weights
})
export default function Home() {
  return (
    <div>
      <div id="top" />

  <SectionNav />
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
<header className="flex items-center gap-6 p-4">
  <Link
    href="/"
    className="flex items-center gap-2 group transition-transform duration-300 hover:scale-95 active:scale-90"
  >
        <span className={`${barlow.className} text-[42px] font-bold tracking-tight`}>
      I MAKE TECH</span>
  </Link>
      <MainNav />
</header>
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
       <center>Made with 💗
       <br></br>
       All rights reserved © imaketech</center>
      </footer>
    </div>

    </div>
  );
}
