"use client"

import { useEffect, useState } from "react"
import { Activity, Users, Calendar, DollarSign, TrendingUp, Layers, AlertCircle } from "lucide-react"
import { DashboardCard } from "@/components/dashboard/dashboard-card"
import { DashboardChart } from "@/components/dashboard/dashboard-chart"
import { RecentPatients } from "@/components/dashboard/recent-patients"
import { UpcomingAppointments } from "@/components/dashboard/upcoming-appointments"

export default function DashboardPage() {
  const [stats, setStats] = useState({
    patients: 0,
    appointments: 0,
    revenue: 0,
    occupancy: 0,
  })

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setStats({
        patients: 1248,
        appointments: 42,
        revenue: 13580,
        occupancy: 78,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Patients"
          value={stats.patients}
          icon={<Users className="h-6 w-6" />}
          trend="+12.5%"
          trendDirection="up"
        />
        <DashboardCard
          title="Today's Appointments"
          value={stats.appointments}
          icon={<Calendar className="h-6 w-6" />}
          trend="+4.2%"
          trendDirection="up"
        />
        <DashboardCard
          title="Monthly Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
          icon={<DollarSign className="h-6 w-6" />}
          trend="+8.1%"
          trendDirection="up"
        />
        <DashboardCard
          title="Bed Occupancy"
          value={`${stats.occupancy}%`}
          icon={<Activity className="h-6 w-6" />}
          trend="-2.3%"
          trendDirection="down"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Patient Statistics</h2>
          <DashboardChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Department Performance</h2>
          <DashboardChart type="bar" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Patients</h2>
          <RecentPatients />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
          <UpcomingAppointments />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Hospital Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <Layers className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Available Beds</p>
                <p className="text-xl font-semibold">42/120</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Recovery Rate</p>
                <p className="text-xl font-semibold">94.2%</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
              <AlertCircle className="h-8 w-8 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Critical Cases</p>
                <p className="text-xl font-semibold">8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
