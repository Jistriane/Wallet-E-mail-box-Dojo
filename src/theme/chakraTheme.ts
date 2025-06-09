import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  colors: {
    primary: "#23f7dd",
    secondary: "#6c5ce7",
    background: "#1a1a1a",
    text: "#ffffff",
    error: "#ff6b6b",
    success: "#51cf66",
    warning: "#ffd43b",
    blue: {
      50: "#E6F6FF",
      100: "#BAE3FF",
      200: "#7CC4FA",
      300: "#47A3F3",
      400: "#2186EB",
      500: "#0967D2",
      600: "#0552B5",
      700: "#03449E",
      800: "#01337D",
      900: "#002159"
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923"
    }
  },
  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif"
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: "4px",
      },
      variants: {
        solid: {
          bg: "primary",
          color: "background",
          _hover: { opacity: 0.9 },
          _disabled: { opacity: 0.5, cursor: "not-allowed" },
        },
        outline: {
          borderColor: "primary",
          color: "primary",
          _hover: { bg: "rgba(35, 247, 221, 0.1)" },
        },
        ghost: {
          color: "primary",
          _hover: { bg: "rgba(35, 247, 221, 0.1)" },
        }
      },
      sizes: {
        lg: {
          h: "48px",
          minW: "48px",
          fontSize: "lg",
          px: "24px",
        },
        md: {
          h: "40px",
          minW: "40px",
          fontSize: "md",
          px: "16px",
        },
        sm: {
          h: "32px",
          minW: "32px",
          fontSize: "sm",
          px: "12px",
        }
      }
    },
    Input: {
      baseStyle: {
        field: {
          bg: "rgba(255,255,255,0.1)",
          borderColor: "rgba(255,255,255,0.2)",
          color: "text",
          _focus: { borderColor: "primary" },
          _hover: { borderColor: "rgba(255,255,255,0.3)" },
          _placeholder: { color: "gray.400" }
        },
      },
      sizes: {
        lg: {
          field: {
            h: "48px",
            fontSize: "lg",
            px: "16px",
          }
        },
        md: {
          field: {
            h: "40px",
            fontSize: "md",
            px: "12px",
          }
        },
        sm: {
          field: {
            h: "32px",
            fontSize: "sm",
            px: "8px",
          }
        }
      }
    },
    Card: {
      baseStyle: {
        container: {
          bg: "rgba(255,255,255,0.05)",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.1)",
          p: "24px"
        }
      }
    },
    Heading: {
      baseStyle: {
        fontWeight: 600,
        color: "text"
      }
    },
    Text: {
      baseStyle: {
        color: "text"
      }
    }
  }
}); 