const FONO_API_TOKEN = 'YOUR_FONOAPI_TOKEN'; // Replace with your token

export async function searchFonoApiPhones(query: string) {
  const url = 'https://fonoapi.freshpixl.com/v1/getdevice';
  const body = new URLSearchParams({
    token: FONO_API_TOKEN,
    device: query,
    limit: '10'
  });
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body
  });
  if (!res.ok) throw new Error('FonoApi: Failed to search phones');
  return res.json();
} 