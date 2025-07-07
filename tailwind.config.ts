import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
   safelist: [
    "from-orange-500" ,"via-red-500" ,"to-pink-600",
    "text-orange-500",
    "from-indigo-500", "to-indigo-600",
    "#333",
    "#0077B5",
    "#1DA1F2",
    "text-red-500",
    "text-orange-500",
    'hover:text-blue-500',
    'hover:text-red-500',
    'hover:text-green-500',
    'hover:text-purple-500',
    "hover:text-orange-500"
  ],
 theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "92%",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Cosmic Fusion Theme Colors
        cosmic: {
          50: "#f0f4ff", // Lightest cosmic blue
          100: "#e0e9ff", // Very light cosmic blue
          200: "#c7d6fe", // Light cosmic blue
          300: "#a5b8fc", // Medium light cosmic blue
          400: "#8b93f8", // Medium cosmic blue
          500: "#7c6df2", // Base cosmic blue
          600: "#6d4de6", // Medium dark cosmic blue
          700: "#5b3bd1", // Dark cosmic blue
          800: "#4c2fa8", // Very dark cosmic blue
          900: "#3f2785", // Darkest cosmic blue
        },

        nebula: {
          50: "#faf5ff", // Lightest nebula purple
          100: "#f3e8ff", // Very light nebula purple
          200: "#e9d5ff", // Light nebula purple
          300: "#d8b4fe", // Medium light nebula purple
          400: "#c084fc", // Medium nebula purple
          500: "#a855f7", // Base nebula purple
          600: "#9333ea", // Medium dark nebula purple
          700: "#7c2d92", // Dark nebula purple
          800: "#6b2775", // Very dark nebula purple
          900: "#581c5a", // Darkest nebula purple
        },

        galaxy: {
          50: "#f8fafc", // Lightest galaxy gray
          100: "#f1f5f9", // Very light galaxy gray
          200: "#e2e8f0", // Light galaxy gray
          300: "#cbd5e1", // Medium light galaxy gray
          400: "#94a3b8", // Medium galaxy gray
          500: "#64748b", // Base galaxy gray
          600: "#475569", // Medium dark galaxy gray
          700: "#334155", // Dark galaxy gray
          800: "#1e293b", // Very dark galaxy gray
          900: "#0f172a", // Darkest galaxy gray
        },

        stardust: {
          50: "#fefce8", // Lightest stardust yellow
          100: "#fef9c3", // Very light stardust yellow
          200: "#fef08a", // Light stardust yellow
          300: "#fde047", // Medium light stardust yellow
          400: "#facc15", // Medium stardust yellow
          500: "#eab308", // Base stardust yellow
          600: "#ca8a04", // Medium dark stardust yellow
          700: "#a16207", // Dark stardust yellow
          800: "#854d0e", // Very dark stardust yellow
          900: "#713f12", // Darkest stardust yellow
        },

        aurora: {
          50: "#ecfdf5", // Lightest aurora green
          100: "#d1fae5", // Very light aurora green
          200: "#a7f3d0", // Light aurora green
          300: "#6ee7b7", // Medium light aurora green
          400: "#34d399", // Medium aurora green
          500: "#10b981", // Base aurora green
          600: "#059669", // Medium dark aurora green
          700: "#047857", // Dark aurora green
          800: "#065f46", // Very dark aurora green
          900: "#064e3b", // Darkest aurora green
        },

        // Mobile development themed colors (keeping existing)
        android: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        flutter: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        ios: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-from-top": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "bounce-in": {
          "0%": {
            transform: "scale(0.3)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "70%": {
            transform: "scale(0.9)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        // Cosmic Fusion specific animations
        "cosmic-pulse": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        "nebula-drift": {
          "0%": {
            transform: "translateX(0px) translateY(0px)",
          },
          "33%": {
            transform: "translateX(30px) translateY(-30px)",
          },
          "66%": {
            transform: "translateX(-20px) translateY(20px)",
          },
          "100%": {
            transform: "translateX(0px) translateY(0px)",
          },
        },
        "stardust-twinkle": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(0.8)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
        "galaxy-rotate": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
        // Cosmic Fusion specific animations
        "cosmic-pulse": "cosmic-pulse 2s ease-in-out infinite",
        "nebula-drift": "nebula-drift 6s ease-in-out infinite",
        "stardust-twinkle": "stardust-twinkle 1.5s ease-in-out infinite",
        "galaxy-rotate": "galaxy-rotate 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Cosmic Fusion specific gradients
        "cosmic-gradient": "linear-gradient(135deg, #7c6df2 0%, #a855f7 100%)",
        "nebula-gradient": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #a855f7 100%)",
        "galaxy-gradient": "radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)",
        "stardust-gradient": "linear-gradient(45deg, #fde047 0%, #a855f7 100%)",
        "aurora-gradient": "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)",
      },
      boxShadow: {
        // Cosmic Fusion specific shadows
        cosmic: "0 4px 14px 0 rgba(124, 109, 242, 0.25)",
        "cosmic-lg": "0 10px 25px -3px rgba(124, 109, 242, 0.3), 0 4px 6px -2px rgba(124, 109, 242, 0.1)",
        nebula: "0 4px 14px 0 rgba(168, 85, 247, 0.25)",
        "nebula-lg": "0 10px 25px -3px rgba(168, 85, 247, 0.3), 0 4px 6px -2px rgba(168, 85, 247, 0.1)",
        galaxy: "0 4px 14px 0 rgba(30, 41, 59, 0.4)",
        "galaxy-lg": "0 10px 25px -3px rgba(30, 41, 59, 0.5), 0 4px 6px -2px rgba(30, 41, 59, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
