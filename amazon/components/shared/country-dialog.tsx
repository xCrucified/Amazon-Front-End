import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CountryDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="bg-inherit border-0">
        <Button
          variant="default"
          className="bg-inherit hover:bg-none grid h-[48px] place-content-center"
        >
          <div className="relative">
            <div className="flex">
              <Image
                src="/assets/images/Ordination.svg"
                alt="coord"
                width={15}
                height={16}
              />
              <div className="flex-col flex w-20 justify-start items-start left-1 relative">
                <p className="text-xs font-light relative top-1">Deliver to</p>
                <p className="font-bold text-lg">Ukraine</p>
              </div>
            </div>
          </div>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
