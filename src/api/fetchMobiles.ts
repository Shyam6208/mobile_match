// For demonstration only: API key is hardcoded as per user request
const RAPIDAPI_KEY = 'd369df5039mshcc1d1e3aec7e4c3p116027jsn430fbd25c6b0';

const ZYLA_API_KEY = 'YOUR_ZYLA_API_KEY'; // Replace with your actual Zyla API key

export async function fetchMobileSpecsById(customId: string = '103693') {
  const url = `https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-specifications-by-phone-custom-id/${customId}`;
  const res = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
    }
  });
  if (!res.ok) throw new Error('Failed to fetch mobile specs');
  return res.json();
}

export async function searchPhonesByName(query: string) {
  const url = `https://zylalabs.com/api/2281/mobile+phone+database+api/2165/search?q=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${ZYLA_API_KEY}`
    }
  });
  if (!res.ok) throw new Error('Failed to search phones');
  return res.json();
}

export async function getBrands() {
  const url = 'https://zylalabs.com/api/2281/mobile+phone+database+api/2162/get+brands';
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${ZYLA_API_KEY}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch brands');
  return res.json();
}

export async function getPhonesByBrand(brandId: string) {
  const url = `https://zylalabs.com/api/2281/mobile+phone+database+api/2163/get+phone+by+brand?brand_id=${brandId}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${ZYLA_API_KEY}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch phones by brand');
  return res.json();
}

export async function fetchPhoneDetailsById(phoneId: string) {
  const url = `https://zylalabs.com/api/2281/mobile+phone+database+api/2164/get+phone+details?phone_id=${phoneId}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${ZYLA_API_KEY}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch phone details');
  return res.json();
} 