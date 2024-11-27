import React from "react";
import $ from "jquery";
import Swal from 'sweetalert2';
import axios from 'axios';

const Nav = () => {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('http://localhost:8000/api/logout').then(res=>{
          localStorage.removeItem('email')
          localStorage.removeItem('name')
          localStorage.removeItem('phone')
          localStorage.removeItem('photo')
          localStorage.removeItem('token')
          window.location.reload()
        }).catch(errors=>{

        })
      }
    });
  };

  const handleSidebar = () => {
    $("body").toggleClass("sb-sidenav-toggled");
  };
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand ps-3" href="index.html">
        InvenPOS
      </a>
      {/* Sidebar Toggle */}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
        onClick={handleSidebar}
      >
        <i className="fas fa-bars"></i>
      </button>
      {/* Navbar */}
      <ul className="navbar-nav ms-auto  me-3 me-lg-4">
        <p
          className="text-white"
          style={{ margin: "0", padding: "0", alignContent: "center" }}
        >
          Admin
        </p>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw"></i>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown-item" href="#!">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Activity Log
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
