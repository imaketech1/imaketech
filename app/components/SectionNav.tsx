"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

const sections = ["about", "projects", "blog"];

export default function SectionNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Use IntersectionObserver for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      {sections.map((section) => (
        <ScrollLink
          key={section}
          to={section}
          smooth={true}
          duration={500}
          offset={-50}
          className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
            active === section ? "bg-pink-500 scale-125" : "bg-gray-400"
          }`}
        />
      ))}

      {/* Scroll to top */}
      <ScrollLink
        to="top"
        smooth={true}
        duration={500}
        offset={-50}
        className="mt-8 p-2 rounded-full bg-gray-100 hover:bg-gray-300 shadow-md cursor-pointer"
      >
        <ChevronUp className="w-4 h-4" />
      </ScrollLink>
    </div>
  );
}
