import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import TopBanner from '../TopBanner/TopBanner';
import CategoryComponent from '../CategoryComponent/CategoryComponent';
import BankComponent from '../BankComponent/BankComponent';
import HotOffer from '../HotOffer/HotOffer';
import SearchComponent from '../SearchComponent/SearchComponent';
// import AllInfo from '../../data.json'

const Selections = () => {
    const [allInfos, setAllInfos] = useState([])
    // const [items, setItems] = useState([])
    const [selected, setSelected] = useState("");
    const [bankname, setBankname] = useState("");
    const [openCat, setOpenCat] = useState(false);
    const [openBank, setOpenBank] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBank, setSelectedBank] = useState(null);
    const [cardSelected, setCardSelected] = useState(null);
    //---//
    const [searchInput, setSearchInput] = useState("");
    const [activeCard, setActiveCard] = useState(null);

    const uniqueCards = [...new Set(allInfos.map(item => item.cardtype))];
    const uniqueCategorys = [...new Set(allInfos.map(item => item.category))];
    const uniqueBank = [...new Set(allInfos.map(item => item.bankfullname))];

    useEffect(() => {
        fetch("data.json")
            //https://restcountries.com/v2/all?fields=name
            .then((res) => res.json())
            .then((data) => {
                setAllInfos(data);
                // setItems(data);
            });
    }, []);

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
        setBankname("")
        setSelectedBank(null);
        setSearchInput(null)
        setActiveCard(null);
        };
    const handleBankSelect = (cat) => {
        setSelectedBank(cat);
        setSelected("")
        setSelectedCategory(null);
        setSearchInput(null)
        setActiveCard(null);
        // localStorage.setItem(cat);
        };
    const handleCardSelected = (card) =>{
        setCardSelected(card);
        setActiveCard(card);
    }    
    const anySelect = selectedCategory || selectedBank || searchInput;
    
    return (
        <div>
            <div className='mx-auto w-full px-10 py-5  bg-slate-200'>
                {/* flex flex-col md:flex-cols-2 lg:flex-row   justify-between items-center */}
                <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center content-center  font-semibold">
                    <div className='w-52 relative mb-5 '>
                        <div onClick={() => {
                            setOpenCat(!openCat)
                            setOpenBank(false)
                        }} className={`flex items-center justify-between text-lg  bg-slate-100 rounded-sm px-2 ${!selected && "text-gray-600"}`}>

                            <p className=''>{selected
                                ? selected?.length > 15
                                    ? selected?.substring(0, 15) + "..."
                                    : selected
                                : "Category"}</p>
                            <p className=''>< AiFillCaretDown size={20} className={`${openCat && "rotate-180"}`} /></p>
                        </div>
                        <ul className={`absolute bg-slate-100 w-full top-10 rounded-sm text-left overflow-y-auto ${openCat ? " z-20 max-h-52 pt-0" : " max-h-0"
                            }`}>

                            {
                                //  allInfos.map((alInfo, i) => (
                                uniqueCategorys.map((alInfo, i) => (
                                    
                                    <li key={i}
                                        className={`hover:bg-sky-300 hover:text-white text-sm cursor-pointer px-2 py-2
                                 ${alInfo?.toLowerCase() === selected?.toLowerCase() &&
                                            "bg-sky-400 text-white"
                                            }`}
                                        onClick={() => {
                                            // if(country?.name?.toLowerCase() !== selected.toLowerCase() ){
                                            //     setSelected(country.name);
                                            // }
                                            setSelected(alInfo);
                                            setOpenCat(false)
                                            handleCategorySelect(alInfo)
                                            setCardSelected("")
                                            setSearchInput("")
                                        }}
                                    >
                                        {alInfo}
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className='w-52 relative mb-5 '>
                        <div onClick={() =>{
                             setOpenBank(!openBank)
                            setOpenCat(false)
                             }} className={`flex items-center justify-between text-lg  bg-slate-100 rounded-sm px-2 ${!bankname && "text-gray-600"}`}>

                            <p className=''>{bankname
                                ? bankname?.length > 15
                                    ? bankname?.substring(0, 15) + "..."
                                    : bankname
                                : "Bank"}</p>
                            <p className=''>< AiFillCaretDown size={20} className={`${openBank && "rotate-180"}`} /></p>
                        </div>
                        <ul className={`absolute bg-slate-100 w-full top-10 rounded-sm text-left overflow-y-auto ${openBank ? "z-20 max-h-52 pt-0" : " max-h-0"
                            }`}>

                            {
                                //  allInfos.map((alInfo, i) => (
                                uniqueBank.map((alInfo, i) => (
                                    // Bappy is okkkkk
                                    <li key={i}
                                        className={`hover:bg-sky-300 hover:text-white text-sm cursor-pointer px-4 py-2
                                 ${alInfo?.toLowerCase() === bankname?.toLowerCase() &&
                                            "bg-sky-400 text-white"
                                            }`}
                                        onClick={() => {
                                            setBankname(alInfo);
                                            setOpenBank(false)
                                            handleBankSelect(alInfo)
                                            setCardSelected("")
                                            setSearchInput("")
                                        }}
                                    >
                                        {alInfo}
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    {/* <div className='flex items-center justify-between text-lg w-52 bg-slate-200 rounded-md px-2'>
                        <p className=''>Bank</p>
                        <p className=''><AiFillCaretDown size={20} /></p>
                    </div> */}
                    <div className='mb-5  flex items-center justify-between bg-slate-100 rounded-md w-52 text-lg px-2'>
                    <a href="#rvw"><p className=''>Review</p></a>
                    <a href="#rvw"><MdOutlineReviews size={20}></MdOutlineReviews></a>
                        
                    </div>
                    {/* <div  className='mb-5  flex items-center justify-between text-lg bg-slate-200 rounded-md w-52 px-2'> */}
                        {/* <p className=''>Search</p>
                        <p><FiSearch size={20}></FiSearch></p> */}
                       <div> 
                        <input type="text" value={searchInput} placeholder='Search...' className=' mb-5 text-lg bg-slate-100 rounded-md w-52 px-2'
                        onChange={(e) => {
                            setSearchInput(e.target.value)
                            setCardSelected("")
                            setActiveCard(null)
                            setBankname("")
                            setSelected("")
                            setSelectedBank(null);
                            setSelectedCategory(null);
                        }}
                        onFocus={()=>{
                            setOpenBank(false)
                            setOpenCat(false)
                        }}
                        />
                       </div>
                    {/* </div> */}
                    
                </div>
            </div>


            {/* <Card allCards={allInfos} handleCard = {}></Card> */}
            <div className=' bg-[#eeeded] py-4'>
                <div className="wrapper">
                    <div className="card-grp flex flex-col sm:flex-row items-center gap-10 justify-center  font-medium ">
                        {uniqueCards.map((card, i) => (
                            <button key={i}
                            //  onClick={() => setCardSelected(card)}
                             onClick={() => handleCardSelected(card)}
                                className={`border-2 rounded-md p-4 ${
                                    activeCard === card ? 'bg-[#6499E9] text-white' : 'bg-[#9EDDFF]'
                                } hover:bg-[#6499E9]`}>{card}</button>
                        ))}
                    </div>
                </div>
            </div>
            <TopBanner></TopBanner>
            
            
                
                {selectedCategory && <CategoryComponent allInfos={allInfos} selected={selected} cardSelected={cardSelected} />}
                {selectedBank && <BankComponent allInfos={allInfos}  selected={bankname} cardSelected={cardSelected}/>}
                {searchInput && <SearchComponent allInfos={allInfos} searchInput={searchInput} cardSelected={cardSelected}/>}

                {!anySelect && <HotOffer/>}
        </div>
    );
};

export default Selections;