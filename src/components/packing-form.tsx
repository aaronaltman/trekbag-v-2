import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default function PackingForm() {
  async function createItem(formData: FormData) {
    // User Server
    "use server";
    // Get the label from the form
    const label = formData.get("label") as string;
    const isPacked = false;

    // Create a new item in the database
    const item = await db.packingList.create({
      data: {
        label,
        isPacked,
      },
    });
    redirect("/");
  }
  return (
    <form action={createItem}>
      <h3>Pack an Item</h3>
      <input
        id="label"
        type="text"
        name="label"
        className="border border-black"
        placeholder="add an item to pack..."
        spellCheck={false}
      />
      <button type="submit" className="border border-black">
        Pack
      </button>
    </form>
  );
}
