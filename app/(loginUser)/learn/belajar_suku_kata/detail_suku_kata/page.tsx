import { getSukuKataList } from "@/lib/db";
import DetailSukuKataClient from "./DetailSukuKataClient";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; sukuKata?: string }>;
}) {
  const params = await searchParams;

  const listSukuKata = await getSukuKataList();
  const sukuKata = listSukuKata.find((s) => s.value === params.sukuKata);

  if (!sukuKata) return <div>Suku kata tidak ditemukan</div>;

  return (
    <DetailSukuKataClient sukuKata={sukuKata} listSukuKata={listSukuKata} />
  );
}
