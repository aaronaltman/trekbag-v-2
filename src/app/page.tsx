import { db } from "@/lib/db";

export default async function Home() {
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
  }

  const packingItems = await db.packingList.findMany();

  return (
    <main>
      <h1>Home</h1>
      <form action={createItem}>
        <h3>Pack an Item</h3>
        <input
          id="label"
          type="text"
          name="label"
          className="border border-black"
          placeholder="add an item to pack..."
        />
        <button type="submit" className="border border-black">
          Pack
        </button>
      </form>
      <div>
        <h3>Packing List</h3>
        <ul>
          {packingItems.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
