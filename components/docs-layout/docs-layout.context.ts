import { createContext, Dispatch, SetStateAction } from "react";

interface DocsLayoutContextValue {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const DocsLayoutContext = createContext<DocsLayoutContextValue>(
  {} as DocsLayoutContextValue
);
