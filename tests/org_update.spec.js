// tests/create_lead.spec.js
const { test, expect } = require('@playwright/test');
const { getAuthToken } = require('../utils/authUtils');

test('POST /lead/create with auth token', async ({ request }) => {
  const token = await getAuthToken(request); 

  const response = await request.get('organization/get?', {
    data:{

        
    },
  
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  });

  const body = await response.json();
  console.log("Create Lead Response:", JSON.stringify(body, null, 2));

  expect(response.status()).toBe(200);
    expect(body).toHaveProperty('status', 200);
   expect(body).toHaveProperty('message');
  
});
