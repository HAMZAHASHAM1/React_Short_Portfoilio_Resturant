import React, { useState } from 'react';
import "./style.css";
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList=[...new Set(Menu.map((curElem)=>{
  return curElem.category;
})),
"ALL",
];
console.log(uniqueList);
const Resturant = () => {
   
    const [menuData,setMenuData]=useState(Menu);
    const[menuList,setMenuList]=useState(uniqueList);
    const filterItem=(category)=>{
      if(category==="ALL"){
        setMenuData(Menu);
        return;
      }
const updatedList=Menu.filter((curElem)=>{
  return curElem.category===category;
});
  setMenuData(updatedList);
};
    
    // console.log(menuData);
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData}/>
    </>
  );

  }
export default Resturant;