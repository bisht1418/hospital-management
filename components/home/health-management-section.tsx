import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ClipboardList, UserPlus, LineChart, Calendar } from "lucide-react"

export default function HealthManagementSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Mother with baby using healthcare app"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm font-medium text-green-600">New</span>
            </div>
            <h2 className="text-3xl font-bold">
              Experience a Revolution in Healthcare with Our Comprehensive Health Management
            </h2>
            <p className="text-muted-foreground">
              Welcome to a new era of healthcare! Our platform is designed to put your health and well-being at the
              forefront, where you can manage your healthcare needs with ease.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <ClipboardList size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Comprehensive Health Management</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Track all aspects of your health in one place.</p>
                  <Button variant="link" className="mt-1 h-auto p-0 text-xs text-primary">
                    Learn more →
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <UserPlus size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Top Healthcare Professionals</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Access to verified specialists across disciplines.
                  </p>
                  <Button variant="link" className="mt-1 h-auto p-0 text-xs text-primary">
                    Learn more →
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <LineChart size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Personalized Health Insights</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Get tailored recommendations based on your health data.
                  </p>
                  <Button variant="link" className="mt-1 h-auto p-0 text-xs text-primary">
                    Learn more →
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Streamlined Reminders</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Never miss an appointment or medication again.</p>
                  <Button variant="link" className="mt-1 h-auto p-0 text-xs text-primary">
                    Learn more →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
