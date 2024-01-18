import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  return NextResponse.json(await db.packingList.findMany());
}

export async function POST() {}
