import type { Metadata } from "next";
import MIZANIAWebsiteV2 from "../../components/MizaniaSite";

export const metadata: Metadata = {
  title: "Investorlar",
  description:
    "MIZANIA investorlar bilan ishlash, premium investor taqdimoti va uzoq muddatli ishonchga tayangan kapital yondashuvi.",
};

export default function InvestorsPage() {
  return <MIZANIAWebsiteV2 initialPage="investors" />;
}
