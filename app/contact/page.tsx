import type { Metadata } from "next";
import MIZANIAWebsiteV2 from "@/components/MizaniaSite";

export const metadata: Metadata = {
  title: "Aloqa",
  description:
    "MIZANIA bilan bog‘lanish, konsultatsiya so‘rash va hamkorlik бўйича murojaat yuborish sahifasi.",
};

export default function ContactPageRoute() {
  return <MIZANIAWebsiteV2 initialPage="contact" />;
}
