import React, { useEffect, useState } from "react";
import user from "../assets/avatar-1.png";
import '../styles/side_menu.css'
import MenuItem from "./MenuItem";
import UserService from "../../services/UserService";
import RenderOnRole from "../RenderOnRole";
import imageSmiley from '../assets/logo/smileylogo.png';

// import { BehaviorSubject } from "rxjs";

// export const jwt = new BehaviorSubject(null);
// export const username = new BehaviorSubject(null);





/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Home", 
    exact: true,
    to: "/",
    iconClassName: "bi bi-house-fill",
  },
  {
    name: "Services",
    exact: true,
    to: `/services`,
    iconClassName: "bi bi-list",
    subMenus: [
      { name: "Tasks", to: "/service_1/Service1Content" },
      { name: "Products", to: "/service_2/Service2Content" },
    ],
  },
  { name: "secret", to: `/secret`, iconClassName: "bi bi-vector-pen" },


  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

export const menuItemsAdmin = [
  {
    name: "Admin",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "ServicesAdmin",
    exact: true,
    to: `/services`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Service-1", to: "/service_1/Service1Content" },
      { name: "Service-2", to: "/service_2/Service2Content" },
    ],
  },
  { name: "secret", to: `/secret`, iconClassName: "bi bi-vector-pen" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
  useEffect(() => {
    let menuItemsAdmin = document.querySelectorAll(".menu-item");
    menuItemsAdmin.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItemsAdmin.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          {/* <img src={logo} alt="webscript" /> */}
          <img class="imageSmiley" src={imageSmiley} alt="image description"></img>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller search" >
        <button className="search-btn">
          <i class="bi bi-search search"></i>
        </button>

        <input type="text" className="search" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">

      
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))},
          </ul>
         

         <RenderOnRole roles={['admin']}>
         <ul>
          {menuItemsAdmin.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          </ul>
          </RenderOnRole>

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}


        {/* </ul> */}
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Uteam</h5>
          <p className="navbar-text navbar-right" style={{ marginRight: 15 }}>
          Signed in as {UserService.getUsername()}
        </p>

        </div>
      </div>
      <div>
      <button className="btn btn-success navbar-btn navbar-right mt-10" style={{ marginRight: 0 }} onClick={() =>  UserService.doLogout()}>
          Logout
        </button>
      </div>

      


    </div>
  
    

    
  );
};




  //  localStorage.setItem('name', `${UserService.getUsername()}`);

// username.next(`Bearer ${UserService.getUsername()}`);
// username.next(`Signed in as ${UserService.getUsername()}`);

// const h = UserService.getUsername()

// console.log(h)


// console.log(`Bearer ${UserService.getUsername()}`)



// username.subscribe(console.log)

export default SideMenu;
