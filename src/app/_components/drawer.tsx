import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ButtonPrimary } from "./buttons";
import Link from "next/link";

export function DrawerCustom() {
  return (
    <>
      <Drawer>
        <DrawerTrigger className="w-fit">
          <ButtonPrimary text="Open" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Address etc</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Link href="#">Website</Link>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
