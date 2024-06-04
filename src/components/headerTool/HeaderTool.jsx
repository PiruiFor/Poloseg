import React, { useState, useContext, useEffect} from 'react';
import "./HeaderTool.css";
import { UserContext } from '../../context/userContext';
import { userType } from '../../context/userTypes';
import Swal from 'sweetalert2'

export const HeaderTool = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { state, stateDispatch } = useContext(UserContext);

  const handleDropdownClicked = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubMenuClicked = (menu) => {
    const subMenu = document.getElementById(menu);
    const subMenuList = document.getElementsByClassName("sub-menu");

    for (let s of subMenuList) {
      s.classList.remove("open");
    }

    if (subMenu) {
      subMenu.classList.add("open");
    }

    const mainMenu = document.getElementById("menu-inner");
    mainMenu.classList.toggle("open");
  };

  const handleLogout = () => {
    stateDispatch({
      type: userType.logOut
    })
    Swal.fire({
      icon: 'success',
      title: 'Has cerrado sesion'
    })
  };


  return (
    <nav className='headerTool'>
      <div className={`dropdown ${dropdownOpen ? 'open' : ''}`} id="dropdown">
        <button onClick={handleDropdownClicked}>
          <span className="material-symbols-outlined"> account_circle </span>
          {state.nombre}
          <span className="chevron material-symbols-outlined"> expand_more </span>
        </button>
        <div className="menu">
          <div id="menu-inner" className="menu-inner">
            <div className="main-menu">
              <button onClick={handleLogout}>
                <span className="material-symbols-outlined"> logout </span>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

