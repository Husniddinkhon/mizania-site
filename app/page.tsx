import type { Metadata } from "next";
import MIZANIAWebsiteV2 from "../components/MizaniaSite";

export const metadata: Metadata = {
  title: "MIZANIA — Halol moliya, islomiy moliya va premium konsalting",
  description:
    "MIZANIA — halol moliya, islomiy moliya, ta’lim, strategik konsalting va investorlar bilan ishlash yo‘nalishlarida premium platforma.",
};

export default function HomePage() {
  return <MIZANIAWebsiteV2 initialPage="home" />;
}
