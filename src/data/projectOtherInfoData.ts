import React from "react";
import { FaBootstrap, FaCss3Alt, FaD, FaHtml5, FaPhp } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";

interface TechStack {
  name: string;
  icon: JSX.Element;
}

// Tech stack data
export const techStacks: TechStack[] = [
  { name: "HTML", icon: React.createElement(FaHtml5, { size: 21 }) },
  { name: "CSS", icon: React.createElement(FaCss3Alt, { size: 21 }) },
  { name: "JavaScript", icon: React.createElement(IoLogoJavascript, { size: 21 }) },
  { name: "Bootstrap", icon: React.createElement(FaBootstrap, { size: 21 }) },
  { name: "DataTables", icon: React.createElement(FaD, { size: 21 }) },
  { name: "MySQL", icon: React.createElement(GrMysql, { size: 21 }) },
  { name: "PHP", icon: React.createElement(FaPhp, { size: 21 }) },
];
