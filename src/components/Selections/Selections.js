import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";

const Selections = () => {
    const [countries, setCountries] = useState([])
    const [selected, setSelected] = useState("");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        fetch("https://restcountries.com/v2/all?fields=name")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setCountries(data);
            });
    }, []);

    return (
        <div className='mx-auto w-full px-10 py-5  bg-slate-100'>
            <div className="wrapper flex justify-between items-center font-semibold">
                <div className='w-52 relative'>
                    <div className={`flex items-center justify-between text-lg  bg-slate-200 rounded-sm px-2 ${!selected && "text-gray-600"}`}>
                        <p className=''>{selected
                        ? selected?.length > 15
                        ? selected?.substring(0,15)  + "..."
                        : selected 
                        : "Category"}</p>
                        <p className=''>< AiFillCaretDown size={20} /></p>
                    </div>
                    <ul className='absolute bg-slate-200 w-54 top-10 rounded-sm text-left  max-h-52 overflow-y-auto'>

                        {
                            countries.map((country) => (
                                <li key={country?.name}
                                 className={`hover:bg-sky-400 hover:text-white text-sm cursor-pointer px-2`}
                                 onClick={() =>{
                                    if(country?.name?.toLowerCase() !== selected.toLowerCase() ){
                                        setSelected(country.name);
                                    }
                                 }}
                                 >
                                    {country?.name}
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className='flex items-center justify-between text-lg w-52 bg-slate-200 rounded-md px-2'>
                    <p className=''>Bank</p>
                    <p className=''><AiFillCaretDown size={20} /></p>
                </div>
                <div className='flex items-center justify-between bg-slate-200 rounded-md w-52 text-lg px-2'><p className=''>Review</p>
                    <p><MdOutlineReviews size={20} /></p>
                </div>
                <div className='flex items-center justify-between text-lg bg-slate-200 rounded-md w-52 px-2'>
                    <p className=''>Search</p>
                    <p><FiSearch size={20}></FiSearch></p>
                </div>
            </div>
        </div>
    );
};

export default Selections;