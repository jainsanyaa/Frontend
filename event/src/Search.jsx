import{useState} from 'react'
export default function Search(){
    const[Search,setSearch]=useState("");
    const name=["KIET","Sanya","pari"]
    const student=[""]
    return(
        <div>
            <h2>Demo to show search</h2>
            <input type = "text"
            placeholder= 'Enter to search'
            value={find}
            onChange={(e)=>setFind(e.target.value)}/>
    

        </div>
    )

}
