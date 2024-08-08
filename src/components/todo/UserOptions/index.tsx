"use client";

import { useAccount } from "@/hooks";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

export const UserOptions = () => {
  const { session, logoutAccount } = useAccount();

  return (
    <div className="w-[180px]">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white bg-black/40 h-11 px-4 flex items-center justify-center gap-4 w-full outline-none rounded-md cursor-pointer">
          <p className="max-w-28 truncate">{session?.user?.name}</p>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[180px] bg-[#0F0F0F] border-none text-white">
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-300" />
          <DropdownMenuItem className="cursor-pointer" onClick={logoutAccount}>
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
