import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useBookingStore } from "../store/useBookingStore"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { PageTransition } from "../components/layout/PageTransition"

export function Booking() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const addBooking = useBookingStore((state) => state.addBooking)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock booking creation
        addBooking({
            hotelId: id || "1",
            hotelName: "Mock Hotel", // In real app, fetch hotel details
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            guests: formData.guests,
            totalPrice: 500, // Mock price
        })
        navigate("/dashboard")
    }

    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-8 max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Confirm Your Booking</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <Input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Check-in Date</label>
                                    <Input
                                        type="date"
                                        required
                                        value={formData.checkIn}
                                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Check-out Date</label>
                                    <Input
                                        type="date"
                                        required
                                        value={formData.checkOut}
                                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Guests</label>
                                <Input
                                    type="number"
                                    min={1}
                                    required
                                    value={formData.guests}
                                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                                />
                            </div>
                            <Button type="submit" className="w-full" size="lg">
                                Confirm Booking
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </PageTransition>
    )
}
