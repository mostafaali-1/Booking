import { useBookingStore } from "../store/useBookingStore"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { PageTransition } from "../components/layout/PageTransition"

export function Dashboard() {
    const { bookings, cancelBooking } = useBookingStore()

    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
                {bookings.length === 0 ? (
                    <p className="text-gray-500">No bookings found.</p>
                ) : (
                    <div className="space-y-4">
                        {bookings.map((booking) => (
                            <Card key={booking.id}>
                                <CardHeader>
                                    <CardTitle className="flex justify-between items-center">
                                        <span>{booking.hotelName}</span>
                                        <span className={`text-sm px-2 py-1 rounded ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {booking.status.toUpperCase()}
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-500">Check-in</p>
                                            <p className="font-medium">{booking.checkIn}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Check-out</p>
                                            <p className="font-medium">{booking.checkOut}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Guests</p>
                                            <p className="font-medium">{booking.guests}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Total Price</p>
                                            <p className="font-medium">${booking.totalPrice}</p>
                                        </div>
                                    </div>
                                    {booking.status === 'confirmed' && (
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="mt-4"
                                            onClick={() => cancelBooking(booking.id)}
                                        >
                                            Cancel Booking
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </PageTransition>
    )
}
