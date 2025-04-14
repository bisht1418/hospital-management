"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Calendar,
  Layers,
  Activity,
  DollarSign,
  LogOut,
  Menu,
  X,
  FileText,
  ShoppingCart,
  CreditCard,
  Stethoscope,
  HelpCircle,
} from "lucide-react"
import { useDispatch } from "react-redux"
import { logout } from "@/lib/store/slices/auth-slice"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    {
      name: "Clinic",
      icon: Stethoscope,
      children: [
        { name: "Reservations", href: "/reservations", icon: Calendar },
        { name: "Patients", href: "/patients", icon: Users },
        { name: "Treatments", href: "/treatments", icon: Activity },
        { name: "Staff List", href: "/staff", icon: Users },
      ],
    },
    {
      name: "Finance",
      icon: DollarSign,
      children: [
        { name: "Accounts", href: "/accounts", icon: FileText },
        { name: "Sales", href: "/sales", icon: DollarSign },
        { name: "Purchases", href: "/purchases", icon: ShoppingCart },
        { name: "Payment Method", href: "/payment-method", icon: CreditCard },
      ],
    },
    {
      name: "Physical Asset",
      icon: Layers,
      children: [
        { name: "Stocks", href: "/stocks", icon: Layers },
        { name: "Peripherals", href: "/peripherals", icon: Layers },
      ],
    },
    { name: "Report", href: "/report", icon: FileText },
    { name: "Customer Support", href: "/support", icon: HelpCircle },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <>
      <div className="lg:hidden">
        <button
          type="button"
          className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 flex z-40 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } transition-opacity ease-linear duration-300`}
      >
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-opacity ease-linear duration-300`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-white ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition ease-in-out duration-300 transform`}
        >
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <span className="text-xl font-bold text-blue-600">MediCare</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`${
                            isActive(child.href)
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                          onClick={() => setIsOpen(false)}
                        >
                          <child.icon
                            className={`${
                              isActive(child.href) ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                            } mr-4 flex-shrink-0 h-6 w-6`}
                            aria-hidden="true"
                          />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        isActive(item.href)
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon
                        className={`${
                          isActive(item.href) ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                        } mr-4 flex-shrink-0 h-6 w-6`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button onClick={handleLogout} className="flex-shrink-0 group block w-full flex items-center">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Log out</p>
                </div>
                <LogOut className="ml-auto h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-white border-b border-gray-200">
              <span className="text-xl font-bold text-blue-600">MediCare</span>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-1">
                        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {item.name}
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`${
                              isActive(child.href)
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                          >
                            <child.icon
                              className={`${
                                isActive(child.href) ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                              } mr-3 flex-shrink-0 h-5 w-5`}
                              aria-hidden="true"
                            />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`${
                          isActive(item.href)
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                      >
                        <item.icon
                          className={`${
                            isActive(item.href) ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                          } mr-3 flex-shrink-0 h-5 w-5`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <button onClick={handleLogout} className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Log out</p>
                  </div>
                  <LogOut className="ml-auto h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
