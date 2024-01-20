"use client";

import { PackingList } from "@prisma/client";

type PackingListProps = {
  PackingList: PackingList;
};

export default function SnippetEditForm({ PackingList }: PackingListProps) {
  return <div>this is the title {PackingList.label}</div>;
}
