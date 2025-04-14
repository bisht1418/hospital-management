import Link from "next/link"
import { patients } from "@/lib/data/patients"

export function RecentPatients() {
  // Get the 5 most recent patients
  const recentPatients = [...patients]
    .sort((a, b) => new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime())
    .slice(0, 5)

  return (
    <div className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {recentPatients.map((patient) => (
          <li key={patient.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {patient.name.charAt(0)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{patient.name}</p>
                <p className="text-sm text-gray-500 truncate">{patient.condition}</p>
              </div>
              <div className="flex-shrink-0 text-sm text-gray-500">
                {new Date(patient.lastVisit).toLocaleDateString()}
              </div>
              <div>
                <Link
                  href={`/patients/${patient.id}`}
                  className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link
          href="/patients"
          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          View all patients
        </Link>
      </div>
    </div>
  )
}
