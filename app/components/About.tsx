"use client"

import * as React from "react"
import { LucideLaptop2, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import  Link  from "next/link"
import { Cascadia_Code } from 'next/font/google'


const cascadia = Cascadia_Code({
  subsets: ['latin'],
  weight: ['400', '700'], // choose weights
})

export default function About() {
  return (
    <section id="about" className={`${cascadia.className} py-16 w-full px-4 sm:px-8 bg-white`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="text-primary">
          <LucideLaptop2 size={80} className="text-blue-600" />
          
        </div>

        <div className="text-center sm:text-left">
            <h2 className="text-4xl font-bold mb-8">Hi— welcome to my world of tech~</h2>
<p className="text-gray-700 text-justify w-full leading-relaxed max-w-l">
  I’m a fullstack developer with a strong backend foundation— focused on building <strong>scalable microservices</strong> that power real-world applications. <br></br>My focus: designing systems that scale, ship fast, and are maintainable over time.
  <br /><br />
  I’ve built and shipped products using a scalable microservices architecture with Spring Boot, Docker, and Kubernetes— enabling fast deployments and reliable service communication. <br></br>
  I’ve developed high-performance APIs, trained LLMs to power intelligent applications. On the frontend, I have designed responsive user interfaces with React and Next.js for seamless user experiences.
  <br /><br />
  Let’s build the future — <strong>intelligent, scalable, and fun</strong>.
</p><br></br>
        </div>
        
      </div>
     
       <div className="flex flex-col items-end gap-4">
  <div className="flex gap-6">
    
    <Link href="mailto:imaketechofficial@gmail.com" target="_blank" rel="noopener noreferrer">
      <Mail className="h-6 w-6 hover:text-blue-500 transition-colors duration-200" />
    </Link> 

    <Link href="https://github.com/imaketech1" target="_blank" rel="noopener noreferrer">
      <Github className="h-6 w-6 hover:text-gray-800 transition-colors duration-200" />
    </Link>

    {/* <Link href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
      <Linkedin className="h-6 w-6 hover:text-blue-700 transition-colors duration-200" />
    </Link> */}

  </div>
</div>

    </section>
  )
}
