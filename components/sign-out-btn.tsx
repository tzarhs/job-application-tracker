"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function SignOutBtn() {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        await signOut();
        router.push("/sign-in");
      }}
      className="hover:bg-gray-700"
    >
      Logout
    </DropdownMenuItem>
  );
}
