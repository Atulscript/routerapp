/**
 * Roughly a quarter of the password values in the data are instructions rather
 * than secrets: "Printed Admin Password on Sticker", "Amazon Account / OTP",
 * "Empty (set on first login)". Attaching a copy button to those copies a
 * sentence to the clipboard, so the UI has to tell the two apart.
 *
 * This is the one place that decides, so every page inherits the same answer.
 */

const INSTRUCTION =
  /\b(sticker|label|account|serial|otp|empty|printed|blank|see|check|first login|first boot|utility|chars? of|created|app)\b/i;

/** "Set via the Deco app", "Set during setup" — an action, not a secret. */
const DIRECTIVE = /\bset\s+(on|during|via|by|in|up|at)\b|^set\b/i;

export function isLiteralCredential(value: string | null | undefined): boolean {
  if (!value) return false;
  const v = value.trim();
  if (v === '') return false;
  // Anything this long is prose, not a credential.
  if (v.length > 24) return false;
  // A parenthetical is always explanation: "(blank)", "admin / (Wi-Fi password)".
  // You cannot usefully copy a value that has to explain itself.
  if (/\(.+\)/.test(v)) return false;
  if (DIRECTIVE.test(v)) return false;
  return !INSTRUCTION.test(v);
}

/*
 * Known limitation: compound values like "admin / Setup Password" are still
 * treated as literal. They are genuinely ambiguous, since the first half is a
 * usable credential, and the two failure modes are not symmetric. Showing an
 * instruction with a copy button is a small annoyance; hiding a real password
 * behind a note is not. The heuristic errs toward showing the button.
 */

/** "192.168.0.1 / 192.168.1.1 / tplinkwifi.net" -> three separate addresses. */
export function splitGatewayValues(defaultIp: string | null | undefined): string[] {
  if (!defaultIp) return [];
  return defaultIp.split(/\s*\/\s*/).map(v => v.trim()).filter(Boolean);
}

/** Display text for a value that cannot be copied. */
export function credentialNote(value: string | null | undefined): string {
  const v = (value || '').trim();
  if (v === '' || v === '(blank)') return 'Leave blank';
  return v;
}
