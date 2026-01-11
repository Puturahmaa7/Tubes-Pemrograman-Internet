import LearnLayout from "@/components/learnLayout";
import BelajarKataClient from "./BelajarKataClient";
import { getKataList } from "@/lib/db";

export default async function BelajarKataPage() {
  const kataList = await getKataList();

  return (
    <LearnLayout title="Belajar Kata">
      <BelajarKataClient kataList={kataList} />
    </LearnLayout>
  );
}
