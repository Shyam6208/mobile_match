export async function searchPhonesByName(query: string) {
  const url = `https://api-mobilespecs.azharimm.dev/search?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to search phones');
  return res.json();
}

export async function fetchPhoneDetailsBySlug(phoneSlug: string) {
  const url = `https://api-mobilespecs.azharimm.dev/${phoneSlug}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch phone details');
  return res.json();
} 