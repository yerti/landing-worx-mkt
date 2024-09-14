import React from "react";
import DecorativeTitle from "../../../Commons/DecorativeTitle/index";
import styles from "./styles.module.css";

export default function ClientsTestimonialSection() {
  return (
    <section className={styles.contentTotalClientsTestimonialSection}>
      <div className={styles.contentTitleClientsTestimonial}>
        <DecorativeTitle span="clients" nameTitle="testimonial" />
      </div>

      {/* falta el efecto carruccel */}
    </section>
  );
}
