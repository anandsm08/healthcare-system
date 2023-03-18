import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/compnents/NavBar";
import { ThemeProvider, createTheme } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
	const theme = createTheme({
		palette: {
			primary: {
				// light: will be calculated from palette.primary.main,
				main: "#516391",
				// dark: will be calculated from palette.primary.main,
				// contrastText: will be calculated to contrast with palette.primary.main
			},
			secondary: {
				light: "#0066ff",
				main: "#0044ff",
				// dark: will be calculated from palette.secondary.main,
				contrastText: "#ffcc00",
			},
			// Provide every color token (light, main, dark, and contrastText) when using
			// custom colors for props in Material UI's components.
			// Then you will be able to use it like this: `<Button color="custom">`
			// (For TypeScript, you need to add module augmentation for the `custom` value)

			// Used by `getContrastText()` to maximize the contrast between
			// the background and the text.
			contrastThreshold: 3,
			// Used by the functions below to shift a color's luminance by approximately
			// two indexes within its tonal palette.
			// E.g., shift from Red 500 to Red 300 or Red 700.
			tonalOffset: 0.2,
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
