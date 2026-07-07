import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-react/',

  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion', 'motion', 'gsap'],
          'three-core': ['three'],
          'r3f-vendor': [
            '@react-three/fiber',
            '@react-three/drei',
            '@react-three/rapier',
          ],
          'spline-vendor': [
            '@splinetool/react-spline',
            '@splinetool/runtime',
          ],
          'ui-vendor': [
            'react-icons',
            'lucide-react',
            'clsx',
            'tailwind-merge',
          ],
          'mesh-vendor': ['meshline'],
        },
      },
    },

    chunkSizeWarningLimit: 1000,

    minify: 'terser',

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'three',
    ],
    exclude: [
      '@splinetool/runtime',
    ],
  },
})