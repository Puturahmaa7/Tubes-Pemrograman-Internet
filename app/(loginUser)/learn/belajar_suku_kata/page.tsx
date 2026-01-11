import LearnLayout from "@/components/learnLayout";
import BelajarSukuKataClient from "./BelajarSukuKataClient";
import { getSukuKataList } from "@/lib/db";

export default async function BelajarSukuKataPage() {
  const sukuKataList = await getSukuKataList();

  return (
    <LearnLayout title="Belajar Suku Kata">
      <BelajarSukuKataClient sukuKataList={sukuKataList} />
    </LearnLayout>
  );
}
