import type { Metadata } from "next";
import MIZANIAWebsiteV2 from "../../components/MizaniaSite";

export const metadata: Metadata = {
  title: "Biz haqimizda",
  description:
    "MIZANIA haqida, brend falsafasi, adolat, muvozanat va ishonchga tayangan premium yondashuv.",
};

export default function AboutPage() {
  return <MIZANIAWebsiteV2 initialPage="about" />;
}
