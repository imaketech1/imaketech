import { BlogCard } from "@/app/components/BlogCard"

import { Barlow } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600'], 
})

export default function Blog() {
  return (
    <section id="blog" className="w-full py-16 px-4 sm:px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
     <center> <span className={`${barlow.className} text-[22px] font-italics tracking-tight`}>
      No post yet 🌱</span></center>
      {/* <div className="grid grid-cols-1 gap-6 justify-items-center">
        {projects.map((project, idx) => (
          <BlogCard key={idx} {...project} />
        ))}
      </div> */}
    </section>
  )
}
