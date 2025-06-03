const{test,expect}=require("@playwright/test")
const{ getAuthToken }=require('../utils/authUtils')



test('dep_create',async({request})=>{
const token=await getAuthToken(request)

const response=await request.post('department/create/',
    {data:{
        "name":"test branch"
    },
    headers:{
        Authorization:`Bearer ${token}`,
      'Content-Type': 'application/json',
    }
})

const body=await response.json()
console.log('dep resp:',JSON.stringify(body,null,2))
expect(response.status()).toBe(200)
expect(body).toHaveProperty('message','Department Added successfully')


})