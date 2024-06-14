export const ButtonForm = ({ text }: { text: string }) => {
  return (
    <button className="py-4 w-full bg-blue_btn font-bold text-white rounded-md">
      {text}
    </button>
  );
};
