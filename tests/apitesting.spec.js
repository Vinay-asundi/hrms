const{test,expect}=require('@playwright/test')
var userid
test('get',async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
})

test("POST request Create New Booking ", async ({ request }) => {
const response = await request.post("/booking", {
  data: {
    firstname: "Kim",
    lastname: "Smith",
    totalprice: 125,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-04-01",
      checkout: "2024-07-15",
    },
    additionalneeds: "Breakfast",
  },
});
console.log(JSON.stringify(response));
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);
const responseBody = await response.json();
expect(responseBody.booking).toHaveProperty("totalprice", 125);
expect(responseBody.booking).toHaveProperty("firstname", "Kim");
expect(responseBody.booking).toHaveProperty("lastname", "Smith");
expect(responseBody.booking).toHaveProperty("depositpaid", true);
});



test("GET Request : used to get all the booking details", async ({ request }) => {
const response = await request.get("/booking");
console.log(await response.json());
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);
});




var token;
test("PUT Request : Update the booking details", async ({ request }) => {
//Generate the Token
const response = await request.post("/auth", {
  data: {
    username: "admin",
    password: "password123",
  },
});
console.log(JSON.stringify(response));
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);
const responseBody = await response.json();
token = responseBody.token;

// PUT Request : Update Booking Detail
const updateBookingDetail = await request.put("/booking/1", {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookie: `token=${token}`,
  },
  data: {
    firstname: "Tarry",
    lastname: "Liu",
    totalprice: 189,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-02-01",
      checkout: "2024-06-15",
    },
    additionalneeds: "Breakfast",
  },
});
expect(updateBookingDetail.ok()).toBeTruthy();
expect(updateBookingDetail.status()).toBe(200);
const updateBookingDetailResponsebody = await updateBookingDetail.json();
expect(updateBookingDetailResponsebody).toHaveProperty("totalprice", 189);
expect(updateBookingDetailResponsebody).toHaveProperty("lastname", "Liu");
expect(updateBookingDetailResponsebody).toHaveProperty("firstname", "Tarry");
});