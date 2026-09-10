import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type SubmissionType = "join" | "donate";

type SubmissionStore = {
  join: Array<Record<string, unknown>>;
  donate: Array<Record<string, unknown>>;
};

const memoryStore = globalThis as typeof globalThis & {
  __rotarySubmissionStore?: SubmissionStore;
};

function getMemoryStore(): SubmissionStore {
  if (!memoryStore.__rotarySubmissionStore) {
    memoryStore.__rotarySubmissionStore = { join: [], donate: [] };
  }

  return memoryStore.__rotarySubmissionStore;
}

export async function saveSubmission(type: SubmissionType, payload: Record<string, unknown>) {
  const entry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    createdAt: new Date().toISOString(),
    ...payload,
  };

  const memory = getMemoryStore();
  memory[type] = [...memory[type], entry];

  try {
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

    const next = [...existing, entry];
    await writeFile(filePath, JSON.stringify(next, null, 2), "utf8");
  } catch (error) {
    console.warn("Filesystem persistence unavailable; using in-memory fallback.", error);
  }

  return entry;
}
