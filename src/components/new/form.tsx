"use client";

import * as actions from "@/actions";
import type { PackingList } from "@prisma/client";
import { useState } from "react";

export default function Form({
  id,
  label,
  isPacked,
  updatedAt,
  createdAt,
}: PackingList) {
  const [title, setTitle] = useState(label);
  const [packed, setPacked] = useState(false);

  return (
    <div>
      <form action={actions.editSnippet}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <form action={actions.deleteSnippet}>
        <label htmlFor="isPacked">Is Packed</label>
        <input
          type="checkbox"
          id="isPacked"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}
