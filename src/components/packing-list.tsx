import { db } from "@/lib/db";
export default async function PackingList() {
  const packingItems = await db.packingList.findMany();

  return (
    <div>
      <h3>Packing List</h3>
      <ul>
        {packingItems.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}
