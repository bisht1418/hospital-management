"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setFavoriteDoctor } from "@/lib/store/slices/doctors-slice"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DoctorProfilesSection() {
  const { doctors } = useAppSelector((state) => state.doctors)
  const dispatch = useAppDispatch()
  const [activeTab, setActiveTab] = useState("all")

  const filteredDoctors =
    activeTab === "all"
      ? doctors.slice(0, 2)
      : doctors.filter((doctor) => doctor.specialty.toLowerCase() === activeTab).slice(0, 2)

  const toggleFavorite = (id: string) => {
    dispatch(setFavoriteDoctor(id))
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardHeader className="bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dr. Anil Narayan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Prof. Dr. Anil Narayan</h3>
                    <p className="text-xs text-muted-foreground">Cardiologist</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-red-500"
                  onClick={() => toggleFavorite("special-1")}
                >
                  <Heart className="h-5 w-5 fill-current" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-3 divide-x border-y">
                <div className="flex flex-col items-center p-3">
                  <span className="text-sm font-medium">5 years</span>
                  <span className="text-xs text-muted-foreground">Experience</span>
                </div>
                <div className="flex flex-col items-center p-3">
                  <span className="text-sm font-medium">9845</span>
                  <span className="text-xs text-muted-foreground">Patients</span>
                </div>
                <div className="flex flex-col items-center p-3">
                  <span className="text-sm font-medium">4.93K</span>
                  <span className="text-xs text-muted-foreground">Reviews</span>
                </div>
              </div>
              <div className="p-4">
                <Tabs defaultValue="about">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="about" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Dr. Narayan is a board-certified cardiologist with expertise in preventive cardiology and heart
                      disease management. With over 5 years of experience, he has helped thousands of patients improve
                      their heart health.
                    </p>
                  </TabsContent>
                  <TabsContent value="schedule" className="mt-4">
                    <div className="text-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="reviews" className="mt-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-yellow-400"
                            >
                              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-medium">4.9</span>
                        <span className="text-xs text-muted-foreground">(4,930 reviews)</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center bg-white p-4">
              <Button className="w-full">Appointment Booking</Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dr. Alexandra Ruiz"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Dr. Alexandra Ruiz</h3>
                    <p className="text-xs text-muted-foreground">Endocrinologist</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => toggleFavorite("special-2")}
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-3 divide-x border-y">
                <div className="flex flex-col items-center p-3">
                  <span className="text-sm font-medium">8 years</span>
                  <span className="text-xs text-muted-foreground">Experience</span>
                </div>
                <div className="flex flex-col items-center p-3">
                  <span className="text-sm font-medium">7,845</span>
                  <span className="text-xs text-muted-foreground">Patients</span>
                </div>
                <div className="flex flex-col items-center p-3">
                  <span className="text-sm font-medium">4.2K</span>
                  <span className="text-xs text-muted-foreground">Reviews</span>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium">Available Slots</h4>
                  <div className="grid grid-cols-7 gap-2">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                      <div
                        key={i}
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs ${
                          i === 1 || i === 3 || i === 5 ? "bg-primary text-white" : "bg-gray-100"
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-medium">Today, April 14</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"].map((time, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-center rounded border p-2 text-xs ${
                          i === 1 ? "border-primary bg-primary/10 text-primary" : ""
                        }`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center bg-white p-4">
              <Button className="w-full">Book an Appointment</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
