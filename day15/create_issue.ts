import axios from "axios";

async function createIssue(){

const response=await axios.post("https://vineethrajendran7.atlassian.net/rest/api/2/issue",

{
"fields":{
"project":{
    "key":"PA"
},
"issuetype":{
    "name":"Bug"
},
"summary": "Login page issue with application not working as expected",
"description":"Login failed_issue created by Playwright API to get response data"
}
},

{
headers:{
    "Content-Type": "application/json"
},
auth:{
    "username":"vineethrajendran7@gmail.com",
    "password":"ATATT3xFfGF0eFEy1O82tq42-poHMvWBZ10OKAR8dnxWLPOfXl7muSyYaxx-fZV1O0Yx30ycJWRkC36LgaoiXlOqMIegE1FglCyTvET6pYbF_oljcV43lENFT295Px1rahWbZtI3cOM2OdDz2NYeZlU3cK-JlVt4TyxZqrJ-5QOsJk__Tp8wB3I=088FE3CB"
}
}
)

console.log(response.data)

}

createIssue();
