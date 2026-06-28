import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  try {
    const viewsPath = path.join(process.cwd(), "public/views.json");
    let views = { count: 0 };

    if (fs.existsSync(viewsPath)) {
      views = JSON.parse(fs.readFileSync(viewsPath, "utf-8"));
    }

    views.count += 1;
    fs.writeFileSync(viewsPath, JSON.stringify(views));

    return NextResponse.json(views);
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
