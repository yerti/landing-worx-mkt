"use client";
import PresentationSection from "@/Components/Commons/PresentationSection";
import ProfesionalDetail from "@/Components/Features/Profesional/ProfesionalDeatil";
import blogService from "@/service/blog.service";
import profesionalService from "@/service/profesional.service";
import { BlogType } from "@/types/entities/BlogType";
import { ProfesionalCards } from "@/types/entities/ProfesionalCards.entien";
import React, { useEffect, useState } from "react";

interface IDProps {
  params: {
    idProfesional: string;
  };
}

export default function IdCustomer({ params }: IDProps) {
  const { idProfesional } = params;

  const [profesional, setProfesional] = useState<ProfesionalCards | null>(null);

  const fetchBlogId = async () => {
    try {
      const fetchedBlog = await profesionalService.getById(
        Number(idProfesional)
      );
      setProfesional(fetchedBlog || null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogId();
  }, [idProfesional]);

  if (!profesional) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PresentationSection
        title="Detalles del Equipo"
        rout="/home"
        nameRout="Home"
      />
      <ProfesionalDetail profesional={profesional} />
    </div>
  );
}
