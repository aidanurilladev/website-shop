import React, { FC, ReactNode, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import s from "./LayoutSite.module.scss";
interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {

  return (
    <div className={s.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
