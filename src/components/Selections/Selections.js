import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import TopBanner from '../TopBanner/TopBanner';
import CategoryComponent from '../CategoryComponent/CategoryComponent';
import BankComponent from '../BankComponent/BankComponent';
import HotOffer from '../HotOffer/HotOffer';
import SearchComponent from '../SearchComponent/SearchComponent';
// import { Users } from '../../../public/data.json
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
    const [cardSelected, setCardSelected] = useState(false); //null to false
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
        // setBankname("")
        // setSelectedBank(selectedBank);
        setSearchInput(null)
        // setSearchInput(activeCard)
        setActiveCard(null);
        };
    const handleBankSelect = (cat) => {
        setSelectedBank(cat);
        // setSelected("")
        // setSelectedCategory(null);
        setSearchInput(null)
        // setActiveCard(null);
        setActiveCard(null);
        // localStorage.setItem(cat);
        };
    const handleCardSelected = (card) =>{
        setCardSelected(card); //setCardSelected(card)
        setActiveCard(card);
        console.log(setCardSelected)
        console.log(setActiveCard)
    }  
    

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    // --End For sticky and scroll ---
    // const anySelect = selectedCategory || selectedBank || searchInput;
    // const bothEmpty = setSelectedCategory(null) && setSelectedBank(null);
    // const isSelectionMade =
    // selectedCategory !== null || selectedBank !== null || cardSelected !== null;
    const anySelect =  searchInput ||(selectedBank || selectedCategory)
    // const empty = ()=> setSelectedCategory(false) && setSelectedBank(false);
    
    return (
        <div>
            <div className='mx-auto w-full px-4 md:px-10 py-2 md:py-5  bg-slate-200 sticky top-16 z-30'>
                {/* flex flex-col md:flex-cols-2 lg:flex-row   justify-between items-center */}
                <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center content-center  font-normal">
                    <div className='w-52 relative mb-5 cursor-pointer'>
                        <div onClick={() => {
                            setOpenCat(!openCat)
                            setOpenBank(false)
                        }} className={`flex items-center justify-between text-lg  bg-slate-100 rounded-sm px-2 ${!selected && "text-gray-600"}`}>

                            {/* <p className=''>{selected
                                ? selected?.length > 15
                                    ? selected?.substring(0, 15) + "..."
                                    : selected
                                : "Category"}</p> */}

                            {/* ---- Start New button condition code  --- */}
                            {selected ? ( // Checking bankname existence
            <>
                <div className='flex '>
                <button onClick={(e) => {
                    
                        e.stopPropagation(); // Prevent event propagation to the parent div
                        setSelectedCategory(false); // Set setOpenBank to false when the button is clicked
                        setSelected("")
                        setActiveCard(null);
                        
                        setCardSelected(null)
                    }}
                    className='mr-1  hover:text-red-600 '>
                    {/* Your button content goes here */}
                    {/* For example: */}
                    <RxCrossCircled size={20} />
                </button>
                <p onClick={() =>{
                             setOpenBank(!openBank)
                            setOpenCat(false)
                             }}
                              className=''>
                 
                    {/* Displaying bankname with an ellipsis if its length exceeds 15 characters */}
                    {selected?.length > 15 ? `${selected?.substring(0, 15)}...` : selected}
                </p>
                </div>
            </>
        ) : (
            <p
            className=''>Category</p>
        )}
                            {/* ---- End New button condition code  --- */}

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
                                            // scrollToSection('section1')
                                            window.scrollTo({top: 870, behavior:"smooth"})
                                            
                                        }}
                                    >
                                        {alInfo}
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className='w-52 relative mb-5 cursor-pointer'>
                        <div 
                        onClick={() =>{
                             setOpenBank(!openBank)
                            setOpenCat(false)
                             }} 
                             className={` flex items-center justify-between text-lg  bg-slate-100 rounded-sm px-1 ${!bankname && "text-gray-600"}`}>

                            {/* <p className=''>{bankname
                                ? bankname?.length > 15
                                    ?  bankname?.substring(0, 15) + "..."
                                    : bankname
                                : "Bank"}</p> */}
                 {/*---- start New button condition code  ---*/}
                            {bankname ? ( // Checking bankname existence
            <>
                <div className='flex'>
                <button onClick={(e) => {
                        e.stopPropagation(); // Prevent event propagation to the parent div
                        setOpenBank(false); // Set setOpenBank to false when the button is clicked
                        setBankname('')
                        setSelectedBank(false)
                        setActiveCard(null);
                        setCardSelected(null)
                    }}
                className='mr-1 hover:text-red-600'>
                    {/* Your button content goes here */}
                    {/* For example: */}
                    <RxCrossCircled size={20} />
                </button>
                <p onClick={() =>{
                             setOpenBank(!openBank)
                            setOpenCat(false)
                            // setSelectedBank('')
                             }}
                              className=''>
                 
                    {/* Displaying bankname with an ellipsis if its length exceeds 15 characters */}
                    {bankname?.length > 15 ? `${bankname?.substring(0, 15)}...` : bankname}
                </p>
                </div>
            </>
        ) : (
            <p
            className=''>Bank</p>
        )}
                            {/* End New button condition code  */}

                            <p className=''>< AiFillCaretDown size={20} className={`${openBank && "rotate-180"}`} /></p>
                        </div>
                        <ul className={`absolute bg-slate-100 w-full top-10 rounded-sm text-left overflow-y-auto ${openBank ? "z-40 max-h-52 pt-0" : " max-h-0"
                            }`}>

                            {
                                
                                uniqueBank.map((alInfo, i) => (
                                    
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
                                            window.scrollTo({top: 870, behavior:"smooth"})
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
                    <div onClick={() =>{scrollToSection('section3')}} className='mb-5  flex items-center justify-between bg-slate-100 rounded-md w-52 text-lg px-2 text-gray-600 cursor-pointer'>
                    <p className=''>Review</p>
                    <MdOutlineReviews size={20}></MdOutlineReviews>
                        
                    </div>
                    {/* <div  className='mb-5  flex items-center justify-between text-lg bg-slate-200 rounded-md w-52 px-2'> */}
                        {/* <p className=''>Search</p>
                        <p><FiSearch size={20}></FiSearch></p> */}
                       <div className='flex justify-center items-center mb-5 bg-white px-2 rounded-md text-gray-600'> 
                            <FiSearch  className=' text-lg mr-1 inline-block'/>
                         <input type="text" value={searchInput} placeholder='Enter location or name' className=' text-lg outline-none '
                            onChange={(e) => {
                            setSearchInput(e.target.value)
                            setCardSelected("")
                            setActiveCard(null)
                            setBankname("")
                            setSelected("")
                            setSelectedBank(null);
                            setSelectedCategory(null);
                            window.scrollTo({top: 870, behavior:"smooth"})
                            }}
                            onFocus={()=>{
                            setOpenBank(false)
                            setOpenCat(false)
                            }}
                            />
                        </div>
                    {/* </div> */}
                    
                </div>
                <div className=''>
                <div className="wrapper">
                    <div className="card-grp flex flex-row  items-center gap-10 justify-center  font-normal ">
                        {uniqueCards.map((card, i) => (
                            !anySelect ?(
                            <button disabled key={i}
                            //  onClick={() => setCardSelected(card)}
                             onClick={() => handleCardSelected(card)}
                                className={`border-2 rounded-3xl px-6 py-2 ${
                                    activeCard === card ? 'bg-[#6499E9] text-white cursor-pointer' : 'bg-[#9EDDFF]'
                                } hover:bg-[#6499E9]`}>{card}
                            </button>
                            ):(
                                <button  key={i}
                            //  onClick={() => setCardSelected(card)}
                             onClick={() => handleCardSelected(card)}
                                className={`border-2 rounded-3xl px-6 py-2 cursor-pointer ${
                                    activeCard === card ? 'bg-[#6499E9] text-white' : 'bg-[#9EDDFF]'
                                } hover:bg-[#6499E9]`}>{card}
                            </button>
                            )
                        ))}
                    </div>
                </div>
            </div>
            </div>


            {/* <Card allCards={allInfos} handleCard = {}></Card> */}
            
            <TopBanner></TopBanner>
            
            {/* {(!isSelectionMade || !anySelect) && <HotOffer />} */}
            {(selectedCategory || selectedBank) && (
        <CategoryComponent
        //   allInfos={filteredData}
            allInfos={allInfos}
          selected={selected}
          bankname={bankname}
          cardSelected={cardSelected}
          anySelect = {anySelect}
        />
      )}
                
                {/* {(selectedCategory || selectedBank) && <CategoryComponent  allInfos={allInfos} selected={selected}  bankname={bankname}  cardSelected={cardSelected} />} */}
                {/* {selectedBank     && <BankComponent     allInfos={allInfos} selected={bankname}       cardSelected={cardSelected}/>} */}
                {searchInput      &&  <SearchComponent  allInfos={allInfos} searchInput={searchInput} cardSelected={cardSelected}/>}

                {/* {!anySelect && <HotOffer/>} */}
                {!anySelect  && <HotOffer/>}
        </div>
    );
};

export default Selections;