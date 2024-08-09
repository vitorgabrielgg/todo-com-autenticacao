import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ActionIconProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const ActionIcon = ({ icon: Icon }: ActionIconProps) => {
  return (
    <button className="px-5 h-full">
      <Icon className="text-white w-5" />
    </button>
  );
};
