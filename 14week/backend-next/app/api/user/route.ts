import { NextRequest } from "next/server";

export function GET() {
  return Response.json({
    email: "shashwat@gmail.com",
    name: "Shashwat",
  });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  return Response.json({
    messege: "You are Logged IN ",
  });
}
