import Link from "next/link"
import type { Patient } from "@/lib/types"

interface PatientCardProps {
  patient: Patient
}

export function PatientCard({ patient }: PatientCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
              {patient.name.charAt(0)}
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
            <p className="text-sm text-gray-500">ID: {patient.id}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Age</p>
            <p className="text-sm font-medium">{patient.age}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-sm font-medium">{patient.gender}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Blood Type</p>
            <p className="text-sm font-medium">{patient.bloodType}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Condition</p>
            <p className="text-sm font-medium">{patient.condition}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <div className="flex justify-between">
          <p className="text-xs text-gray-500">Last Visit</p>
          <p className="text-xs font-medium">{new Date(patient.lastVisit).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="px-5 py-3 bg-white border-t border-gray-200 flex justify-between">
        <Link href={`/patients/${patient.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-500">
          View Details
        </Link>
        <Link href={`/patients/${patient.id}/edit`} className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Edit
        </Link>
      </div>
    </div>
  )
}
