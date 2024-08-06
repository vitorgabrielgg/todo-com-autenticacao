import Link from "next/link";

interface LinkFormProps {
  href: string;
  text: string;
}

export const LinkForm = ({ href, text }: LinkFormProps) => {
  return (
    <Link
      className="block ml-auto w-max text-yellow-300 font-semibold underline"
      href={href}
    >
      {text}
    </Link>
  );
};
