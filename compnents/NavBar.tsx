import { Box, Card, Typography } from "@mui/material";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<Card
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					position: "fixed",
					top: "0",
					zIndex: "1000",
					margin: "0",
					padding: "0",
				}}
			>
				<Box display={"flex"} alignItems={"center"} paddingLeft={2}>
					<Link href={"/"}>MindSpace</Link>
				</Box>

				<Box display={"flex"} alignItems={"center"} padding={1}>
					<Hamburger toggled={isOpen} toggle={setIsOpen} />
				</Box>
			</Card>

			{/* <Card
				sx={{
					width: "200px",
				}}
			></Card> */}
		</>
	);
};

export default NavBar;
