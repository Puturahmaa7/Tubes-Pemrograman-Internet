import { getKataList } from "@/lib/db";
import DetailKataClient from "./DetailKataClient";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; kata?: string }>;
}) {
  const params = await searchParams;

  const listKata = await getKataList();
  const kata = listKata.find((k) => k.value === params.kata);

  if (!kata) return <div>Kata tidak ditemukan</div>;

  return <DetailKataClient kata={kata} listKata={listKata} />;
}
