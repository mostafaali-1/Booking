import type { Hotel } from "../types"

export const hotels: Hotel[] = [
    {
        id: "1",
        name: "Grand Luxury Hotel",
        location: "New York, USA",
        price: 350,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        description: "Experience the height of luxury in the heart of New York City.",
        amenities: ["Free Wi-Fi", "Pool", "Spa", "Gym"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "2",
        name: "Ocean View Resort",
        location: "Maldives",
        price: 500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        description: "Wake up to the sound of the ocean in our overwater villas.",
        amenities: ["Private Beach", "Water Sports", "All Inclusive", "Spa"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "3",
        name: "Mountain Retreat",
        location: "Swiss Alps",
        price: 280,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=80",
        description: "Cozy cabin vibes with breathtaking mountain views.",
        amenities: ["Ski-in/Ski-out", "Fireplace", "Hot Tub", "Hiking Trails"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "4",
        name: "City Center Inn",
        location: "Tokyo, Japan",
        price: 150,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        description: "Modern comfort in the bustling center of Tokyo.",
        amenities: ["Free Wi-Fi", "Close to Metro", "Breakfast Included"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "5",
        name: "Desert Oasis",
        location: "Dubai, UAE",
        price: 400,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        description: "Luxury amidst the dunes with world-class facilities.",
        amenities: ["Pool", "Desert Safari", "Fine Dining", "Spa"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "6",
        name: "Historic Boutique Hotel",
        location: "Paris, France",
        price: 320,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        description: "Charming stay in a historic building near the Eiffel Tower.",
        amenities: ["Free Wi-Fi", "Concierge", "Room Service"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "7",
        name: "Alpine Ski Lodge",
        location: "Aspen, USA",
        price: 600,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=800&q=80",
        description: "Premium ski resort with direct access to the slopes.",
        amenities: ["Ski-in/Ski-out", "Spa", "Heated Pool", "Fine Dining"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "8",
        name: "Tropical Paradise Villa",
        location: "Bali, Indonesia",
        price: 220,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
        description: "Private villa surrounded by lush tropical gardens.",
        amenities: ["Private Pool", "Yoga Deck", "Breakfast Included", "Massage"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "9",
        name: "Urban Loft Hotel",
        location: "Berlin, Germany",
        price: 180,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        description: "Stylish loft-style rooms in the heart of Berlin's art district.",
        amenities: ["Rooftop Bar", "Coworking Space", "Bike Rental"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "10",
        name: "Santorini Cliff Suites",
        location: "Santorini, Greece",
        price: 450,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=80",
        description: "Iconic white-washed suites with stunning caldera views.",
        amenities: ["Infinity Pool", "Sunset Terrace", "Breakfast in Bed"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "11",
        name: "Kyoto Ryokan",
        location: "Kyoto, Japan",
        price: 300,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&w=800&q=80",
        description: "Traditional Japanese inn experience with modern comforts.",
        amenities: ["Onsen", "Kaiseki Dinner", "Zen Garden"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "12",
        name: "Safari Lodge",
        location: "Serengeti, Tanzania",
        price: 800,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80",
        description: "Luxury tents in the heart of the wilderness.",
        amenities: ["Game Drives", "All Inclusive", "Pool"],
        interiorImages: [
            "https://images.unsplash.com/photo-1613545325294-07656017c45b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584622050127-cd95c971cd0e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
        ]
    },
]

export const getHotels = async (): Promise<Hotel[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(hotels), 500)
    })
}

export const getHotelById = async (id: string): Promise<Hotel | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(hotels.find((h) => h.id === id)), 500)
    })
}
