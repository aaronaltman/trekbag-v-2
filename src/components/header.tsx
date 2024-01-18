import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-4 bg-blue-200">
      <h1>The Packing App. Pack your Bags!</h1>
      <div>
        <Button asChild>
          <Link href="/mylist/userid123">Start Packing</Link>
        </Button>
      </div>
    </header>
  );
}
