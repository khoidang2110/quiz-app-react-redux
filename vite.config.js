import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
        {
            find: /^jss-plugin-(.*)$/,
            replacement: "$1",
            customResolver: (id) => {
                if (id === "{}") {
                    id = "global";
                }
                return resolve(__dirname, `./node_modules/jss-plugin-${id}/src/index.js`);
            },
        },
    ],
},
})
