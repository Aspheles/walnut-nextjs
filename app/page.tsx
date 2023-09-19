import { Hero, SearchBar, BrandCard, CustomButton } from "@/components";
import CreateBrandModal from "@/components/CreateBrandModal";
import { BrandCardProps } from "@/types";
import { fetchAllBrands } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allBrands = await fetchAllBrands();

  const isDataEmpty =
    !Array.isArray(allBrands.data) || allBrands.length < 1 || !allBrands;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold justify-end">Brands Catalogue</h1>
          <p>Get a overview of all the brands available</p>
          <SearchBar />
          <div className="flex justify-center flex-wrap">
            {!isDataEmpty ? (
              allBrands.data.map((brand: BrandCardProps) => (
                <BrandCard
                  key={brand.identifier}
                  name={brand.name}
                  logo={brand.logo}
                  identifier={brand.identifier}
                />
              ))
            ) : (
              <h2>No brands found...</h2>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
