import { useState } from "react";
import Mycontext from "./Context";
import Hamburger from "./Hamburger";
import SideMenu from "./SideMenu";

function SideMenuContainer() {
    const [isHover, setIsHover] = useState(null) 
    return (
        <Mycontext.Provider value={{isHover,setIsHover}}>
            <Hamburger></Hamburger>
            <SideMenu></SideMenu>
        </Mycontext.Provider>
    );
}

export default SideMenuContainer;