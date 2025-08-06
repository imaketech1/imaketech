'use client'

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github, ExternalLink } from "lucide-react"

type AppListCardProps = {
  title: string
  description: string
  image: string
  href?: string
  githublink?: string
}

export function AppListCard({ title, description, image, href, githublink }: AppListCardProps) {
  return (
    <Card
      className={cn(
        "group w-full max-w-lg overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md"
      )}
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={`${title} thumbnail`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-8">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="mt-auto flex gap-3">
                      {githublink && (
                        <a href={githublink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 hover:text-black dark:hover:text-white" />
                      </a>)}
                   
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 hover:text-black dark:hover:text-white" />
                      </a>
        )} </div>
      </CardFooter>
    </Card>
  )
}
