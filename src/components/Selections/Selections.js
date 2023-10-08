import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import TopBanner from '../TopBanner/TopBanner';
import Card from '../Card/Card';
import CategoryComponent from '../CategoryComponent/CategoryComponent';
// import AllInfo from '../../data.json'

const Selections = () => {
    const [allInfos, setAllInfos] = useState([])
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch("data.json") 
    //https://restcountries.com/v2/all?fields=name
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAllInfos(data);
            });
    }, []);

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
        // setSelectedBank(null);
      };

    return (
        <div>
        <div className='mx-auto w-full px-10 py-5  bg-slate-100'>
            <div className="wrapper flex flex-cols-2   justify-between items-center font-semibold">
                <div className='w-52 relative'>
                    <div onClick={() => setOpen(!open)} className={`flex items-center justify-between text-lg  bg-slate-200 rounded-sm px-2 ${!selected && "text-gray-600"}`}>
                        
                        <p className=''>{selected
                        ? selected?.length > 15
                        ? selected?.substring(0,15)  + "..."
                        : selected 
                        : "Category"}</p>
                        <p className=''>< AiFillCaretDown size={20} className={`${open && "rotate-180"}`} /></p>
                    </div>
                    <ul className={`absolute bg-slate-200 w-54 top-10 rounded-sm text-left overflow-y-auto ${
                        open ? " max-h-52" : " max-h-0"
                        }`}>

                        {
                            allInfos.map((alInfo,i) => (
                                
                                <li key={i}
                                 className={`hover:bg-sky-400 hover:text-white text-sm cursor-pointer px-2
                                 ${ alInfo?.category?.type.toLowerCase() === selected?.toLowerCase() &&
                                    "bg-sky-600 text-white"
                                 }`}
                                 onClick={() =>{
                                    // if(country?.name?.toLowerCase() !== selected.toLowerCase() ){
                                    //     setSelected(country.name);
                                    // }
                                    setSelected(alInfo.category.type);
                                    setOpen(false)
                                    handleCategorySelect(alInfo)
                                 }}
                                 >
                                    {alInfo?.category.type}
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className='flex items-center justify-between text-lg w-52 bg-slate-200 rounded-md px-2'>
                    <p className=''>Bank</p>
                    <p className=''><AiFillCaretDown size={20} /></p>
                </div>
                <div className='flex items-center justify-between bg-slate-200 rounded-md w-52 text-lg px-2'>
                    <p className=''>Review</p>
                    <p><MdOutlineReviews size={20} /></p>
                </div>
                <div className='flex items-center justify-between text-lg bg-slate-200 rounded-md w-52 px-2'>
                    <p className=''>Search</p>
                    <p><FiSearch size={20}></FiSearch></p>
                </div>
            </div>
        </div>
        
        
        <Card ></Card>
        <TopBanner></TopBanner>
        <div>
        {selectedCategory && <CategoryComponent category={allInfos} />}
        {/* {selectedBank && <BankComponent bank={selectedBank} />} */}
      </div>
        </div>
    );
};

export default Selections;