import Link from "next/link";

interface LinkFormProps {
  href: string;
  text: string;
}

export const LinkForm = ({ href, text }: LinkFormProps) => {
  return (
    <Link
      href={href}
      className="w-max text-yellow_color font-semibold text-lg self-end underline"
    >
      {text}
    </Link>
  );
};
