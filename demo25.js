const UserData=[
    {id:1, name: "Abdul",gender:"male",age:20,occupation:undefined},
    {id:2, name: "Gyanisha",gender:"Female",age:19,occupation:"intern"},
    {id:3, name: "Eljan",gender:"male",age:20,occupation:"streamer"},
    {id:4, name: "Rabina",gender:"Female",age:18,occupation:undefined},
    {id:5, name: "Sabina",gender:"Female",age:20,occupation:"SWE"},
    {id:6, name: "Bhabishya",gender:"male",age:22,occupation:undefined},
]
const response={
    status:200,
    message:"User Data featched sucessfully",
    data:UserData
}

const featchUserNames=()=>{
    if(response.status ===200){
       const result= response.data.map((user)=> user.name)
       return result
    }else{
        const message="API featch failed"
        return message
    }
}
console.log(featchUserNames())