import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type SubmissionType = "join" | "donate";

export async function saveSubmission(type: SubmissionType, payload: Record<string, unknown>) {
  const filePath = path.join(process.cwd(), "src", "data", "submissions.json");
  const folderPath = path.dirname(filePath);

  await mkdir(folderPath, { recursive: true });

  let existing: Array<Record<string, unknown>> = [];

  try {
    const content = await readFile(filePath, "utf8");
    existing = JSON.parse(content || "[]");
  } catch {
    existing = [];
  }

  const entry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    createdAt: new Date().toISOString(),
    ...payload,
  };

  const next = [...existing, entry];
  await writeFile(filePath, JSON.stringify(next, null, 2), "utf8");

  return entry;
}
