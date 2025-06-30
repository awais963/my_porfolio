
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/constants/contact";
import { useState } from "react";


import { GradientHeading } from "@/components/ui/gradient-heading";
import {
    Calendar,
    Check,
    Clock,
    Copy,
    ExternalLink,
    Github,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
} from "lucide-react";
interface ContactSectionProps {
    isDarkMode: boolean;

}

export const ContactSection: React.FC<ContactSectionProps> = ({
    isDarkMode,

}) => {
    const [copied, setCopied] = useState<string | null>(null)

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(type)
            setTimeout(() => setCopied(null), 2000) // Reset after 2s
        })
    }
    const social_Links = [
        {
            name: "GitHub",
            url: contactInfo.github,
            icon: <Github className="w-5 h-5" />,
        },
        {
            name: "LinkedIn",
            url: contactInfo.linkedin,
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/+923014267966",
            icon: <MessageCircle className="w-5 h-5" />,
        },
        {
            name: "Stack Overflow",
            url: "https://stackoverflow.com/users/username",
            icon: <ExternalLink className="w-5 h-5" />,
        },]
    return (

        <section id="contact" className="min-h-screen py-16 md:py-20 px-4 scroll-animate">
            <div className="w-full max-w-[96%] 2xl:max-w-[96%] mx-auto">
                <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
                    <GradientHeading text="Get In Touch"
                        fromColor="from-orange-600"
                        toColor="to-red-600" />

                    <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Ready to bring your mobile app idea to life? Let's discuss your project!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6">
                    {/* Contact Info */}
                    <div className="space-y-6 md:space-y-8 animate-fade-in-left">
                        <div
                            className={`${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm rounded-2xl p-6 md:p-8 border`}
                        >
                            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between hover:scale-105 transition-transform duration-200">
                                    {/* Left: Icon and Email Text */}
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-500/20 p-3 rounded-full">
                                            <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base`}>
                                                {contactInfo.email}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Copy Icon */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => copyToClipboard(contactInfo.email, "email")}
                                        className="ml-2"
                                    >
                                        {copied === "email" ? (
                                            <Check className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-gray-500" />
                                        )}
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between space-x-4  hover:scale-105 transition-transform duration-200">
                                    {/* Left: Icon and Phone Text */}
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-green-500/20 p-3 rounded-full">
                                            <Phone className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base`}>
                                                {contactInfo.phone}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Copy Icon */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                                        className="ml-2"
                                    >
                                        {copied === "phone" ? (
                                            <Check className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-gray-500" />
                                        )}
                                    </Button>
                                </div>

                                <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                                    <div className="bg-purple-500/20 p-3 rounded-full">
                                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Location</p>
                                        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base`}>
                                            Pakistan, Lahore Punjab
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div
                            className={`${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm rounded-2xl p-6 md:p-8 border`}
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="bg-green-500/20 p-3 rounded-full">
                                    <Calendar className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                                </div>
                                <div>
                                    <p className="font-medium">Availability</p>
                                    <p className="text-green-500 font-medium">Available for new projects</p>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Response time: Within 24 hours</span>
                                </div>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                                <p>Weekend consultations available</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-fade-in-right">
                        <Card
                            className={`${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-sm border`}
                        >
                            <CardContent className="p-6 md:p-8">
                                {/* Social Links & CTA */}
                                <div className="space-y-8">
                                    {/* Social Links */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Find Me Online</h3>

                                        <div className="flex flex-wrap gap-3">
                                            {social_Links.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-2 px-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                                                    title={link.name}
                                                >
                                                    {link.icon}
                                                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                        {link.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>

                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                                            Connect with me on these platforms to see my work and experience.
                                        </p>
                                    </div>

                                    {/* Quick Actions */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get Started</h3>

                                        <div className="space-y-4">
                                            <Button
                                                className="w-full"
                                                size="lg"
                                                onClick={() => (window.location.href = `mailto:${contactInfo.email}`)}
                                            >
                                                <Mail className="w-5 h-5 mr-2" />
                                                Send Email
                                            </Button>

                                            <Button
                                                variant="outline"
                                                className="w-full"
                                                size="lg"
                                                onClick={() =>
                                                    window.open(`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`, "_blank")
                                                }
                                            >
                                                <MessageCircle className="w-5 h-5 mr-2" />
                                                WhatsApp Chat
                                            </Button>
                                        </div>

                                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                                <strong>Quick Response:</strong> I typically respond to inquiries within 24 hours. For
                                                urgent projects, WhatsApp is the fastest way to reach me.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
