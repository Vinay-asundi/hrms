const{test,expect}=require("@playwright/test")
const getAuthToken=require("../utils/authUtils")

test('lead get',async({request})=>{
const token= await getAuthToken(request)

const response=await request.post('lead/get',{
headers:{
    Authorization:`Bearer ${token}`,
    'content-type':'Authorization/json'
}
})

const body=await response.json()
console.log('lead get:',JSON.stringify(body,null,2))
expect(response.status()).toBe(200)
expect(body).toHaveProperty('message',"Lead List Found Successfully")
})