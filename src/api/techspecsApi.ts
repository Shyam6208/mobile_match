const TECHSPECS_API_KEY = 'fa616f14-4aff-4172-afc8-10aa6e895e4c'; // Provided API key

export async function searchPhonesByName(query: string) {
  const url = `https://api.techspecs.io/v5/products/search?query=${encodeURIComponent(query)}&category=smartphones`;
  const res = await fetch(url, {
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${TECHSPECS_API_KEY}`
    }
  });
  if (!res.ok) throw new Error('Failed to search phones');
  return res.json();
}

export async function fetchPhoneDetailsById(id: string) {
  const url = `https://api.techspecs.io/v5/products/${id}`;
  const res = await fetch(url, {
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${TECHSPECS_API_KEY}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch phone details');
  return res.json();
}

export async function fetchPhoneImagesById(id: string) {
  const url = `https://api.techspecs.io/v5/products/${id}/images`;
  const res = await fetch(url, {
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${TECHSPECS_API_KEY}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch phone images');
  return res.json();
}

export async function fetchAllBrands() {
  const url = `https://api.techspecs.io/v5/brands`;
  const res = await fetch(url, {
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${TECHSPECS_API_KEY}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch brands');
  return res.json();
} 