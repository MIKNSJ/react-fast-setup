import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    
    server: {
        /**
         * watch: {
         *     usePolling: true,
         * }
        */
        host: "0.0.0.0",
        /**
         * changeOrigin: true, // Change the Origin header to match the backend
         * rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Rewrite '/api' if necessary
        */
        proxy: {
            '/api': {
                target: 'http://backend:8080/', 
            },
            '/admin': {
                target: 'http://backend:8080/', 
            }
        }
    }
})
