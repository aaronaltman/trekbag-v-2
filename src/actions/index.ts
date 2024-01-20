"use server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { type } from "os";

export async function editSnippet() {
  console.log("editSnippet - this is working");
}

export async function deleteSnippet() {
  console.log("deleteSnippet - this is working");
}

export async function createItem(
  formState: { message: string },
  formData: FormData
) {
  const label = formData.get("label") as string;
  const isPacked = false;

  if (typeof label !== "string" || label.length < 2) {
    throw new Error("Please enter a label");
  }

  // Create a new item in the database
  const item = await db.packingList.create({
    data: {
      label,
      isPacked,
    },
  });
  redirect("/");
}
