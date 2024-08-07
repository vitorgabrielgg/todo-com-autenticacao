import { LayoutAdmin } from "@/components/layout-admin";
import { Todo } from "@/components/todo";

export default function Home() {
  return (
    <LayoutAdmin>
      <Todo />
    </LayoutAdmin>
  );
}
