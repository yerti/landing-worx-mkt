import React from "react";

export interface BlogType {
  idBlog: number;
  title: string;
  paragraph: string;
  publishedDate: string;
  image: string;
  componente: React.ReactNode;
}
