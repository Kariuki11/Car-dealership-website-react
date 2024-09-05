import React from 'react'
//import { Separator } from "@/components/ui/separator"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator";
  import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex gap-5 items-center w-[60%]'>
        <Select>
            <SelectTrigger className="outline-none md:border-none w-[180px] shadow-none text-lg">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select>
            <SelectTrigger className="outline-none md:border-none w-[180px] shadow-none text-lg">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block"/>
        <Select>
            <SelectTrigger className="outline-none md:border-none w-[180px] shadow-none text-lg">
                <SelectValue placeholder="Theme 3" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
        <div>
        <CiSearch className='text-xl cursor-pointer hover:scale-105 transition-all'/>
        </div>
    </div>
  )
}

export default Search









// import React from 'react'
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
  

// function Search() {
//   return (
//     <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex-row gap-10 px-5 items-center w-[60%]'>
//         <Select>
//             <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
//                 <SelectValue placeholder="Theme" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectItem value="light">Light</SelectItem>
//                 <SelectItem value="dark">Dark</SelectItem>
//                 <SelectItem value="system">System</SelectItem>
//             </SelectContent>
//         </Select>
//         <Select>
//             <SelectTrigger className="w-[180px] outline-none md:border-none w-full shadow-none text-lg">
//                 <SelectValue placeholder="Theme" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectItem value="light">Light</SelectItem>
//                 <SelectItem value="dark">Dark</SelectItem>
//                 <SelectItem value="system">System</SelectItem>
//             </SelectContent>
//         </Select>
//         <Select>
//             <SelectTrigger className="w-[180px] outline-none md:border-none w-full shadow-none text-lg">
//                 <SelectValue placeholder="Theme" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectItem value="light">Light</SelectItem>
//                 <SelectItem value="dark">Dark</SelectItem>
//                 <SelectItem value="system">System</SelectItem>
//             </SelectContent>
//         </Select>

//     </div>
//   )
// }

// export default Search
