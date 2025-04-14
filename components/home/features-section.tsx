import { Video, CreditCard, Shield } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-2 inline-flex items-center justify-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
            <span className="mr-1 text-orange-500">•••</span>
            New
          </div>
          <h2 className="mt-4 text-3xl font-bold">
            Exploring healthcare innovations: spotlight on key features and advances
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col rounded-lg border p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Video size={20} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Real-time video consultations</h3>
            <p className="text-muted-foreground">
              Connect with healthcare providers from the comfort of your home via secure, high-quality video calls that
              ensure privacy and convenience.
            </p>
          </div>

          <div className="flex flex-col rounded-lg border p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <CreditCard size={20} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Billing and insurance integration</h3>
            <p className="text-muted-foreground">
              Seamlessly process payments and insurance claims with our integrated billing system that supports all
              major insurance providers.
            </p>
          </div>

          <div className="flex flex-col rounded-lg border p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Shield size={20} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Secure file sharing</h3>
            <p className="text-muted-foreground">
              Safely share medical records and test results with your healthcare providers through our encrypted file
              sharing system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
