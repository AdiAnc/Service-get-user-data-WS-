import {useState} from 'react'
import axios from 'axios'

function Ex6_2() {

const [userid, setUserid]= useState(0)
const [user, setUser] = useState({})
const [userTodo, setUsertodo] = useState([])
const [userPost, setUserpost] = useState({})


const GetUserNameEmail = async() => 

{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users/"+ userid)
    setUser(resp.data)
}

const GetUserTodo = async() => 
{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/todos")
    let result = resp.data
    let resultId = result.filter(x => x.userId == userid)
    let resultIdTitle = resultId.map(x => x.title)
    const resultIdTitle5 = resultIdTitle.slice(0, 5)
    setUsertodo(resultIdTitle5)

}

const GetUserPost = async() => 
{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
    let result = resp.data
    let resultId = result.find(x => x.userId == userid)
    console.log(resultId)
    setUserpost(resultId)

}


return (

 <div>
    ID : <input type="text" onChange={e => setUserid(e.target.value)} /> <br/>
    
<input type="button" value="Get Data" onClick={() => {GetUserNameEmail();GetUserTodo();GetUserPost()}}/><br/>



    Name : {user.name} <br/>
    Mail : {user.email} <br/>
    Post : {userPost.title} <br/>
    Todo :  <br/>

    <ul>
          {
            userTodo.map((item,index) =>
            {
              return <li key={index}>{item}</li>
            })
          }
        </ul>

 </div> 


)

}


export default Ex6_2;