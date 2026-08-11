import sayefnaHome from "../assets/projects/sayefna-home.jpg";
import sayefnaProperty from "../assets/projects/sayefna-property.jpg";
import sayefnaDashboard from "../assets/projects/sayefna-dashboard.jpg";

import kickzoneHome from "../assets/projects/kickzone-home.jpg";
import kickzoneDetails from "../assets/projects/kickzone-details.jpg";
import kickzoneDashboard from "../assets/projects/kickzone-dashboard.jpg";

import psycheHome from "../assets/projects/psyche-home.jpg";
import psycheArticles from "../assets/projects/psyche-articles.jpg";
import psycheDashboard from "../assets/projects/psyche-dashboard.jpg";

export const projects = [
  {
    id: "sayefna",
    name: "SAYEFNA",
    tagline: "Luxury real estate, built for trust.",
    description:
      "A luxury real estate broker platform. Users browse and list properties for sale or rent, manage bookings, and handle KYC verification, payouts, disputes, transactions, and subscriptions — wrapped in a dark, gold-accented design.",
    features: [
      "Multi-role platform — Client, Landlord, Admin & SuperAdmin, each with a dedicated dashboard",
      "Stripe-powered KYC verification for landlord onboarding & payouts",
      "Real-time chat and notifications via SignalR",
      "Full booking lifecycle — request, confirm, handover, and dispute resolution",
      "2FA authentication and a detailed transaction ledger",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "React Hook Form", "Zod", "Firebase", "SignalR", "Framer Motion"],
    live: "https://broker-system-beta.vercel.app/",
    images: [
      { src: sayefnaHome, label: "Property discovery" },
      { src: sayefnaProperty, label: "Property details" },
      { src: sayefnaDashboard, label: "Landlord dashboard" },
    ],
    accent: "#c1aa77",
  },
  {
    id: "kickzone",
    name: "KickZone",
    tagline: "Book a stadium in seconds.",
    description:
      "A multi-sport stadium booking platform. Players browse stadiums, pick a time slot, and pay to confirm. Stadium owners manage their listings and reservations, with a dedicated Super Admin panel and real-time notifications.",
    features: [
      "Multi-role platform — Player, Stadium Owner & Super Admin, each with role-guarded routes",
      "Full stadium listing management — images, location, and a publish workflow",
      "Slot-based booking flow with time-of-day pricing (morning/night rates)",
      "Super Admin panel for platform-wide user & settings management",
      "Real-time notification infrastructure built on SignalR and Firebase push",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "SignalR", "React Hook Form", "Zod", "Firebase"],
    live: "https://kick-zone-ten.vercel.app/",
    images: [
      { src: kickzoneHome, label: "Stadium discovery" },
      { src: kickzoneDetails, label: "Stadium details" },
      { src: kickzoneDashboard, label: "Owner dashboard" },
    ],
    accent: "#8fe000",
  },
  {
    id: "psyche",
    name: "PsycheConsult",
    tagline: "A calm space for mental health content.",
    description:
      "A bilingual-ready (Arabic RTL) personal brand website for a psychologist, publishing articles for visitors with a direct WhatsApp contact option. Includes a private admin dashboard for managing articles, categories, and site content.",
    features: [
      "Fully bilingual-ready architecture, shipped in Arabic with native RTL layout",
      "Rich-text article editor (Tiptap) with sanitized HTML rendering for safe publishing",
      "Category system with custom icon uploads for visual browsing",
      "Admin-editable site content — hero text, bio, and working hours, no redeploy needed",
      "Client-side image compression pipeline for fast, lightweight uploads",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Tiptap", "React Hook Form", "Zod", "date-fns"],
    live: "https://psychologist-frontend-sigma.vercel.app/",
    images: [
      { src: psycheHome, label: "Home (RTL)" },
      { src: psycheArticles, label: "Articles" },
      { src: psycheDashboard, label: "Admin dashboard" },
    ],
    accent: "#6f8d73",
  },
];
