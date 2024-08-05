import Link from "next/link";

export function Nav() {
  return (
    <header className="w-full flex justify-between p-4 border-b-2 bg-white">
      <Link href={"/"}>Logo</Link>

      <div className="flex flex-row gap-2">
        <Link href={"/design-system"}>Suggestions</Link>
        <Link href={"/design-system"}>Design</Link>
      </div>
    </header>
  );
}
