
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/constants/contact"
import { headerContent } from "@/constants/data/header-data"
import type React from "react"
interface NavItem {
  id: string
  label: string
  color: string
}

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
  navItems: NavItem[]
  activeSection: string
  scrollToSection: (id: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  setIsDarkMode,
  navItems,
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const { socialLinks, icons, } = headerContent

  // Populate social links with actual contact info
  const populatedSocialLinks = socialLinks.map((link) => ({
    ...link,
    href: link.label === "GitHub" ? contactInfo.github : link.label === "LinkedIn" ? contactInfo.linkedin : link.href,
  }))

  // Icon components
  const MenuIcon = icons.menu
  const CloseIcon = icons.close
  const SunIcon = icons.sun
  const MoonIcon = icons.moon

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b bg-transparent border-black/10 shadow-none dark:border-white/10"

    >
      <div className={"w-full max-w-[96%] 2xl:max-w-[96%] mx-auto px-4 py-4"}>
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <a href="#"><div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Portfolio
          </div></a>


          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative pb-2 px-3 py-2 font-medium  duration-300 text-sm lg:text-base rounded-lg hover:scale-105
  ${activeSection === item.id
                    ? "text-blue-600 dark:text-purple-400"
                    : `text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-100/10 ${item.color}`}`}

                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                {/* Enhanced Active Indicator */}

                {activeSection === item.id && (
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300`}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Enhanced Right Section */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-1 lg:space-x-2">
              {populatedSocialLinks.map((social, index) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 hover:rotate-3 transition-all duration-300 w-9 h-9 lg:w-10 lg:h-10 rounded-xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Separator */}
            <div className="hidden sm:block w-px h-6 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

            {/* Enhanced Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hover:scale-110 hover:rotate-12 transition-all duration-300 w-9 h-9 lg:w-10 lg:h-10 rounded-xl"
              aria-label="Toggle theme"
            >
              <div className="relative">
                {isDarkMode ? (
                  <SunIcon className="h-4 w-4 lg:h-5 lg:w-5 rotate-0 scale-100 transition-all duration-500" />
                ) : (
                  <MoonIcon className="h-4 w-4 lg:h-5 lg:w-5 rotate-0 scale-100 transition-all duration-500" />
                )}
              </div>
            </Button>

            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={"md:hidden hover:scale-110 transition-all duration-300 w-9 h-9 rounded-xl"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative">
                {mobileMenuOpen ? (
                  <CloseIcon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                ) : (
                  <MenuIcon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-6 p-6 rounded-2xl backdrop-blur-xl border shadow-2xl ${isDarkMode ? "bg-gray-900/90 border-gray-700/50" : "bg-white/90 border-gray-200/50"
            } animate-slide-down`}>
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 mb-2 font-medium ${activeSection == item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-[1.02]"
                    : `${isDarkMode
                      ? "text-white hover:bg-gray-800/70 hover:text-blue-300"
                      : "text-gray-900 hover:bg-gray-100/70 hover:text-blue-600"
                    } hover:transform hover:scale-[1.01]`
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </nav>

            {/* Enhanced Mobile Social Links */}
            <div className={"flex justify-center space-x-4 mt-6 pt-6 border-t border-gray-300/50 dark:border-gray-600/50"}>
              {populatedSocialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"p-3 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Mobile Theme Info */}
            <div className="text-center mt-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {isDarkMode ? "Dark" : "Light"} Mode Active
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
