import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  // Reglas base de Next.js para Core Web Vitals
  ...nextVitals,
  
  // Reglas específicas para TypeScript
  ...nextTs,

  // Ignorar carpetas de build y archivos generados
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "dist/**",
    "next-env.d.ts",
    "public/**",
    "**/*.min.js",
    "**/aris-eternal-flowers/**", // La carpeta anidada que ya borraste
  ]),

  // Reglas personalizadas del proyecto
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
]);

export default eslintConfig;
