import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import QuestionCard from "@/compnents/QuestionCard";
// import b1 from "../public/b1.jpg";
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	CardMedia,
} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Mindspace</title>
				<meta name="description" content="Mindspace" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Card
					sx={{
						minWidth: "96vw",
						//  minHeight: "90vh"
					}}
				>
					{/* <CardMedia component="img" image={b1?.src ?? ""} alt="" />q */}
					<CardContent></CardContent>
				</Card>
			</main>
		</>
	);
}
