"use client"
import { useState } from "react"
import { AppListCard } from "@/app/components/AppListCard"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600'], 
})
const carouselProject=[
  {
    title: "Fav Store",
    description: "favstore is a microservices-based e-commerce platform designed to demonstrate scalable architecture, service independence, and asynchronous communication using modern backend technologies. The system is decomposed into independently deployable services — each built with different technologies and databases, reflecting real-world system design patterns. It supports product browsing, ordering, authentication, and email notifications.",
    image: "/images/favstore-logo.png",
    href: "https://",
    github:"https://github.com/imaketech1/favstore"
  }
]
const projects = [
  
  {
    title: "AI Book Recommender",
    description: "FastAPI backend for recommending books based on natural language queries, powered by SentenceTransformers and FAISS.",
    image: "/images/fav-book.png",
    githublink: "https://github.com/imaketech1/book-recommender-llm"

  },
  {
    title: "Today",
    description: "A React + Electron desktop app to show real-time weather info based on city input. Packaged and runnable as Ubuntu application.",
    image: "/images/today1.png",
    githublink: "https://github.com/imaketech1/today",
  },
  {
    title: "Time Rush",
    description: "Cool pomodoro timer",
    image: "/images/timerush.png",
    href: "https://timerush.vercel.app/",
    githublink: "https://github.com/imaketech1/timerush"
  },
  {
    title: "Learn Git",
    description: "Guide to mastering Git version control",
    image: "/images/learn-git-logo.png",
    href: "https://learn-git-github.web.app/",
    githublink: "https://github.com/imaketech1/learn-git"
  }
]

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const total = carouselProject.length

  const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1))
  const next = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))

  const carouselProjectItem = carouselProject[current]

  return (
    <section id="projects" className={`${barlow.className} py-16 w-full px-4 sm:px-8 bg-white`}>
  <div className="max-w-5xl mx-auto flex flex-col gap-8">
    {/* <CarouselDisplay/> */}
    <h2 className="text-5xl font-bold text-center">Projects</h2>
    <div className="w-full max-w-4xl mx-auto relative transition-transform duration-300 hover:scale-105 shadow-md" >
        <div className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg p-4 flex flex-col md:flex-row gap-4">
        <Image
          src={carouselProjectItem.image}
          alt={carouselProjectItem.title}
          width={500}
          height={300}
          className="object-cover rounded-lg w-full md:w-1/2"
        />
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="text-3xl font-bold">{carouselProjectItem.title}</h2>
          <p className="text-sm text-muted-foreground line-clamp-8">{carouselProjectItem.description}</p>
          <div className="mt-auto flex gap-4">
            <a href={carouselProjectItem.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:underline">
              <Github className="w-4 h-4" /> 
            </a>
            <a href={carouselProjectItem.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:underline">
              <ExternalLink className="w-4 h-4" /> 
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <AppListCard key={idx} {...project} />
      ))}
    </div>
  </div>
</section>

  )
}
