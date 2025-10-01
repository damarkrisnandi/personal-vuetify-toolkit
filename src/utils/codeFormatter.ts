/**
 * Formats code strings for proper display and syntax highlighting
 */
export function formatCode(code: string): string {
  // Replace escaped newlines with actual newlines
  return code.replace(/\\n/g, '\n')
}