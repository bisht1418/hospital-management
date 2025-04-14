import { Users, Calendar, Layers, Activity, DollarSign, BarChart2 } from "lucide-react"

export function LandingFeatures() {
  const features = [
    {
      name: "Patient Management",
      description:
        "Easily manage patient records, medical history, and personal information in one centralized system.",
      icon: Users,
    },
    {
      name: "Appointment Scheduling",
      description:
        "Streamline appointment booking, rescheduling, and cancellations with our intuitive calendar interface.",
      icon: Calendar,
    },
    {
      name: "Inventory Management",
      description:
        "Keep track of medical supplies, equipment, and medications with real-time stock updates and alerts.",
      icon: Layers,
    },
    {
      name: "Health Monitoring",
      description: "Monitor patient vitals and health metrics with customizable dashboards and automated alerts.",
      icon: Activity,
    },
    {
      name: "Billing & Payments",
      description:
        "Simplify billing processes, insurance claims, and payment tracking for improved financial management.",
      icon: DollarSign,
    },
    {
      name: "Analytics & Reporting",
      description: "Generate comprehensive reports and gain valuable insights with advanced analytics tools.",
      icon: BarChart2,
    },
  ]

  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage your hospital
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive hospital management system provides all the tools you need to streamline operations and
            improve patient care.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
