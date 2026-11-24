/** Toolora v3 utilities: small, deterministic helpers for browser-side tool processing. */
export const normalizeInput = (value = '') => String(value).replace(/\r\n?/g, '\n');
export const assertNonEmpty = (value, label = 'Input') => {
  if (!String(value ?? '').trim()) throw new Error(`${label} is required.`);
  return value;
};
export const safeParseJSON = (text) => JSON.parse(assertNonEmpty(text, 'JSON input'));
export const formatJSON = (text, compact = false) => {
  const parsed = safeParseJSON(text);
  return compact ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2);
};
export const uniqueLines = (text) => [...new Set(normalizeInput(text).split('\n'))].join('\n');
export const extractEmails = (text) => [...new Set(String(text).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [])];
export const textToHex = (text) => [...String(text)].map(ch => ch.codePointAt(0).toString(16).padStart(2, '0')).join(' ');
export const hexToText = (text) => {
  const clean = String(text).replace(/\s+/g, '');
  if (!clean || clean.length % 2 || !/^[0-9a-f]+$/i.test(clean)) throw new Error('Enter valid hexadecimal pairs.');
  return clean.match(/.{2}/g).map(pair => String.fromCharCode(parseInt(pair, 16))).join('');
};
