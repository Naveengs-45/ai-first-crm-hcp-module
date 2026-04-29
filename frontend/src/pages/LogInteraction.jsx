import { useState } from "react";

function LogInteraction() {

const [aiInput,setAiInput] = useState("");
const [aiResponse,setAiResponse] = useState("");

const [interactions,setInteractions] = useState([]);

const [hcpName,setHcpName] = useState("");
const [topic,setTopic] = useState("");

const [interactionType,setInteractionType] = useState("");


const handleSubmit = async () => {
try {

const data = {
hcp:hcpName,
topic:topic
};

const response = await fetch(
"http://127.0.0.1:8000/log-interaction",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
}
);

// const result = await response.json();

// alert("Saved to Backend!");
// console.log(result);

const result = await response.json();

setInteractions([
...interactions,
{
doctor:hcpName,
topic:topic,
type:interactionType
}
]);

alert("Saved to Backend!");
console.log(result);

}
catch(error){
console.error(error);
alert("Error connecting backend");
}
};



const handleAI = async () => {

try{

if(!aiInput){
alert("Type something first");
return;
}

const response = await fetch(
"http://127.0.0.1:8000/agent",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message: aiInput
})
}
);

if(!response.ok){
throw new Error("Request failed");
}

const result = await response.json();

console.log(result);

setAiResponse(result.result);

}
catch(error){
console.error(error);
alert(error.message);
}

};

return (
<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"30px",
padding:"40px"
}}>

<div style={{border:"1px solid #ccc",padding:"20px"}}>
<h2>AI First CRM - HCP Module</h2>

<input 
placeholder="HCP Name"
value={hcpName}
onChange={(e)=>setHcpName(e.target.value)} />
<br/><br/>

<select style={{width:"165px"}} value={interactionType} onChange={(e)=>setInteractionType(e.target.value)} >
<option value="">Interaction Type</option>
<option value="Meeting">Meeting</option>
<option value="Call">Call</option>
<option value="Email">Email</option>
</select>
<br/><br/>

<select style={{width:"165px"}}>
  <option>Sentiment</option>
  <option>Positive</option>
  <option>Neutral</option>
  <option>Negative</option>
</select>
<br/><br/>

<textarea placeholder="Topics Discussed" value={topic} onChange={(e)=>setTopic(e.target.value)}></textarea>
<br/><br/>


<textarea placeholder="Outcomes"></textarea>
<br/><br/>

<textarea placeholder="Follow-up Actions"></textarea>
<br/><br/>


<button onClick={handleSubmit}>
Submit
</button>
<h3>Interaction History</h3>

<ul>
{interactions.map((item,index)=>(
<li key={index}>
{item.doctor} - {item.type} - {item.topic}
</li>
))}
</ul>

</div>


<div style={{border:"1px solid #ccc",padding:"20px"}}>
<h2>AI Assistant</h2>

<textarea
rows="10"
placeholder="Describe interaction with doctor..."
value={aiInput}
onChange={(e)=>setAiInput(e.target.value)}
/>

<br/><br/>

<button onClick={handleAI}>
Log with AI
</button>

<br/><br/>

<p>
AI Response: {aiResponse}
</p>

</div>

</div>
)

}

export default LogInteraction