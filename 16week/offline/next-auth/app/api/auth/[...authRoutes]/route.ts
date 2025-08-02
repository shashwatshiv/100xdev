import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ authRoutes: string[] }> },
) {
  const { authRoutes } = await params;
  console.log(authRoutes);

  return NextResponse.json({
    messsege: "routes are handled here",
  });
}
