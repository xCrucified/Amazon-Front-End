import { NextResponse } from "next/server";
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

interface Product {
  Id: number;
  Name: string;
  ProductImages: string[];
}

export async function GET() {
  try {
    const client = await pool.connect();

    const query = `
      SELECT 
        p."Id" AS "productId",
        p."Name" AS "productName",
        i."Name" AS "imageName"
      FROM "Products" p
      LEFT JOIN "Images" i ON p."Id" = i."ProductId"
    `;

    const result = await client.query(query);
    client.release();

    const productsMap = new Map<number, Product>();

    result.rows.forEach((row) => {
      const productId = row.productId;
      const productName = row.productName;
      const imageName = row.imageName;

      if (!productsMap.has(productId)) {
        productsMap.set(productId, {
          Id: productId,
          Name: productName,
          ProductImages: [],
        });
      }

      if (imageName) {
        const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}/uploading/${imageName}`;
        productsMap.get(productId)?.ProductImages.push(imageUrl);
      }
    });

    return NextResponse.json(Array.from(productsMap.values()));
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
