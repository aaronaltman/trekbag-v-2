import Header from "@/components/header";
import PackingForm from "@/components/packing-form";
import PackingList from "@/components/packing-list";

export default async function Home() {
  return (
    <>
      <div id="theHeader">
        <Header />
      </div>
      <main className="flex justify-between max-w-xl mx-auto">
        <PackingForm />
        <PackingList />
      </main>
    </>
  );
}
