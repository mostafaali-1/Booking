import { Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function Logo() {
    return (
        <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-blue-600 blur-lg opacity-20 rounded-full group-hover:opacity-40 transition-opacity" />
                <Building2 className="h-8 w-8 text-blue-600 relative z-10" />
            </motion.div>
            <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    HotelBook
                </span>
                <span className="text-[0.6rem] font-medium text-gray-500 tracking-widest uppercase">
                    Luxury Stays
                </span>
            </div>
        </Link>
    )
}
