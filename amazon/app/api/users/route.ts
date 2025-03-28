import { NextResponse } from "next/server";
import { Pool } from "pg";

// Настройка подключения к базе
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const client = await pool.connect();

    const result = await client.query(`
      SELECT *
      FROM "AspNetUsers"
    `);

    client.release();

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    const result = await client.query(
      `DELETE FROM "AspNetUsers" WHERE "Id" = $1`,
      [id]
    );
    client.release();

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Database delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { userName, email, birthDate, phoneNumber } = await req.json();

    if (!userName || !email) {
      return NextResponse.json(
        { error: "UserName and Email are required" },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    const result = await client.query(
      `
        INSERT INTO "AspNetUsers" ("UserName", "Email", "BirthDate", "PhoneNumber")
        VALUES ($1, $2, $3, $4) RETURNING *;
        `,
      [userName, email, birthDate, phoneNumber]
    );

    client.release();
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Database insert error:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, userName, email, phoneNumber } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    const result = await client.query(
      `
        UPDATE "AspNetUsers"
        SET "UserName" = $1, "Email" = $2, "PhoneNumber" = $3
        WHERE "Id" = $4
        RETURNING *;
      `,
      [userName, email, phoneNumber, id]
    );
    client.release();

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "User updated successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Database update error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
