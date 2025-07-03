import { Github, Linkedin, Twitter, Menu, X, Sun, Moon } from "lucide-react"

export const headerContent = {
 

  socialLinks: [
    {
      icon: Twitter,
      href: "#", // You can update this with your actual Twitter URL
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: Github,
      href: "", // This will be populated from contactInfo.github
      label: "GitHub",
      color: "#333",
    },
    {
      icon: Linkedin,
      href: "", // This will be populated from contactInfo.linkedin
      label: "LinkedIn",
      color: "#0077B5",
    },
  ],

  icons: {
    menu: Menu,
    close: X,
    sun: Sun,
    moon: Moon,
  },

}
