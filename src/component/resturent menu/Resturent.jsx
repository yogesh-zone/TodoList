import React ,{useState} from 'react';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import './Style.css';


const uniqueList  =[ ...new Set(Menu.map((curElm) => curElm.category)),"All"];
const Resturent = () => {
    const [menuList,setMenuList] = useState(uniqueList);
    const [menuData,setMenuData] = useState(Menu);

    const filterItem = ((category) => {
         if(category==="All")
         {
             setMenuData(Menu);
             return;
         }
         const updatedList = Menu.filter((curElm) =>
         {
             return category === curElm.category;
         });
         setMenuData(updatedList);
        });
    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
            
        </>

    )
}

export default Resturent

