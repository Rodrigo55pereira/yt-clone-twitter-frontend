"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./input";

type SearchInputProps = {
  defaultValue?: string;
  hideOnSearch?: boolean;
};

export const SearchInput = ({
  defaultValue,
  hideOnSearch,
}: SearchInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState(
    defaultValue ?? "",
  );

  const handleSearchEnter = () => {
    if (searchInput) {
      router.push(
        `/search?q=${encodeURIComponent(searchInput)}`,
      );
    }
  };

  // Se a prop hideOnSearch for verdadeira e estivermos na página de busca ("/search"),
  // não renderiza o componente de input de busca. Isso evita mostrar o campo de busca na própria página de resultados.
  if (hideOnSearch && pathname === "/search") return null;

  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      value={searchInput}
      onChange={setSearchInput}
      onEnter={handleSearchEnter}
    />
  );
};
