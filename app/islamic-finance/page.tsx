import type { Metadata } from "next";
import MIZANIAWebsiteV2 from "@/components/MizaniaSite";

export const metadata: Metadata = {
  title: "Islomiy moliya",
  description:
    "MIZANIA islomiy moliya yondashuvi, halol moliyaviy tamoyillar va Shariatga mos strategik yechimlar.",
};

export default function IslamicFinancePage() {
  return <MIZANIAWebsiteV2 initialPage="islamicFinance" />;
}
