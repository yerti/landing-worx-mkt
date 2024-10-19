import React from "react";
import styles from "./styles.module.css";
import LocationIcon from "@/Components/Icons/LocationIcon";
import CallIcon from "@/Components/Icons/CallIcon";
import MailIcon from "@/Components/Icons/MailIcon";
import Paragraph from "@/Components/Commons/Paragraph";

interface SubItem {
  name: string;
}

export interface Item {
  title: string;
  name?: string;
  subItems?: SubItem[];
}

interface ServiceDetailSectionProps {
  title: string;
  parrafo: string;
  list: Item[];
}

export default function ServiceDetailSection({
  title,
  parrafo,
  list,
}: ServiceDetailSectionProps) {
  return (
    <section className={styles.contentTotalServiceDetailSection}>
      <div className={styles.contentColumnOneDetailService}>
        <h1>Contact us</h1>
        <div className={styles.contentTextImgDetailService}>
          <LocationIcon w="24" h="24" color="#48534F" />
          <div className={styles.textDetailService}>
            <h3>Location</h3>
            <p>Dhaka 102, utl 1216, road 45 house of street</p>
          </div>
        </div>
        <div className={styles.contentTextImgDetailService}>
          <CallIcon w="24" h="24" color="#48534F" />
          <div className={styles.textDetailService}>
            <h3>Call us</h3>
            <div>
              <p>
                <a href="tel:259008036545256">2590 - 080 - 365 45 256</a>
              </p>
              <p>
                <a href="tel:1234023850">1234 - 023 - 850</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.contentTextImgDetailService}>
          <MailIcon w="24" h="24" color="#48534F" />
          <div className={styles.textDetailService}>
            <h3>Email</h3>
            <div>
              <p>
                <a href="mailto:m0023yourmail.com">m0023yourmail.com</a>
              </p>
              <p>
                <a href="mailto:IJMm002ail.com">IJMm002ail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentTwoColumnService}>
        <h1>{title}</h1>
        <Paragraph name={parrafo} />
        <div className={styles.contentTotalListDetailService}>
          <ul className={styles.contentListDetailService}>
            {list.map((item, index) => (
              <li key={index} className={styles.liListService}>
                <img src="/images/Ellipse.svg" alt="" />
                <strong>{item.title}</strong> {item.name}
                {item.subItems && item.subItems.length > 0 && (
                  <ul className={styles.contentListSubItemDetailService}>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <img src="/images/Ellipse.svg" alt="" />

                        {subItem.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <img
            className={styles.imageDetailService}
            src="/images/details-project-2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
