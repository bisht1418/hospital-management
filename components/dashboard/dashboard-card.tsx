import type React from "react"
import { ArrowDown, ArrowUp } from "lucide-react"

interface DashboardCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  trend?: string
  trendDirection?: "up" | "down"
}

export function DashboardCard({ title, value, icon, trend, trendDirection }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-blue-50 text-blue-600">{icon}</div>
        <div className="ml-5">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
          {trend && (
            <div className="flex items-center mt-1">
              {trendDirection === "up" ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-xs font-medium ${trendDirection === "up" ? "text-green-500" : "text-red-500"}`}>
                {trend}
              </span>
              <span className="text-xs text-gray-500 ml-1">from last month</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
