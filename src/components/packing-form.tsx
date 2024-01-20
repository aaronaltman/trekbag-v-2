"use client";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function PackingForm() {
  const [formState, action] = useFormState(actions.createItem, {
    label: "",
    packed: false,
  });

  return (
    <form action={action}>
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
