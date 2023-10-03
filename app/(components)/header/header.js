import React from 'react'

export default function Header() {
  return (
    <div>
      <h1>I am Header</h1>
    </div>
  )
}

// 'use client'
// import React, { useState } from 'react'

// export default function Form() {
//     let start={fullName:"",
//                email:"",
//                number:0,
//                dob:"",
//                city:"Faisalabad",
//                gender:"Male",
//                address:"",
//                programOfInterest:"ComputerScience"
// }
//      const [data,setData]=useState([]);
//      const [value,setValue]=useState(start)
//      const handleChange=(e)=>{
//          setValue((a)=>({...a,[e.target.name]:e.target.value}))
//          console.log(value)
//      }
//      const handleData = (e) => {
//         e.preventDefault()
//         if (
//           value.fullName.length &&
//           value.email.length &&
//           value.number > 0 &&
//           value.dob.length &&
//           value.address.length
//         ) {
//           setData((a) => [...a, value]);
          
//         } else {
//           alert('Please fill in all the required fields.');
//         }
        
//         setValue(start);
//       };
        
     
//     return (
//         <div>
//         <div className="bg-gray-200 p-6 rounded-2xl shadow-xl w-5/6 lg:w-1/2 mx-auto mt-6 md:mt-10 ">
//             <h2 className="text-2xl font-semibold mb-4 text-center">Contact Form</h2>
//             <form >
//                 <div className="grid grid-cols-1 md:pl-20">
//                     <div className="mb-4">
//                         <label htmlFor="fullName" className="block mb-1 font-semibold">
//                             Full Name
//                         </label>
//                         <input
//                             type="text"
//                             id="fullName"
//                             name="fullName"
//                             onChange={handleChange}
//                             className="w-full md:w-5/6 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//                             placeholder='Enter your Name'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="Email" className="block mb-1 font-semibold">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="Email"
//                             name="email"
//                             onChange={handleChange}
//                             className="w-full md:w-5/6 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//                             placeholder='Enter your Email'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="number" className="block mb-1 font-semibold">
//                             Phone Number
//                         </label>
//                         <input
//                             type="number"
//                             id="number"
//                             name="number"
//                             onChange={handleChange}
//                             className="w-full md:w-5/6 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//                             placeholder='Enter your Phone Number'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="dob" className="block mb-1 font-semibold">
//                             Date Of Birth
//                         </label>
//                         <input
//                             type="date"
//                             id="dob"
//                             name="dob"
//                             onChange={handleChange}
//                             className="w-full md:w-5/6 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"

//                             required
//                         />
//                     </div>
//                     {/* Add similar fields for email, phone, country, gender, dob, fscMarks, matricMarks, address */}
//                     <div className="mb-4">
//                         <label htmlFor="country" className="block mb-2 font-semibold">
//                             Select City
//                         </label>
//                         <select
//                             id="city"
//                             name="city"
//                             //value={formData.programOfInterest}
//                             onChange={handleChange}
//                             className="w-full md:w-5/6 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//                             required
//                         >
//                             <option value="" disabled>
//                                 Select City
//                             </option>
//                             <option value="faisalabad">Faisalabad</option>
//                             <option value="lahore">Lahore</option>
//                             <option value="multan">Multan</option>
//                             <option value="karachi">Karachi</option>
//                             <option value="islamabad">Islamabad</option>
//                         </select>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="gender" className="block mb-2 font-semibold">
//                             Select Gender
//                         </label>
//                         <select
//                             id="gender"
//                             name="gender"
//                             //value={formData.programOfInterest}
//                             onChange={handleChange}
//                             className="w-full md:w-5/6 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//                             required
//                         >
//                             <option value="" disabled>
//                                 Select Gender
//                             </option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                             <option value="other">Others</option>
//                         </select>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="address" className="block mb-1">
//                             Address
//                         </label>
//                         <textarea
//                             id="address"
//                             name="address"
//                             // value={formData.address}
//                             onChange={handleChange}
//                             className="w-full md:w-5/6 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 resize-none"
//                             rows="4"
//                             placeholder='Enter Your Address'
//                             required
//                         ></textarea>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="programOfInterest" className="block mb-2 font-semibold">
//                             Program of Interest
//                         </label>
//                         <select
//                             id="programOfInterest"
//                             name="programOfInterest"
//                             //value={formData.programOfInterest}
//                             onChange={handleChange}
//                             className="w-full md:w-5/6 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//                             required
//                         >
//                             <option value="" disabled>
//                                 Select Program
//                             </option>
//                             <option value="computer-science">Computer Science</option>
//                             <option value="business-administration">Business Administration</option>
//                             <option value="engineering">Engineering</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className='flex justify-center'><button
//                     type="submit"
//                     onClick={handleData}
//                     className="bg-green-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
//                 >
//                     Submit
//                 </button>
//                 </div>
//             </form>
//         </div>
//         <br/>
//         <hr/>
//         <div className='container mx-auto p-8'>
//         <div className='mt-10 overflow-x-auto '>
//             <table className='min-w-full'>
//                 <thead>
//                 <tr>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>#</th>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>Name</th>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>Email</th>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>Number</th>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>Date of Birth</th>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>City</th>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>Gender</th>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>Address</th>
//                     <th className='px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-lg leading-4 font-medium text-gray-600 uppercase '>Program</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 { data.map((element ,i)=>{
//                     return(<tr key={i} >
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{i+1}</td>
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{element.fullName}</td>
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{element.email}</td>
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{element.number}</td>
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{element.dob}</td>
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{element.city}</td>
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{element.gender}</td>
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{element.address}</td>
//                     <td className='px-6 py-3 border-b text-lg border-gray-300 text-left leading-4 text-gray-600'>{element.programOfInterest}</td>
//                 </tr>)})}
//                 </tbody>
//             </table>
//         </div>
//         </div>
//         </div>
//     )
// }
