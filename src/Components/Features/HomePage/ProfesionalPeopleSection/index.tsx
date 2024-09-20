'use client'
import SubTitle from "@/Components/Commons/SubTitle";
import Title from "@/Components/Commons/Title";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CardProfesionalPeople from "./CardProfesionalPeople";
import { ProfesionalCards } from "@/types/entities/ProfesionalCards.entien";
import profesionalService from "@/service/profesional.service";

export default function ProfesionalPeopleSection() {
  const [profesionalList, setProfesionalList] = useState<ProfesionalCards[]>([])

  const fetchProfesionalList = async () => {
    try {
      const patientList = await profesionalService.list();
      setProfesionalList(patientList);
    } catch (error) {
      console.error("Error al llamar la lista de pacientes:", error);
    }
  };

  useEffect(() => {
    fetchProfesionalList();
  }, []);

  return (
    <div className={styles.contentProfesionalPeopleSection}>
      <div className={styles.titleProfesionalPeopleSection}>
        <Title nameTitle="Professional People" />
        <SubTitle nameSubTitle="Conoce a Nuestros Servicios " />
      </div>
      <CardProfesionalPeople  cards={profesionalList} />
    </div>
  );
}
