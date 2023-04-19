import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  return (
    <>
      <div class="cd-container">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJ7pf6ZHaN6XpyNvezWsoDNzOgQreSXtxWfgDf_V11yeDqdJth5NPTlsfk7K0ErCyeN0&usqp=CAU"
              alt="" width="100px" height="" />
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" to="">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Lịch</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Tuyển Dụng</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/personnel">Nhân Sự</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Chấm Công</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Tiền Lương</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Nhiệm Vụ</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">KPI</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Giao việc</Link>
                </li>
              </ul>
            </div>
            <div>
              <lable type="button" class="btn-td btn-danger " data-bs-toggle="dropdown" aria-expanded="false"
                id="cutsten">
                <div className="minh">
                  <div class="metseg-hetage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="22"><path d="M12 1c3.681 0 7 2.565 7 6v4.539c0 .642.189 1.269.545 1.803l2.2 3.298A1.517 1.517 0 0 1 20.482 19H15.5a3.5 3.5 0 1 1-7 0H3.519a1.518 1.518 0 0 1-1.265-2.359l2.2-3.299A3.25 3.25 0 0 0 5 11.539V7c0-3.435 3.318-6 7-6ZM6.5 7v4.539a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298-.003.01.001.007.004.006.006.004.007.001h16.964l.007-.001.006-.004.004-.006.001-.006a.017.017 0 0 0-.003-.01l-2.199-3.299a4.753 4.753 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5S6.5 4.636 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="juste" viewBox="0 0 24 24" width="24"
                      id="cutsten" height="24">
                      <path
                        d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
                        class="">
                      </path>
                    </svg>
                  </div>
                </div>
              </lable>
              <ul class="dropdown-menu" id="name">
                <div class="name">
                  <div class="dsadasd">
                    <li><a class="dropdown-item" href="#">Tài Khoản</a></li>
                    <button id="changePassword" class="dropdown-item"   > Đổi mật khẩu</button>
                  </div>
                </div>
              </ul>
            </div>

            {/* <ChangePassWordModal isShowChangePassWord={isShowChangePassWord} /> */}
          </div>
        </nav>


      </div >
      <Outlet />
      <footer id="footer">
        <h1 class="text-center">ARODA</h1>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ab?</p>
        <div class="icons text-center">
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-google"></i>
          <i class="bx bxl-skype"></i>
          <i class="bx bxl-instagram"></i>
        </div>
        <div class="copyright text-center">
          &copy; Copyright <strong><span>ARODA</span></strong>. All Rights Reserved
        </div>
        <div class="credite text-center">
          Designed By <a href="#">SA Coding</a>
        </div>
      </footer>


    </>
  )
};
export default Layout;