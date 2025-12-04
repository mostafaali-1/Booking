import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "../ui/Button"
import { Logo } from "../ui/Logo"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <Logo />
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link to="/" className="transition-colors hover:text-blue-600">Home</Link>
                    <Link to="/search" className="transition-colors hover:text-blue-600">Find Hotels</Link>
                    <Link to="/dashboard" className="transition-colors hover:text-blue-600">My Bookings</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
                        <Link to="/signin">Sign In</Link>
                    </Button>
                    <Button size="sm" className="hidden md:flex" asChild>
                        <Link to="/signup">Sign Up</Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
