import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
import aamra from '../../assets/images/aamra2-removebg-preview.png'
// import aamra from '../../assets/images/aamra-removebg-preview.png'

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16">
      <div className='h-12'>
        <img src={aamra} alt="" className='bg-white rounded-sm h-full w-[150px] ' />
      </div>
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;