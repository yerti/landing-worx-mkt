import PresentationSection from "@/Components/Commons/PresentationSection";
import BlogSection from "@/Components/Features/Blog/BlogSection";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <PresentationSection title="Blog Classic" nameRout="Home" rout="/home" />
      <BlogSection />
    </>
  );
}
