import LearnLayout from "@/components/learnLayout";
import BelajarHurufClient from "./BelajarHurufClient";
import { getHurufList } from "@/lib/db";

export default async function BelajarHurufPage() {
  const hurufList = await getHurufList();

  return (
    <LearnLayout title="Belajar Huruf">
      <BelajarHurufClient hurufList={hurufList} />
    </LearnLayout>
  );
}
