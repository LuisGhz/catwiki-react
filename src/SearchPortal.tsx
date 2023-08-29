import React from "react";
import { createPortal } from "react-dom";

type SearchPortalProps = {
  isSearchOpen: boolean;
  children: React.ReactNode;
};

export const SearchPortal = ({ isSearchOpen, children }: SearchPortalProps) => {
  if (!isSearchOpen) return null;

  return createPortal(
    <>{children}</>,
    document.getElementById("search-portal") as HTMLElement
  );
};
