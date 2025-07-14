// tailwind.config.js

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Paleta de colores personalizada para un look de marca único
      colors: {
        'brand-teal': {
          light: '#14b8a6', // teal-500
          DEFAULT: '#0d9488', // teal-600
          dark: '#0f766e',  // teal-700
        },
        'brand-emerald': {
          light: '#34d399', // emerald-400
          DEFAULT: '#10b981', // emerald-500
          dark: '#059669',  // emerald-600
        },
        'brand-bg': '#f8fafc', // gray-50
      },
      
      // Keyframes para todas tus animaciones personalizadas
      keyframes: {
        // --- TUS ANIMACIONES ORIGINALES ---
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        // --- ANIMACIONES DE ENTRADA SUAVES (NUEVAS) ---
        'slide-in-up-gentle': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        zoomIn: {
          from: { opacity: '0', transform: 'scale(0.97)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },

        // --- ANIMACIONES DECORATIVAS Y DE FONDO (NUEVAS) ---
        backgroundFloat: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5px, -5px)' },
          '50%': { transform: 'translate(0, 0)' },
          '75%': { transform: 'translate(-5px, 5px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: '0.4' },
          '33%': { transform: 'translate(20px, -30px) rotate(8deg) scale(1.05)', opacity: '0.6' },
          '66%': { transform: 'translate(-15px, 25px) rotate(-4deg) scale(0.98)', opacity: '0.5' },
        },

        // --- ANIMACIONES DE UI Y MICRO-INTERACCIONES (NUEVAS) ---
        shine: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(30deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(30deg)' },
        },
        subtlePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.95' },
        },
        'border-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      
      // Clases de utilidad para aplicar TODAS las animaciones
      animation: {
        // Tus animaciones originales
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        
        // Nuevas animaciones de entrada
        'slide-in-up-gentle': 'slide-in-up-gentle 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'zoom-in': 'zoomIn 0.7s ease-out forwards',
        
        // Nuevas animaciones de fondo
        'background-float': 'backgroundFloat 25s ease-in-out infinite',
        'aurora-pulse': 'aurora 20s ease-in-out infinite alternate',
        
        // Nuevas micro-interacciones
        'shine-effect': 'shine 1s ease-in-out',
        'subtle-pulse': 'subtlePulse 2.5s ease-in-out infinite',
        'border-pan-slow': 'border-pan 7s ease-in-out infinite',
      },
    },
  },
  
  // Plugins para funcionalidades extra (incluyendo la utilidad para la barra de scroll)
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      addUtilities({
        // Sombra de texto para el logo original
        '.text-shadow-provo': {
          'text-shadow': '1px 1px 2px rgba(16, 185, 129, 0.25)',
        },
        // Sombra de texto refinada para los nuevos encabezados
        '.text-shadow-brand': {
          'text-shadow': '0 2px 4px rgba(13, 148, 136, 0.2)',
        },
        // Efecto de "vidrio esmerilado" para el modal
        '.backdrop-blur-soft': {
          'backdrop-filter': 'blur(8px)',
        },
        // Utilidad para ocultar la barra de scroll del carrusel
        '.scrollbar-hide': {
          // Firefox
          'scrollbar-width': 'none',
          // Safari y Chrome
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    })
  ],
}