

const { test, expect, request } = require('@playwright/test');

test('POST /auth/login returns valid token', async ({ request }) => {
  const response = await request.post('auth/login', {
    data: {
      mobile: '9008854177',
      password: 'Test@123'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();


  console.log("Response Body:", JSON.stringify(body,null, 2));
  expect(body).toHaveProperty('status', 200);
  expect(body).toHaveProperty('message', 'Login Successfull');
  expect(body).toHaveProperty('data');
  const data = body.data;
 console.log(data.token)
 console.log(data.name)
  expect(data).toHaveProperty('token');
  expect(typeof data.token).toBe('string');

  expect(data).toHaveProperty('name');
  expect(data.name).toHaveProperty('firstName');
  expect(data.name).toHaveProperty('lastName');

  expect(data).toHaveProperty('email', 'shivu@gmail.com');
});
