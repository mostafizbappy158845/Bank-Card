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
    const [cardSelected, setCardSelected] = useState(null);

    const uniqueCards = [...new Set(allInfos.map(item => item.cardtype))];
    const uniqueCategorys = [...new Set(allInfos.map(item => item.category))];

    useEffect(() => {
        fetch("data.json")
            //https://restcountries.com/v2/all?fields=name
            .then((res) => res.json())
            .then((data) => {
                setAllInfos(data);
            });
    }, []);

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
        // setSelectedBank(null);
    };
    const handleSelectedCard = (type) => {
        setCardSelected(type);
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
                                    ? selected?.substring(0, 15) + "..."
                                    : selected
                                : "Category"}</p>
                            <p className=''>< AiFillCaretDown size={20} className={`${open && "rotate-180"}`} /></p>
                        </div>
                        <ul className={`absolute bg-slate-200 w-54 top-10 rounded-sm text-left overflow-y-auto ${open ? " max-h-52" : " max-h-0"
                            }`}>

                            {
                                //  allInfos.map((alInfo, i) => (
                                    uniqueCategorys.map((alInfo, i) => (
                                    // Bappy is okkkkk
                                    <li key={i}
                                        className={`hover:bg-sky-400 hover:text-white text-sm cursor-pointer px-2
                                 ${alInfo?.toLowerCase() === selected?.toLowerCase() &&
                                            "bg-sky-600 text-white"
                                            }`}
                                        onClick={() => {
                                            // if(country?.name?.toLowerCase() !== selected.toLowerCase() ){
                                            //     setSelected(country.name);
                                            // }
                                            setSelected(alInfo);
                                            setOpen(false)
                                            handleCategorySelect(alInfo)
                                        }}
                                    >
                                        {alInfo}
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


            {/* <Card allCards={allInfos} handleCard = {}></Card> */}
            <div className=' bg-[#eeeded] pt-4'>
            <div className="wrapper">
                <div className="card-grp flex items-center justify-center  font-medium ">
                    {uniqueCards.map( (card,i) =>(
                             <button key={i} onClick={() =>handleSelectedCard(card)}
                             className='border-2  rounded-md p-4 bg-[#9EDDFF] hover:bg-[#6499E9]'>{card}</button>
                             ))}
                </div>
            </div>
        </div>
            <TopBanner></TopBanner>
            <div>
                {selectedCategory && <CategoryComponent category={allInfos} selected={selected} cardSelected={cardSelected}  />}
                {/* {selectedBank && <BankComponent bank={selectedBank} />} */}
            </div>
        </div>
    );
};

export default Selections;