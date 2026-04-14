import type { Metadata } from "next";
import MIZANIAWebsiteV2 from "@/components/MizaniaSite";

export const metadata: Metadata = {
  title: "Xizmatlar",
  description:
    "MIZANIA xizmatlari: islomiy moliya maslahati, ta’lim, strategik konsalting va investorlar bilan ishlash.",
};

export default function ServicesPage() {
  return <MIZANIAWebsiteV2 initialPage="services" />;
}
