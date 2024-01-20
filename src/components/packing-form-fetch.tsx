"use client";

import React, { use, useEffect, useState } from "react";

type PackingListProps = {
  data: {
    id: number;
    label: string;
    isPacked: boolean;
  };
};

export default function PackingFormFetch({ data }: any) {
  const [title, setTitle] = useState<PackingListProps["data"]>(data);

  return <div>hi</div>;
}
