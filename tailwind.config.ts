import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom cosmic colors
        cosmic: {
          void: "hsl(var(--cosmic-void))",
          deep: "hsl(var(--cosmic-deep))",
          surface: "hsl(var(--cosmic-surface))",
        },
        nebula: {
          DEFAULT: "hsl(var(--nebula))",
          glow: "hsl(var(--nebula-glow))",
        },
        orbital: {
          cyan: "hsl(var(--orbital-cyan))",
          "cyan-dim": "hsl(var(--orbital-cyan-dim))",
        },
        energy: {
          amber: "hsl(var(--energy-amber))",
          "amber-dim": "hsl(var(--energy-amber-dim))",
        },
        starlight: "hsl(var(--starlight))",
        stellar: {
          blue: "hsl(var(--stellar-blue))",
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
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", filter: "blur(20px)" },
          "50%": { opacity: "0.8", filter: "blur(30px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        orbit: "orbit 20s linear infinite",
        "orbit-slow": "orbit 40s linear infinite",
        "orbit-reverse": "orbit-reverse 25s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-cosmic": "linear-gradient(135deg, hsl(228 35% 3%) 0%, hsl(228 30% 8%) 50%, hsl(260 30% 10%) 100%)",
        "gradient-orbital": "linear-gradient(90deg, hsl(185 100% 50%) 0%, hsl(210 80% 60%) 100%)",
        "gradient-energy": "linear-gradient(90deg, hsl(35 100% 55%) 0%, hsl(25 100% 60%) 100%)",
        "gradient-card": "linear-gradient(145deg, hsl(228 30% 10%) 0%, hsl(228 30% 6%) 100%)",
        "gradient-radial-glow": "radial-gradient(ellipse at center, hsl(185 100% 50% / 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 30px hsl(185 100% 50% / 0.3), 0 0 60px hsl(185 100% 50% / 0.1)",
        "glow-amber": "0 0 30px hsl(35 100% 55% / 0.3), 0 0 60px hsl(35 100% 55% / 0.1)",
        cosmic: "0 4px 24px hsl(228 35% 3% / 0.8), 0 0 1px hsl(185 100% 50% / 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
