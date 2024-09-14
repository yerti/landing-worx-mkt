import AboutSection from "@/Components/Features/HomePage/AboutSection";
import ClientsTestimonialSection from "@/Components/Features/HomePage/ClientsTestimonialSection.tsx";
import Community from "@/Components/Features/HomePage/Community";
import CompleteProjectsSection from "@/Components/Features/HomePage/CompleteProjectsSection/Index";
import HomeSections from "@/Components/Features/HomePage/HomeSection";
import NewsAndBlogSection from "@/Components/Features/HomePage/NewsAndBlogSection";
import OrangeSeciton from "@/Components/Features/HomePage/OrangeSecition";
import OrangeSectionOne from "@/Components/Features/HomePage/OrangeSecition/OrangeSectionOne";
import PricesSection from "@/Components/Features/HomePage/PricesSection";
import ProfesionalPeopleSection from "@/Components/Features/HomePage/ProfesionalPeopleSection";
import SectionAboutUs from "@/Components/Features/HomePage/SectionAboutUs";
import ServicesSection from "@/Components/Features/HomePage/ServicesSection";
import StatisticsSection from "@/Components/Features/HomePage/StatisticsSection";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <HomeSections />
      <AboutSection />
      <ServicesSection />
      <OrangeSeciton>
        <OrangeSectionOne />
      </OrangeSeciton>
      <SectionAboutUs />
      <ProfesionalPeopleSection />
      {/* <CompleteProjectsSection /> */}

      {/* <PricesSection /> */}

      {/* <StatisticsSection /> */}
      {/* <ClientsTestimonialSection /> */}
      {/* <NewsAndBlogSection /> */}
      <OrangeSeciton>
        <Community />
      </OrangeSeciton>
    </div>
  );
}
