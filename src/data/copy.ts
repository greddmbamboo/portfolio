import edits from './edits.json';

const saved = edits as Record<string, string>;

export function copy(key: string, fallback: string | undefined): string {
  return saved[key] ?? fallback ?? '';
}
