import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl">{children}</h1>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h2 className="text-lg">{children}</h2>;
}
