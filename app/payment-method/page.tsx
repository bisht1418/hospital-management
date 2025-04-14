"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function PaymentMethodPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <div className="container mx-auto py-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <span className="text-sm font-medium">1</span>
            </div>
            <span className="text-sm font-medium text-primary">Personal Details</span>
            <div className="h-px w-8 bg-gray-300"></div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <span className="text-sm font-medium">2</span>
            </div>
            <span className="text-sm font-medium text-primary">Confirmation</span>
            <div className="h-px w-8 bg-gray-300"></div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <span className="text-sm font-medium">3</span>
            </div>
            <span className="text-sm font-medium text-primary">Payment Method</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Choose Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Select defaultValue="card">
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Credit/Debit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <RadioGroup defaultValue="visa" className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3 rounded-md border p-3">
                  <RadioGroupItem value="visa" id="visa" />
                  <Label htmlFor="visa" className="flex-1">
                    Visa
                  </Label>
                  <div className="flex h-6 w-10 items-center justify-center rounded bg-blue-100 text-xs font-medium text-blue-600">
                    VISA
                  </div>
                </div>
                <div className="flex items-center space-x-3 rounded-md border p-3">
                  <RadioGroupItem value="mastercard" id="mastercard" />
                  <Label htmlFor="mastercard" className="flex-1">
                    Mastercard
                  </Label>
                  <div className="flex h-6 w-10 items-center justify-center rounded bg-red-100 text-xs font-medium text-red-600">
                    MC
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-name">Name on Card</Label>
                  <Input id="card-name" placeholder="John Doe" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="save-card" />
              <Label htmlFor="save-card">Save card for future payments</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Pay</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
