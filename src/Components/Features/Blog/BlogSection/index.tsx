"use client";
import blogService from "@/service/blog.service";
import { BlogType } from "@/types/entities/BlogType";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ControlSearch from "@/Components/Commons/ControlSearch";

export default function BlogSection() {
  const [blogList, setBlogList] = useState<BlogType[]>([]);

  const fetchBlogList = async () => {
    try {
      const blogList = await blogService.list();
      setBlogList(blogList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchBlogList();
  }, []);

  return (
    <section className={styles.contentTotalSectionBlog}>
      <div className={styles.contentColumnOneBlog}>
        {blogList.map((blog, item) => (
          <div key={item} className={styles.contentTargetBlog}>
            <a href={`/blog/${blog.idBlog}`}>
              <img className={styles.imageBlog} src={blog.image} alt="" />
            </a>
            <div className={styles.textBlog}>
              <div className={styles.contentTwoTextSectionBlog}>
                <p>
                  <img src="/images/folder-open-sharp.svg" alt="" />
                  Business
                </p>
                <p>
                  <img src="/images/person-sharp.svg" alt="" />
                  Admin
                </p>
              </div>
              <a href={`/blog/${blog.idBlog}`}>
                <div>
                  <h1>{blog.title}</h1>
                  <p className={styles.paragraphBlog}>{blog.paragraph}</p>
                </div>
              </a>
              <a className={styles.contentAnclaRoutBlog} href="/contactanos">
                Get a qoute
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.contentColumnTwoBlog}>
        <div className={styles.contentTargetColumnTwoSearch}>
          <ControlSearch labelName="Search" value={""} />
        </div>
        <div className={styles.contentTargetColumnTwo}>
          <h3>Category</h3>
          <a href="">
            Finance & Banking <span>02</span>
          </a>
          <a href="">
            Business Advice <span>05</span>
          </a>
        </div>
        <div className={styles.contentTargetColumnThree}>
          <h3>Publicaciones recientes</h3>
          {blogList.map((index, item) => (
            <div className={styles.targetSmall} key={item}>
              <img
                className={styles.imageTargetSmall}
                src={index.image}
                alt=""
              />
              <div className={styles.textTragetSmall}>
                <p>
                  Estándar <span>{index.publishedDate}</span>
                </p>
                <a href={`/blog/${index.idBlog}`}>{index.title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
