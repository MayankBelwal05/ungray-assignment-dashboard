import React from 'react'
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100 navbar-cont">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none  "
              >
                <span className="fs-5 d-none d-sm-inline font-bold">߷ Salesway</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link to="" href="#" className="nav-link align-middle px-0">
                    <i className="bi bi-gear fs-2x text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Settings
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="bi bi-person-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark ">
                      Team
                    </span>{" "}
                  </Link>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="#" className="nav-link px-0 text-dark">
                        {" "}
                        <span className="d-none d-sm-inline text-dark">
                          Menu
                        </span>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle dashboard-navbar">
                    <i className="bi bi-grid-1x2-fill text-dark color-blue"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark font-semibold">
                      Dashboard
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle "
                  >
                    <i className="bi bi-bar-chart-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Campaigns
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="bi bi-diagram-3-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Flows
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="bi bi-plug-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Integrations
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Customers
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                     Logout
                    </span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
              <Link
          to="/" 
          className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="d-none d-sm-inline mx-1 font-bold">Tom Wang</span>
        </Link>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  )
}
