import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const requiredFields = ["fullName", "companyName", "industry", "email", "monthlyRevenueRange"];

    const hasMissing = requiredFields.some((field) => !body?.[field]);
    if (hasMissing) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully." }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request payload." }, { status: 400 });
  }
}
