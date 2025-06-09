/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#E6F6FF',
                    100: '#BAE3FF',
                    200: '#7CC4FA',
                    300: '#47A3F3',
                    400: '#2186EB',
                    500: '#0967D2',
                    600: '#0552B5',
                    700: '#03449E',
                    800: '#01337D',
                    900: '#002159',
                },
                secondary: {
                    50: '#F0FDF4',
                    100: '#DCFCE7',
                    200: '#BBF7D0',
                    300: '#86EFAC',
                    400: '#4ADE80',
                    500: '#22C55E',
                    600: '#16A34A',
                    700: '#15803D',
                    800: '#166534',
                    900: '#14532D',
                },
                background: '#1A202C',
                text: '#E2E8F0',
                error: '#E53E3E',
                success: '#38A169',
                warning: '#D69E2E',
                gray: {
                    50: '#F7FAFC',
                    100: '#EDF2F7',
                    200: '#E2E8F0',
                    300: '#CBD5E0',
                    400: '#A0AEC0',
                    500: '#718096',
                    600: '#4A5568',
                    700: '#2D3748',
                    800: '#1A202C',
                    900: '#171923',
                },
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                body: ["Inter", "system-ui", "sans-serif"],
                heading: ["Inter", "system-ui", "sans-serif"]
            },
            spacing: {
                "4.5": "1.125rem",
                "5.5": "1.375rem",
                "6.5": "1.625rem",
                "7.5": "1.875rem",
                "8.5": "2.125rem",
                "9.5": "2.375rem"
            },
            borderRadius: {
                "4xl": "2rem"
            }
        },
    },
    plugins: [],
}