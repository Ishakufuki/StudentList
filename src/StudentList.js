// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
function StudentList(){
const [studName, setStudName] = useState('');
const [studAge, setStudAge] = useState('');

const [studlist, setStudList] =useState([]);
const handleCreate = async (event)=>{
    event.preventDefault();
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL+'/student',{
            method:'POST',
            headers:{
                "content-Type":"application/json"
            },
            body: JSON.stringify({
                name: studName,
                age: studAge,
            })
        })
        if(!response.ok){
            throw new Error("failed to create student")
        }
        await getStudentList();
        setStudName('')
        setStudAge('')
    } catch (error) {
        
    }
};

// const handleDelete =()=>{};
const getStudentList = async () =>{
    try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL+'/student-list');
        if(!response.ok){
            throw new Error('failed to fetch student list');
        }

        const data = await response.json();
        setStudList(data?.data || [])
        console.log(data);
    } catch (error) {
    console.log(error)
    }
};
useEffect(()=>{
getStudentList();
},[])
    return(
        <div id="student-list-page">
            <h1>student list</h1>
            
            <section>
                <form onSubmit={handleCreate}>
                    <input placeholder="name e.g john doe"
                     value={studName}
                      onChange={(event) => setStudName (event.target.value)}/>
                    <input
                    placeholder="Age e.g 18"
                    type="Number"
                    value={studAge}
                    onChange={(event) => setStudAge (event.target.value)}/>
                    <button  type="submit"  id="submit-btn">Submit</button>
                </form>
                <div>
                    <p>Name: {studName}</p>
                    <p>Age: {studAge}</p>
                </div>
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    studlist.map((student)=>{
                                        return(
                                            <tr>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.age}</td>
                                            <td>
                                                <button>Delete</button>
                                            </td>
                                            </tr>
                                        )  
                                    })}
                                
                                    </tbody>
                                    </table>
                                    </section>
        </div>
    )
}

export default StudentList;