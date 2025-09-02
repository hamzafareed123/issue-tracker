import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createIssue } from "../../validationSchema";

const prisma = new PrismaClient(); 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const validation = createIssue.safeParse(body);

    // If validation fails
    if (!validation.success) {
      return NextResponse.json(validation.error, { status: 400 });
    }

    // Create new issue
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    console.error("Error creating issue:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
