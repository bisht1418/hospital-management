"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/lib/hooks"

export default function HeroSection() {
  const { doctors } = useAppSelector((state) => state.doctors)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Advancing health and wellness: fostering a healthy future
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect with top-rated medical experts online or in-person. By harnessing the power of technology, we're
              making healthcare more accessible to patients worldwide.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="w-full sm:w-auto">
                Booking Demo
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">Supported by</p>
              <div className="mt-4 flex flex-wrap items-center gap-6">
                <div className="text-sm font-medium">CVS Pharmacy</div>
                <div className="text-sm font-medium">Cigna</div>
                <div className="text-sm font-medium">Humana Health</div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg border bg-background p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-medium">Browse Doctors</h3>
              <span className="text-xs text-muted-foreground">Recently Added</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {doctors.slice(0, 9).map((doctor) => (
                <div key={doctor.id} className="flex flex-col items-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                  </div>
                  <span className="mt-2 text-xs font-medium">{doctor.name.split(" ")[1]}</span>
                  <span className="text-xs text-muted-foreground">{doctor.specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
