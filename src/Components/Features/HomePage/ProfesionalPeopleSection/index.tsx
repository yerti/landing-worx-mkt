import SubTitle from "@/Components/Commons/SubTitle";
import Title from "@/Components/Commons/Title";
import React from "react";
import styles from "./styles.module.css";
import CardProfesionalPeople, {
  CardProfesionalPeopleType,
} from "./CardProfesionalPeople";

const cardsList: CardProfesionalPeopleType[] = [
  {
    name: "Devon Lane ",
    img: "/images/team-two-1.png",
    post: "UI UX Designer",
    rout: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  },
  {
    name: "Bessie Cooper",
    img: "/images/team-two-2.png",
    post: "UI UX Designer",
    rout: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  },
  {
    name: "Wade Warren",
    img: "/images/team-two-3.png",
    post: "UI UX Designer",
    rout: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  },
  {
    name: "Savannah Nguyen",
    img: "/images/team-two-4.png",
    post: "UI UX Designer",
    rout: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  },
];

export default function ProfesionalPeopleSection() {
  return (
    <div className={styles.contentProfesionalPeopleSection}>
      <div className={styles.titleProfesionalPeopleSection}>
        <Title nameTitle="Professional People" />
        <SubTitle nameSubTitle="Conoce a Nuestros Servicios " />
      </div>
      <CardProfesionalPeople cards={cardsList} />
    </div>
  );
}
