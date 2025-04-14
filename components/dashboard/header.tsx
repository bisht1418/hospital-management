"use client"

import { useState } from "react"
import Link from "next/link"
import { useSelector } from "react-redux"
import { Bell, Search, User } from "lucide-react"
import type { RootState } from "@/lib/store"

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-lg font-semibold">Hospital Management System</h1>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">{/* Mobile menu button */}</div>
          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            {/* Notifications dropdown */}
            <div className="relative ml-4 flex-shrink-0">
              <div>
                <button
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  id="notifications-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen)
                    setIsProfileOpen(false)
                  }}
                >
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6 text-gray-400 hover:text-gray-500" aria-hidden="true" />
                </button>
              </div>

              {isNotificationsOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="notifications-menu"
                >
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Notifications</h3>
                      <button className="text-blue-600 text-xs">Mark all as read</button>
                    </div>
                  </div>
                  <div className="max-h-72 overflow-y-auto">
                    <Link href="#" className="block px-4 py-3 hover:bg-gray-50 transition ease-in-out duration-150">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <User className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">New patient registered</p>
                          <p className="text-sm text-gray-500">John Doe has registered as a new patient</p>
                          <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="#" className="block px-4 py-3 hover:bg-gray-50 transition ease-in-out duration-150">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                            <Bell className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Low stock alert</p>
                          <p className="text-sm text-gray-500">Paracetamol stock is running low</p>
                          <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="#" className="block px-4 py-3 hover:bg-gray-50 transition ease-in-out duration-150">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <Bell className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Appointment reminder</p>
                          <p className="text-sm text-gray-500">Dr. Smith has 5 appointments tomorrow</p>
                          <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="px-4 py-2 text-sm text-center border-t">
                    <Link href="#" className="text-blue-600 hover:text-blue-500">
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Profile dropdown */}
            <div className="relative ml-4 flex-shrink-0">
              <div>
                <button
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen)
                    setIsNotificationsOpen(false)
                  }}
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {user?.name?.charAt(0) || "U"}
                  </div>
                </button>
              </div>

              {isProfileOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <p className="font-medium">{user?.name || "User"}</p>
                    <p className="text-gray-500">{user?.email || "user@example.com"}</p>
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </Link>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
