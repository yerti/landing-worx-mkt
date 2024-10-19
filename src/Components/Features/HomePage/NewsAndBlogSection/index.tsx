import Title from "@/Components/Commons/Title";
import React from "react";
import SubTitle from "../../../Commons/SubTitle/index";
import styles from "./styles.module.css";

interface NewsAndBlog {
  name: string;
  img: string;
  date: string;
  description: string;
}
export default function NewsAndBlogSection() {
  const cardsNewsAndBlog: NewsAndBlog[] = [
    {
      name: "By admin",
      img: "https://vibetech-html.vercel.app/assets/images/blog/blog-two-1.png",
      date: "19-10-2022",
      description: "Tips for Setting Up a Mobile Payment for Your Business",
    },
    {
      name: "By admin",
      img: "https://vibetech-html.vercel.app/assets/images/blog/blog-two-2.png",
      date: "19-10-2022",
      description: "Solution able businesses to accept payments",
    },
    {
      name: "By admin",
      img: "https://vibetech-html.vercel.app/assets/images/blog/blog-two-3.png",
      date: "19-10-2022",
      description: "Range of services to help you find purchase",
    },
  ];
  return (
    <section className={styles.contentTotalNewsAndBlogSection}>
      <div className={styles.contentTitleNewsAndBlogSectio}>
        <Title nameTitle="news and blog" />
        <SubTitle nameSubTitle="Where innovation meets <br/> excellence" />
      </div>
      <div className={styles.contentListCardsNewsAndBlog}>
        {cardsNewsAndBlog.map((card, item) => (
          <div className={styles.contentCardNewsAndBlog} key={item}>
            <img className={styles.imgCard} src={card.img} alt="" />
            <div>
              <div className={styles.contentTwoDate}>
                <div className={styles.contentImgText}>
                  <img src="/images/person-sharp.svg" alt="icon person" />
                  <p>{card.name}</p>
                </div>
                <div className={styles.contentImgText}>
                  <img src="/images/calendar1.svg" alt="icon calendar" />
                  <p>{card.date}</p>
                </div>
              </div>
              <div className={styles.contenDescription}>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
