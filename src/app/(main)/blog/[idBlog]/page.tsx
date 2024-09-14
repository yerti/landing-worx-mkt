"use client";
import PresentationSection from "@/Components/Commons/PresentationSection";
import blogService from "@/service/blog.service";
import { BlogType } from "@/types/entities/BlogType";
import React, { useEffect, useState } from "react";

interface IDProps {
  params: {
    idBlog: string;
  };
}

export default function IdCustomer({ params }: IDProps) {
  const { idBlog } = params;

  const [blog, setBlog] = useState<BlogType | null>(null);

  const fetchBlogId = async () => {
    try {
      const fetchedBlog = await blogService.getById(Number(idBlog));
      setBlog(fetchedBlog || null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogId();
  }, [idBlog]);

  if (!blog) {
    return <p>Loading...</p>; // Muestra un estado de carga mientras se obtienen los datos
  }

  return (
    <div>
      {/* // este es un componente aparte no debe de ser tocado */}
      <PresentationSection
        title="Detalles del Blog"
        rout="/home"
        nameRout="Home"
      />
      <div>{blog.componente}</div> {/* Renderiza el componente del blog */}
    </div>
  );
}
