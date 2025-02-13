"use client";
import LayoutSite from "@/component/layout/LayoutSite";
import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutProps> = ({ children }) => {
  return (
      <LayoutSite>{children}</LayoutSite>
  );
};

export default LayoutClient;
