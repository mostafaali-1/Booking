import { create } from 'zustand'

interface Booking {
    id: string
    hotelId: string
    hotelName: string
    checkIn: string
    checkOut: string
    guests: number
    totalPrice: number
    status: 'confirmed' | 'cancelled'
}

interface BookingStore {
    bookings: Booking[]
    addBooking: (booking: Omit<Booking, 'id' | 'status'>) => void
    cancelBooking: (id: string) => void
}

export const useBookingStore = create<BookingStore>((set) => ({
    bookings: [],
    addBooking: (booking) =>
        set((state) => ({
            bookings: [
                ...state.bookings,
                {
                    ...booking,
                    id: Math.random().toString(36).substr(2, 9),
                    status: 'confirmed',
                },
            ],
        })),
    cancelBooking: (id) =>
        set((state) => ({
            bookings: state.bookings.map((b) =>
                b.id === id ? { ...b, status: 'cancelled' } : b
            ),
        })),
}))
