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
import NewCategory from '../NewCategory/NewCategory';


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
    //--//
    const [cardcategorySelected, setCardcategorySelected] = useState(null);
    const [typeofcardSelected, setTypeofcardSelected] = useState(null);
    //---//
    const [searchInput, setSearchInput] = useState("");
    const [activeCard, setActiveCard] = useState(null);

    const uniqueCardtype = [...new Set(allInfos.map(item => item.cardtype))];
    const uniqueCategorys = [...new Set(allInfos.map(item => item.category))];
    const uniqueBank = [...new Set(allInfos.map(item => item.bankfullname))];
    const uniqueTypeofcard = [...new Set(allInfos.map(item => item.typeofcard))];
    const uniqueCardcategory = [...new Set(allInfos.map(item => item.cardcategory))];

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                setAllInfos(data);
            });
    }, []);

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
        setSearchInput(null)
        setActiveCard(null);
    };
    const handleBankSelect = (cat) => {
        setSelectedBank(cat);
        setSearchInput(null)
        setActiveCard(null);
    };
    const handleCardSelected = (card) => {
        // setCardSelected(card);
        // setActiveCard(card);
        // console.log(setCardSelected)
        // console.log(setActiveCard)
        if (cardSelected === card) {
            setCardSelected(null); // Deselect if already selected
          } else {
            setCardSelected(card); // Select if not selected
          }
    }

    const handleTypeofcardSelected = (card)=>{
        if(typeofcardSelected === card){
            setTypeofcardSelected(null);
        }
        else{
            setTypeofcardSelected(card)
        }
    }
    const handleCardCategorySelected = (card) => {
        // setCardcategorySelected(card);
        // setCardSelected(card);
        // setActiveCard(card);
        if (cardcategorySelected === card) {
            setCardcategorySelected(null); // Deselect if already selected
          } else {
            setCardcategorySelected(card); // Select if not selected
          }
        
    }


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // --End For sticky and scroll ---

    const anySelect = searchInput || (selectedBank || selectedCategory)

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
                                            {/* Button content goes here */}

                                            <RxCrossCircled size={20} />
                                        </button>
                                        <p onClick={() => {
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

                                            setSelected(alInfo);
                                            setOpenCat(false)
                                            handleCategorySelect(alInfo)
                                            setCardSelected("")
                                            setSearchInput("")
                                            // scrollToSection('section1')
                                            window.scrollTo({ top: 870, behavior: "smooth" })

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
                            onClick={() => {
                                setOpenBank(!openBank)
                                setOpenCat(false)
                            }}
                            className={` flex items-center justify-between text-lg  bg-slate-100 rounded-sm px-1 ${!bankname && "text-gray-600"}`}>


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
                                            {/* Button content goes here */}

                                            <RxCrossCircled size={20} />
                                        </button>
                                        <p onClick={() => {
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
                                            window.scrollTo({ top: 870, behavior: "smooth" })
                                        }}
                                    >
                                        {alInfo}
                                    </li>
                                ))
                            }
                        </ul>

                    </div>

                    <div onClick={() => { scrollToSection('section3') }} className='mb-5  flex items-center justify-between bg-slate-100 rounded-md w-52 text-lg px-2 text-gray-600 cursor-pointer'>
                        <p className=''>Review</p>
                        <MdOutlineReviews size={20}></MdOutlineReviews>

                    </div>
                    <div className='flex justify-center items-center mb-5 bg-white px-2 rounded-md text-gray-600'>
                        <FiSearch className=' text-lg mr-1 inline-block' />
                        <input type="text" value={searchInput} placeholder='Enter location or name' className=' text-lg outline-none '
                            onChange={(e) => {
                                setSearchInput(e.target.value)
                                setCardSelected("")
                                setActiveCard(null)
                                setBankname("")
                                setSelected("")
                                setSelectedBank(null);
                                setSelectedCategory(null);
                                window.scrollTo({ top: 870, behavior: "smooth" })
                            }}
                            onFocus={() => {
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
                            {uniqueCardtype.map((card, i) => (
                                !anySelect ? (
                                    <button disabled key={i}
                                        //  onClick={() => setCardSelected(card)}
                                        onClick={() => handleCardSelected(card)}
                                        className={`border-2 rounded-3xl px-6 py-2 ${cardSelected === card ? 'bg-[#6499E9] text-white cursor-pointer' : 'bg-[#9EDDFF]'
                                            } hover:bg-[#6499E9]`}>{card}
                                    </button>
                                ) : (
                                    <button key={i}
                                        //  onClick={() => setCardSelected(card)}
                                        onClick={() => handleCardSelected(card)}
                                        className={`border-2 rounded-3xl px-6 py-2 cursor-pointer ${cardSelected === card ? 'bg-[#6499E9] text-white' : 'bg-[#9EDDFF]'
                                            } hover:bg-[#6499E9]`}>{card}
                                    </button>
                                )


                            ))}

                        </div>

                    </div>
                </div>
                {/* new card filter section start */}
                <div className='flex items-center justify-center  gap-10 '>
                    <div className='flex flex-row  items-center gap-10 justify-center  font-normal'>
                        {/* <button
                            className='border-2 rounded-3xl px-6 py-2 cursor-pointer  text-black bg-[#9EDDFF]
                                             hover:bg-[#6499E9]'>Visa Card</button>
                        <button className='border-2 rounded-3xl px-6 py-2 cursor-pointer  text-black bg-[#9EDDFF]
                                             hover:bg-[#6499E9]'>MasterCard</button> */}
                       {uniqueTypeofcard.map((card, i) => (
                                !anySelect ? (
                                    <button disabled key={i}
                                        //  onClick={() => setCardSelected(card)}
                                        onClick={() => handleTypeofcardSelected(card)}
                                        className={` border-2 rounded-3xl px-6 py-2 ${typeofcardSelected === card ? 'bg-[#6499E9] text-white cursor-pointer' : 'bg-[#9EDDFF]'
                                            } hover:bg-[#6499E9]`}>{card}
                                    </button>
                                ) : (
                                    <button key={i}
                                        //  onClick={() => setCardSelected(card)}
                                        onClick={() => handleCardSelected(card)}
                                        className={`border-2 rounded-3xl px-6 py-2 cursor-pointer ${typeofcardSelected === card ? 'bg-[#6499E9] text-white' : 'bg-[#9EDDFF]'
                                            } hover:bg-[#6499E9]`}>{card}
                                    </button>
                                )


                            ))}                      
                    </div>
                    <div className='flex flex-row  items-center gap-10 justify-center  font-normal'>
                    {uniqueCardcategory.map((card, i) => (
                                !anySelect ? (
                                    <button disabled key={i}
                                        //  onClick={() => setCardSelected(card)}
                                        onClick={() => handleCardCategorySelected(card)}
                                        className={` border-2 rounded-3xl px-6 py-2 ${cardcategorySelected === card ? 'bg-[#6499E9] text-white cursor-pointer' : 'bg-[#9EDDFF]'
                                            } hover:bg-[#6499E9]`}>{card}
                                    </button>
                                ) : (
                                    <button key={i}
                                        //  onClick={() => setCardSelected(card)}
                                        onClick={() => handleCardCategorySelected(card)}
                                        className={`border-2 rounded-3xl px-6 py-2 cursor-pointer ${cardcategorySelected === card ? 'bg-[#6499E9] text-white' : 'bg-[#9EDDFF]'
                                            } hover:bg-[#6499E9]`}>{card}
                                    </button>
                                )


                            ))} 
                    </div>
                </div>
            </div >


            {/* <Card allCards={allInfos} handleCard = {}></Card> */}

            < TopBanner ></TopBanner >

            {/* {(!isSelectionMade || !anySelect) && <HotOffer />} */}
            {
                (selectedCategory || selectedBank) && 
                    // <CategoryComponent
                    <NewCategory
                        //   allInfos={filteredData}
                        allInfos={allInfos}
                        selected={selected}
                        bankname={bankname}
                        cardSelected={cardSelected}
                        cardcategorySelected={cardcategorySelected}
                        typeofcardSelected={typeofcardSelected}
                        anySelect={anySelect}
                    />
                
            }

            {/* {(selectedCategory || selectedBank) && <CategoryComponent  allInfos={allInfos} selected={selected}  bankname={bankname}  cardSelected={cardSelected} />} */}
            {/* {selectedBank     && <BankComponent     allInfos={allInfos} selected={bankname}       cardSelected={cardSelected}/>} */}
            {searchInput && <SearchComponent allInfos={allInfos} searchInput={searchInput} cardSelected={cardSelected} />}

            {/* {!anySelect && <HotOffer/>} */}
            {!anySelect && <HotOffer />}
        </div >
    );
};

export default Selections;