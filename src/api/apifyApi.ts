const APIFY_TOKEN = 'apify_api_VGKUX3VbDqgk2eRML7hY5RfcPPj34P3JVLCN';

export async function getApifyBrands() {
  const url = `https://api.apify.com/v2/datasets/H6b1zBZ7DdxjhWjZW/items?token=${APIFY_TOKEN}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Apify: Failed to fetch brands');
  return res.json();
}

export async function getApifyPhoneInput() {
  const url = `https://api.apify.com/v2/key-value-stores/RlxnOxmGiO1KfDTaK/records/INPUT?token=${APIFY_TOKEN}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Apify: Failed to fetch phone input');
  return res.json();
}

export async function getApifyPhoneOutput() {
  const url = `https://api.apify.com/v2/key-value-stores/RlxnOxmGiO1KfDTaK/records/OUTPUT?token=${APIFY_TOKEN}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Apify: Failed to fetch phone output');
  return res.json();
} 