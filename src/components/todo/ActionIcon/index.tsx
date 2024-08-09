import { Button } from "@/components/ui/button";
import { LucideProps } from "lucide-react";
import {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

interface ActionIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const ActionIcon = ({ icon: Icon, onClick }: ActionIconProps) => {
  return (
    <Button className="px-5 h-full" onClick={onClick}>
      <Icon className="text-white w-5" />
    </Button>
  );
};
