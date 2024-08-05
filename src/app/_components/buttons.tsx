import { Button } from "@/components/ui/button";

export function ButtonCTA({ text }: { text: string }) {
  return (
    <Button
      className="uppercase bg-emerald-600 font-bold text-white hover:bg-emerald-500 text-lg"
      size={"lg"}
    >
      {text}
    </Button>
  );
}

export function ButtonPrimary({ text }: { text: string }) {
  return (
    <Button className="capitalize bg-emerald-600 font-semibold text-white hover:bg-emerald-500">
      {text}
    </Button>
  );
}

export function ButtonSecondary({ text }: { text: string }) {
  return (
    <Button className="capitalize font-semibold text-emerald-600 border bg-white border-emerald-600 border-2 hover:text-emerald-500 hover:bg-white hover:border-emerald-500">
      {text}
    </Button>
  );
}

export function ButtonDelete() {
  return (
    <Button className="capitalize bg-red-600 font-semibold text-white hover:bg-red-500">
      delete
    </Button>
  );
}

export function ButtonSmall({ text }: { text: string }) {
  return (
    <Button
      className="capitalize bg-emerald-600 text-white hover:bg-emerald-500"
      size={"sm"}
    >
      {text}
    </Button>
  );
}
