import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toNonAccentVietnamese from "../../components/accentVietnamese";
import {
  setDataByCategory,
  setData,
} from "../../redux/features/listMusicSlice";
import { getApi } from "../../pages/home/Home";
import { useRef } from "react";
function Navbar() {
  let [data, setData] = useState([]);
  let [categorySelector, setCategorySelector] = useState("");
  const dispatch = useDispatch();
  const dataPrev = useRef();
  dataPrev.current = data;
  const handleCLick = async (e) => {
    let valueSearch = e.target.innerHTML;
    await getApi()
      .then((res) => {
        setData(res.data.list);
      })
      .catch((e) => console.log(e.message));
    let categorySelect = toNonAccentVietnamese(valueSearch).toLowerCase();
    setCategorySelector(categorySelect);
  };
  console.log(data);
  useEffect(() => {
    let dataNew = [];
    for (let e of data) {
      let category = toNonAccentVietnamese(e.category).toLowerCase();
      if (category === categorySelector) {
        dataNew.push(e);
      } else {
        dispatch(setDataByCategory(data));
      }
    }
    if (dataNew.length > 0) {
      dispatch(setDataByCategory(dataNew));
    }
  }, [categorySelector]);
  return (
    <>
      <nav className="bg-primary px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-primary-page-text">
              Không chỉ là âm nhạc mà còn là Mucsic
            </span>
          </a>

          <div className="flex md:order-2">
           

            <button
              type="button"
              className="text-white bg-btn-primary hover:bg-opacity focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 w-112"
            >
              Đăng nhập
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              className="text-white bg-btn-primary hover:bg-opacity focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 mr-10 w-112"
            >
              Đăng ký
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  onClick={handleCLick}
                  href="#"
                  className="block py-2 pr-4 pl-3  md:p-0 text-white text-category"
                  aria-current="page"
                >
                  Ballad
                </button>
              </li>
              <li>
                <button
                  onClick={handleCLick}
                  href="#"
                  className="block py-2 pr-4 pl-3 md:p-0 text-white text-category"
                >
                  Bolero
                </button>
              </li>
              <li>
                <button
                  onClick={handleCLick}
                  href="#"
                  className="block py-2 pr-4 pl-3 md:p-0 text-white text-category"
                >
                  Rap
                </button>
              </li>
              <li>
                <button
                  onClick={handleCLick}
                  href="#"
                  className="block py-2 pr-4 pl-3 md:p-0 text-white text-category"
                >
                  Home
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
