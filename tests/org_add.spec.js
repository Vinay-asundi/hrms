// tests/create_lead.spec.js
const { test, expect } = require('@playwright/test');
const { getAuthToken } = require('../utils/authUtils');

test('POST /lead/create with auth token', async ({ request }) => {
  const token = await getAuthToken(request); 

  const response = await request.post('organization/add', {
    data:{
    "name": "Mwb12",
    "orgTypeId": "6732def31d51bd0ae2a65e07",
    "structure": "Branch",
    //"panNo": "LMNOP2345R",
  //"gstNo": "32LMNOP2345R1ZX",
  "address": {
    "addressType": "Branch Address",
    "hno": "wqwqwq",
    "street": "wwqwwq",
    "landmark": "wwqww",
    "village": "ddd",
    "taluk": "ddd",
    "district": "dd",
    "state": "Karnataka",
    "country": "India",
    "pincode": "580020"
  },
 
  "geoLocation": {
        "city": "Hubballi",
        "state": "Karnataka",
        "country": "India",
        "pincode": "580029",
        "address": "122/112, Deshpande Nagar, Hubballi, Karnataka 580029, India"
    },
    "geoJson": {
        "type": "Point",
        "coordinates": [
            75.1355931,
            15.3558115
        ]
    }

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
   expect(body).toHaveProperty('message', 'Organization Added successfully');
  
});
