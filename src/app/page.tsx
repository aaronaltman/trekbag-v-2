import Header from "@/components/header";
import Form from "@/components/new/form";
import PackingForm from "@/components/packing-form";
import PackingFormFetch from "@/components/packing-form-fetch";
import PackingList from "@/components/packing-list";

export default async function Home() {
  const formResponse = await fetch("http:localhost:3000/api/items").then(
    (res) => res.json()
  );
  const { id, label, isPacked, createdAt, updatedAt } = formResponse;
  return (
    <>
      <div id="theHeader">
        <Header />
      </div>
      <main className="flex justify-between max-w-xl mx-auto">
        <PackingForm />
        <PackingList />
      </main>
      <div>
        <PackingFormFetch />
      </div>
      <div id="newformTest">
        <Form
          id={id}
          label={label}
          isPacked={isPacked}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      </div>
    </>
  );
}
