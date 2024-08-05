import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return <div className="flex gap-2 flex-wrap p-4 flex-col">{children}</div>;
}

export function Content({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
