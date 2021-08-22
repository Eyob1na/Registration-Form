import React,{useState} from 'react';
import { db } from "../fire";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Staff = () => {

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [mname,setMname]=useState("");
    const [id,setId]=useState("");
    const [email,setEmail]=useState("");
    const [department,setDepartment]=useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [degree,setDegree]=useState("BS");
    const [reason,setReason]=useState("");



    const handleSubmit =(e)=> {
        e.preventDefault();

        db.collection('Staff').add({
                fname:fname,
                lname:lname,
                mname:mname,
                id:id,
                email:email,
                department:department,
                degree:degree,
                reason:reason,
            })
            .then(()=>{
                alert("Form Submitted Succesfully!");
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
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            
            <h1>Staff Clearance Form</h1>
                <h2>Staff Name</h2>
        
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
            <label>
                Academic Degree:
                <select value={degree} onChange={e=> setDegree(e.currentTarget.value)}>
                    <option value="BS">Bachelor Degree(B.S)</option>
                    <option value="MS">Master's Degree(M.S)</option>
                    <option value="PHD">Doctoral Degree(Ph.D)</option>
                </select>
            </label>

            <label>Department</label>
            <input placeholder="Department"
                    value={department}
                    onChange={(e)=> setDepartment(e.target.value)}
                    />
            <label>Last Date in Institution</label>
            <DatePicker 
                selected={startDate} 
                onChange={date => setStartDate(date)} 
            />

            <h3>Reason For Clearance</h3>
        <input
            value="one"
            checked={reason === "one"}
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Retirement
        <input
            value="two"
            checked={reason=== "two"}
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Transfer
        
        <input
            value="three"
            checked={reason=== "three"}
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Scholarship
    
        <input
            value="four"
            checked={reason=== "four"}
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Training
        <input
            value="five"
            checked={reason=== "five"}
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />Withdrawal Personal Reason
        <input
            value="six"
            checked={reason=== "six"}
            type="radio"
            onChange={(e)=> setReason(e.target.value)}
        />End of Contract
        
    
    <div className="btn">
    <button type="submit">Submit</button>
    </div>
</form>
    )
};

export default Staff;
