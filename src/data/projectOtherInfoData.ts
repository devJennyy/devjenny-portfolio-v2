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

// User roles data
export const userRoles = [
  {
    overviewHeader: "Administrators",
    overviewDescription: "have access to tools for creating and updating events, adding participants and speakers, generating certificates, sending email notifications to inform participants about upcoming events, and generating unique QR codes for walk-in participants to ensure eligibility."
  },
  {
    overviewHeader: "Faculty members",
    overviewDescription: "can join and subscribe to events, view all CCE events, replay past events they’ve attended, download certificates from their account, take assessments, and rate both events and speakers. They can also join organizations."
  },
  {
    overviewHeader: "Organizations",
    overviewDescription: "can create events (subject to admin approval), add participants and speakers, generate certificates, send event notifications via email, and issue unique QR codes for walk-in participants. They can also join and subscribe for other events."
  }
];
