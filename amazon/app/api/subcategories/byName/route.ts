import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { categoryName } = await req.json();
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/api/Subcategory/category-${categoryName}/subcategories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to load subcategories");
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
  }
}
