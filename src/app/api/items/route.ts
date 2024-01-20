import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  return NextResponse.json(await db.packingList.findMany());
}

// export async function POST(request: Request) {
//   const body = await request.json();
//   const item = await db.packingList.create({
//     data: {
//       label: body.label,
//       isPacked: body.isPacked,
//     },
//   });
//   return NextResponse.redirect(`/`);
// }
