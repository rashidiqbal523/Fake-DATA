import React, {useState,useEffect } from 'react'

export default function Fake() {
 
  const [data,setData]=useState([])

   const getFakedata= async()=>{
    try {
      const res=await fetch('https://randomuser.me/api/');
    const actualData=await res.json();
    // console.log(actualData.results[0]);
    setData(actualData.results[0])
    } catch (error) {
      console.log(error)
    }
    
   }
  useEffect(() => {
    getFakedata();
  },[])
  
 
  return (
    <>

    <table className="table table-striped table-dark">
  <thead>
    <tr>
      
      <th scope="col">Name:</th>
      <th scope="col"> {data.name.first}{data.name.last}</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Gender:</td>
      <td>{data.gender}</td>
     
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Age:</td>
      <td>{data.registered.age}</td>
     
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Email:</td>
      <td>{data.email}</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Phone number:</td>
      <td>{data.email}</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td>City:</td>
      <td>{data.location.city}</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td>State:</td>
      <td>{data.location.state}</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Country</td>
      <td>{data.location.country}</td>
      
    </tr>
  </tbody>
</table>
    </>
  )
}
