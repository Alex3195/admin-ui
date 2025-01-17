import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  BuildingOffice2Icon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  SignalIcon,
  UserGroupIcon,
  XMarkIcon
} from "@heroicons/react/20/solid";
import {
  HomeIcon
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { withTranslation } from "react-i18next";
import { useDispatch } from "react-redux/es/exports";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../features/userSlice";
import DropdownLanguage from "./DropdownLanguage";
const navigation = [
  { name: "sidebar_menu_dashboard", to: "/", icon: HomeIcon },
  { name: "sidebar_menu_department", to: "/department", icon: BuildingOffice2Icon },
  { name: "sidebar_menu_project", to: "/project", icon: PresentationChartBarIcon },
  { name: "sidebar_menu_employee", to: "/employee", icon: UserGroupIcon },
  { name: "sidebar_menu_meeting", to: "/meeting", icon: SignalIcon },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Log out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar({ t, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigations, setNavigations] = useState(navigation);
  const dispatch = useDispatch();
  const location = useLocation();
  const handleClick = (item) => {
    let data = navigations.map((i) => {
      if (i.name === item.name) {
        return { name: i.name, to: i.to, icon: i.icon };
      } else {
        return { name: i.name, to: i.to, icon: i.icon };
      }
    });
    setNavigations(data);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 pt-2 -mr-12">
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex items-center flex-shrink-0 px-4">
                    <img
                      className="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Construction"
                    />
                    <h2 className="pl-2 text-lg font-extrabold text-white">
                      WorkSpace
                    </h2>
                  </div>
                  <div className="flex-1 h-0 mt-5 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {navigations.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => handleClick(item)}
                          className={classNames(
                            item.to === location.pathname
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.to === location.pathname
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {t(`${item.name}`)}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 min-h-0 bg-gray-800">
            <div className="flex items-center flex-shrink-0 h-16 px-4 bg-gray-900">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Construction"
              />
              <h2 className="pl-2 text-lg font-extrabold text-white">
                WorkSpace
              </h2>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigations.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => handleClick(item)}
                    className={classNames(
                      item.to === location.pathname
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.to === location.pathname
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {/* {} */}
                    {t(`${item.name}`)}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="flex justify-between flex-1 px-4">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center ml-4 md:ml-6">
                <DropdownLanguage />

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item
                          key={item.name}
                          onClick={() => {
                            if (item.name === "Log out") {
                              dispatch(logout());
                            }
                          }}
                        >
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
export default withTranslation()(Sidebar);
