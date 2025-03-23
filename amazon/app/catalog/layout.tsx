"use client";

import CatalogFilter from "@/components/shared/catalog-filter";
import { useParams } from "next/navigation";

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { categoryName } = params;

  return (
    <section className="w-[1492px] mx-auto flex justify-center">
      <CatalogFilter className="mr-auto" categoryName={categoryName?.toString()} />
      {children}
    </section>
  );
}
