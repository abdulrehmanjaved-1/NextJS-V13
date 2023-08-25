import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link'

const Nav = () => {
  return (
    <>
  <nav className="bg-black border-black-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="https://flowbite.com" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
      <div className="flex items-center">
        
        <LogoutLink
         
          className="text-xl  text-blue-600 dark:text-blue-500 hover:underline"
        >
          Logout
        </LogoutLink>
      </div>
    </div>
  </nav>
  <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
      <div className="flex items-center">
        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <li>
            <Link
              href="/dashboard"
              className="text-gray-900 dark:text-white hover:underline"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/add-new-list"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Next Day
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Features
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>

  )
}

export default Nav