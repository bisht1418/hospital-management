import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-lg font-bold">O</span>
              </div>
              <span className="text-xl font-bold">Oladoc</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Oladoc is a healthcare platform that connects patients with healthcare providers for virtual and in-person
              consultations.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
            </div>
            <p className="mt-8 text-xs text-gray-500">© 2023 Oladoc. All Rights Reserved.</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Specialties</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Dermatology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Psychiatry
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Video Consultations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  In-person Visits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Health Records
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Prescriptions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Health Monitoring
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Health Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
