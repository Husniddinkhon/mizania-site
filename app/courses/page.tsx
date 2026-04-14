import type { Metadata } from "next";
import MIZANIAWebsiteV2 from "../../components/MizaniaSite";

export const metadata: Metadata = {
  title: "Kurslar",
  description:
    "MIZANIA kurslari, premium ta’lim dasturlari, workshoplar va halol moliya bo‘yicha o‘quv yo‘nalishlari.",
};

export default function CoursesPage() {
  return <MIZANIAWebsiteV2 initialPage="courses" />;
}
