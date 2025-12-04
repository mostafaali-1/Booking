import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/Card"
import { PageTransition } from "../components/layout/PageTransition"

export function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock signup logic
        console.log("Sign up with:", formData)
        navigate("/")
    }

    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[calc(100vh-4rem)]">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <Input
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Password</label>
                                <Input
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Confirm Password</label>
                                <Input
                                    type="password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    placeholder="••••••••"
                                />
                            </div>
                            <Button type="submit" className="w-full" size="lg">
                                Sign Up
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link to="/signin" className="text-blue-600 hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </PageTransition>
    )
}
