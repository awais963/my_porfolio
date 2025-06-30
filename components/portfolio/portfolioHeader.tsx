
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";

interface NavItem {
    id: string;
    label: string;
    color: string;
}

interface SocialLink {
    label: string;
    href: string;
    icon: React.ElementType;
}

interface HeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
    navItems: NavItem[];
    activeSection: string;
    scrollToSection: (id: string) => void;
    socialLinks: SocialLink[];
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
    isDarkMode,
    setIsDarkMode,
    navItems,
    activeSection,
    scrollToSection,
    socialLinks,
    mobileMenuOpen,
    setMobileMenuOpen,
}) => {
    return (

        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent backdrop-blur-md border-b ${isDarkMode ? "border-white/5" : "border-black/5"}`}
        >
            <div className="w-full max-w-[96%] 2xl:max-w-[96%] mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#"><div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                        Portfolio
                    </div></a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-4 lg:space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-3 py-2 md:px-4 rounded-full transition-all duration-300 font-medium transform hover:scale-105 text-sm md:text-base ${activeSection === item.id
                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                                    : `${isDarkMode
                                        ? "text-white hover:text-blue-400"
                                        : "text-black hover:text-blue-600"} hover:bg-gray-100 dark:hover:bg-gray-800`}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Social Icons & Theme Toggle */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <div className="hidden sm:flex space-x-2">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.label}
                                    variant="ghost"
                                    size="icon"
                                    className="hover:scale-110 transition-transform duration-200 w-8 h-8 md:w-10 md:h-10"
                                    asChild
                                >
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                                    </a>
                                </Button>
                            ))}
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="hover:scale-110 transition-transform duration-200 w-8 h-8 md:w-10 md:h-10"
                        >
                            {isDarkMode ? (
                                <Sun className="h-4 w-4 md:h-5 md:w-5" />
                            ) : (
                                <Moon className="h-4 w-4 md:h-5 md:w-5" />
                            )}
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden hover:scale-110 transition-transform duration-200 w-8 h-8"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <Menu className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div
                        className={`md:hidden mt-4 p-4 rounded-lg ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} animate-slide-down`}
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 mb-2 ${activeSection === item.id
                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                                    : `${isDarkMode
                                        ? "text-white hover:bg-gray-800"
                                        : "text-black hover:bg-gray-200"}`}`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Mobile Social Links */}
                        <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
