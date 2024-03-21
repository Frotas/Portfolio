import { ReactNode, createContext, useState } from "react";

type ActiveLinkContext = {
  activeLink: string | null;
  setActiveLink: (sectionName: string | null) => void;
};

export const ActiveLinkContext = createContext<ActiveLinkContext>({
  activeLink: null,
  setActiveLink: (sectionName: string | null) => {},
});

export function ActiveLinkProvider({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
}
