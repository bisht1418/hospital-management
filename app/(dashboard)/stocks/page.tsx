"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Plus, ArrowUpDown, Check, Clock, AlertTriangle } from "lucide-react"
import { stocks } from "@/lib/data/stocks"

export default function StocksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredStocks, setFilteredStocks] = useState(stocks)
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [activeTab, setActiveTab] = useState("inventory")

  const inStockCount = stocks.filter((stock) => stock.status === "in-stock").length
  const lowStockCount = stocks.filter((stock) => stock.status === "low-stock").length
  const outOfStockCount = stocks.filter((stock) => stock.status === "out-of-stock").length

  useEffect(() => {
    let results = stocks.filter(
      (stock) =>
        stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.id.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (sortField) {
      results = [...results].sort((a, b) => {
        if (a[sortField as keyof typeof a] < b[sortField as keyof typeof b]) {
          return sortDirection === "asc" ? -1 : 1
        }
        if (a[sortField as keyof typeof a] > b[sortField as keyof typeof b]) {
          return sortDirection === "asc" ? 1 : -1
        }
        return 0
      })
    }

    setFilteredStocks(results)
  }, [searchTerm, sortField, sortDirection])

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const totalAssetValue = filteredStocks.reduce((sum, stock) => sum + stock.price * stock.quantity, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold">Stocks</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search stocks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="btn btn-primary btn-md flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Order Stock
          </button>
          <button className="btn btn-outline btn-md flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-gray-500">TOTAL ASSET VALUE</h2>
              <p className="text-3xl font-bold">${totalAssetValue.toLocaleString()}</p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-sm">In stock: {inStockCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="text-sm">Low stock: {lowStockCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="text-sm">Out of stock: {outOfStockCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b">
          <div className="flex">
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "inventory"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("inventory")}
            >
              Inventory
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "order-stock"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("order-stock")}
            >
              Order Stock
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("id")}
                >
                  <div className="flex items-center gap-1">
                    Order #
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center gap-1">
                    Name
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("quantity")}
                >
                  <div className="flex items-center gap-1">
                    Quantity
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("price")}
                >
                  <div className="flex items-center gap-1">
                    Price
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center gap-1">
                    Status
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("lastUpdated")}
                >
                  <div className="flex items-center gap-1">
                    Last Updated
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStocks.map((stock) => (
                <tr key={stock.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${stock.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        stock.status === "in-stock"
                          ? "bg-green-100 text-green-800"
                          : stock.status === "low-stock"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {stock.status === "in-stock" && <Check className="mr-1 h-3 w-3" />}
                      {stock.status === "low-stock" && <Clock className="mr-1 h-3 w-3" />}
                      {stock.status === "out-of-stock" && <AlertTriangle className="mr-1 h-3 w-3" />}
                      {stock.status === "in-stock"
                        ? "In Stock"
                        : stock.status === "low-stock"
                          ? "Low Stock"
                          : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(stock.lastUpdated).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                    <button className="text-blue-600 hover:text-blue-900">Order</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
