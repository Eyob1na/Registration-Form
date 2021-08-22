import React,{useState} from 'react';
import { db } from "../fire";
const Student = () => {

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [mname,setMname]=useState("");
    const [id,setId]=useState("");
    const [email,setEmail]=useState("");
    const [department,setDepartment]=useState("");
    const [section,setSection]=useState("");
    const [year,setYear]=useState("");
    const [college,setCollege]=useState("Ele");
    const [reason,setReason]=useState("");



    const handleSubmit =(e)=> {
        e.preventDefault();

        db.collection('Student').add({
                fname:fname,
                lname:lname,
                mname:mname,
                id:id,
                email:email,
                department:department,
                section:section,
                year:year,
                college:college,
                reason:reason,
            })
            .then(()=>{
                alert("Form Submitted Successfully!");
            })
            .catch((error)=>{
                alert(error.message);
            })
            setFname('')
            setMname('')
            setLname('')
            setId('')
            setEmail('')
            setDepartment('')
            setSection('')
            setYear('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            
            <h1>Student Clearance Form</h1>
                <h2>Student Name</h2>
            <label>First Name</label>
            <input  type="text"
                    placeholder="First Name"
                    value={fname}
                    onChange={(e)=> setFname(e.target.value)}
                    />
            <label>Last Name</label>
            <input  type="text"
                    placeholder="Last Name"
                    value={lname}
                    onChange={(e)=> setLname(e.target.value)}
            />
            <label>Middle Name</label>
            <input  type="text"
                    placeholder="Middle Name"
                    value={mname}
                    onChange={(e)=> setMname(e.target.value)}
            />
            <br/>
            <label>ID No.</label>
            <input placeholder="ID No."
                    value={id}
                    onChange={(e)=> setId(e.target.value)}
                    />

            <label>Email</label>
            <input placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
            <br/>
            <label>
                College/School:
                <select value={college} onChange={e=>setCollege(e.currentTarget.value)}>
                    <option value="Arc">College of Architecture and Civil Engineering</option>
                    <option value="Bio">College Biological and Chemical Engineering</option>
                    <option value="Ele">College of Electrical and Mechanical Engineering</option>
                    <option value="Soc">College of Social and Natural Science</option>
                    <option value="Applied">College of Applied Science</option>
                </select>
            </label>

            <label>Department</label>
            <input placeholder="Department"
                    value={department}
                    onChange={(e)=> setDepartment(e.target.value)}
                    />
            <br/>
            <label>Section</label>
            <input placeholder="Section"
                    value={section}
                    onChange={(e)=> setSection(e.target.value)}
                    />

            <label>Class Year</label>
            <input placeholder="Year"
                    value={year}
                    onChange={(e)=> setYear(e.target.value)}
                    />
            <br/>
            <h3>Reason For Clearance</h3>

        <input
            value="one"
            checked={reason ==="one"}
            type="radio"
            onChange={(e)=>{setReason(e.target.value)}}
        />Graduation

        <input
            checked={reason ==="two"}
            value="two"
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />End of Semester/Academic Year

        <input
            checked={reason==="three"}
            value="three"
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Withdrawal Personal Reason

        <input
            checked={reason === "four"}
            value="four"
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Withdrawal Academic Reason

        <input
            checked={reason === "five"}
            value="five"
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Forced Withdrawal

        <input
            checked={reason === "six"}
            value="six"
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Dropout
    

    <div className="btn">
    <button type="submit">Submit</button>
    </div>
</form>
    )
};

export default Student;
