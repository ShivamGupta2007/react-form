import React, { useEffect } from 'react';
import { useState } from 'react';
import './Form.css';
const Form = () => {
    const [form, setForm] =  useState({});
    const onChange = (e)=> {
        let {type, name, value, checked, files} = e.target;
        //console.log(type, name, value, checked);

        if(type === 'checkbox'){
            setForm({
                ...form,
                [name]: checked,
            }); 
        }else if(type === "file"){
            setForm({
                ...form,
                [name]: files,
            }); 
        }
        else{
            setForm({
                ...form,
                [name]: value,
            });
        }   
    };
    useEffect(()=>{
        console.log(form);
     },[form]);

     const handleonSubmit = (e) =>{
         e.preventDefault();
        console.log(form);
     };
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleonSubmit}>
        <div className='div'>
            <label>Name : </label>
            <input type="text" name="username" placeholder="Enter Name"  onChange={onChange}
            />
        </div>
        <div className='div1'>
            <label>Age : </label>
            <input type="number" name="age" placeholder="Enter Age" onChange={onChange}
            />
        </div>
        <div className='div2'>
            <label>Address : </label>
            <textarea type="text" name="address" placeholder="Enter Addres" onChange={onChange}
            />
        </div>
        
        {/* <div className='div3'>
            <label>Male: </label>
            <input type="radio" name="gender"
            value= "male" onChange={onChange}
            />
        </div>
        <div className='div4'>
            <label>Female : </label>
            <input type="radio" name="gender"
            value="female" onChange={onChange}
            />
        </div> */}
        <div className='div5'>
            <label className='department'>Department : </label>
            <select name="selectDepartment" onChange={onChange}>
                <option value="sde1">SDE1</option>
                <option value="sde2">SDE2</option>
                <option value="sde3">SDE3</option>
            </select>
        </div>
        <div className='div6'>
            <label>Salary : </label>
            <input type="number" name="salary" placeholder="Enter Salary" onChange={onChange}
            />
        </div>
        <div className='div7'>
            <label class="ms">Marital State : </label>
            <input type="checkbox" name="maritalstate" onChange={onChange}
            />
        </div>
        <div>
            <label>Upload File : </label>
            <input type="file" name="photo" accept='image/png, image/jpeg, application/pdf'
            files={form.photo} onChange={onChange}
            />
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form