import type { Metadata } from "next";
import MIZANIAWebsiteV2 from "../../components/MizaniaSite";

export const metadata: Metadata = {
  title: "Konsalting",
  description:
    "MIZANIA strategik konsalting, pozitsiyalash, taklif dizayni va ishonchga tayangan biznes yechimlari.",
};

export default function ConsultingPage() {
  return <MIZANIAWebsiteV2 initialPage="consulting" />;
}
