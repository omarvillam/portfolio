import type { Config } from 'tailwindcss'
import {join} from "path";
import {createGlobPatternsForDependencies} from "@nx/react/tailwind";

export default {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202326',
          secondary: '#32373D',
          tertiary: "#646973",
          quartery: "#E8F3FF",
          white: "#F7F7F7"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
},
  plugins: [],
} satisfies Config