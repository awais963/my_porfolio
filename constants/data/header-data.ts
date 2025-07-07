import { Github, Linkedin, Twitter, Menu, X, Sun, Moon } from "lucide-react"
import { githubUrl,linkedinUrl } from "../contact"
export const headerContent = {
 

  socialLinks: [
   
    {
      icon: Github,
      href: githubUrl, // This will be populated from contactInfo.github
      label: "GitHub",
      color: "#333",
    },
    {
      icon: Linkedin,
      href: linkedinUrl, // This will be populated from contactInfo.linkedin
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
