import { getAllHuruf } from "@/lib/db";

import DetailHurufClient from "./DetailHurufClient";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; huruf?: string }>;
}) {
  const params = await searchParams;

  const listHuruf = await getAllHuruf();
  const huruf = listHuruf.find((h) => h.value === params.huruf);

  if (!huruf) return <div>Huruf tidak ditemukan</div>;

  return <DetailHurufClient huruf={huruf} listHuruf={listHuruf} />;
}
