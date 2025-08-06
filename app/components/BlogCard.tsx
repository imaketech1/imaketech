'use client'

import { Pen } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BlogCardProps = {
  title: string
  description: string
  image?: string // no longer used, but kept for compatibility
  href?: string
}

export function BlogCard({ title, description, href }: BlogCardProps) {
  return (
    <Card
      className={cn(
        "group w-full max-w-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-md flex flex-col gap-4 p-4"
      )}
    >
      {/* Icon instead of image */}
      <div className="flex justify-center items-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 self-start">
        <Pen size={32} />
      </div>

      <CardHeader className="p-0">
        <CardTitle className="text-[28px] font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 mt-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      {href && (
        <CardFooter className="p-0 pt-4 mt-auto flex justify-end">
  <Button asChild className="w-fit px-6 text-sm">
    <a href={href} target="_blank" rel="noopener noreferrer">
      Read More
    </a>
  </Button>
</CardFooter>

      )}
    </Card>
  )
}
