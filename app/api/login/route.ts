import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (
    username === "mhbuilderlahore" &&
    password === "@Bhatti789"
  ) {
    return NextResponse.json({
      success: true,
      redirect: "/admin",
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid Username or Password",
    },
    {
      status: 401,
    }
  );
}
