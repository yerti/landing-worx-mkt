import MainLayout from "@/Components/Layout/MainLayout";
import NavigationBar from "@/Components/Layout/NavigationBar";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {  
  return (
    <MainLayout>
      {children}
    </MainLayout>    
  );
}