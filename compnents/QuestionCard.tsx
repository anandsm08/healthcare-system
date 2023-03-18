import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	FormControl,
	Grid,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
interface QuestionCardProps {
	qs: any[];
	// question: string;
	// options: string[];
	// correctIndex: number;
	imageSource: string[];
}
const QuestionCard = ({ qs, imageSource }: QuestionCardProps) => {
	const questionContainerRef = useRef(null);
	const [question, setQuestion] = useState<string>("");
	const [options, setOptions] = useState<string[]>([]);
	const [curI, setCurI] = useState<number>(1);
	const [questionFontSize, setQuestionFontSize] = useState<number>(30);
	const [finalResult, setFinalResult] = useState<string>("");
	// let curI = 0;
	// let finalResult = "";
	const animateQuestions = (optionNo: number) => {
		if (curI < qs.length) {
			setFinalResult(
				finalResult +
					"Q) " +
					qs[curI].question +
					" " +
					"answer: " +
					qs[curI].options[optionNo] +
					" "
			);
			setCurI(curI + 1);
			console.log(curI);
			if (questionContainerRef.current) {
				questionContainerRef.current.animate(
					{ opacity: 0 },
					{ duration: 100, fill: "forwards" }
				);

				setTimeout(() => {
					setOptions(qs[curI].options);
					setQuestion(qs[curI].question);
					setTimeout(() => {
						questionContainerRef.current.animate(
							{ opacity: 1 },
							{ duration: 1000, fill: "forwards" }
						);
					});
				}, 150);
			}
		} else {
			console.log(finalResult);
			fetch("https://healthcaresys2121.pythonanywhere.com/", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ q: finalResult }),
			}).then(async (res) => {
				let temp = JSON.parse(await res.text());
				setQuestionFontSize(20);
				setQuestion(temp.title);
				console.log(temp);
				clearInterval(interval);
			});
			let k = 1;
			let interval = setInterval(() => {
				let temp = "Loading";
				k = ((k + 1) % 3) + 1;
				for (let i = 0; i < k; i++) temp += ".";
				setQuestion(temp);
			}, 500);

			setOptions([]);
		}
	};
	useEffect(() => {
		if (qs.length > 0) {
			setQuestion(qs[0].question);
			setOptions(qs[0].options);
		}
		setQuestionFontSize(30);
	}, []);
	return (
		<Card
			sx={{
				minWidth: "400px",
				maxWidth: "1000px",
				borderRadius: 3,
				minHeight: "200px",
			}}
		>
			<CardContent sx={{ height: "100%" }} ref={questionContainerRef}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Grid container spacing={2}>
							<Grid item xs={12} padding={0}>
								<Typography fontWeight={"bold"} fontSize={questionFontSize}>
									{question}
								</Typography>
							</Grid>
							{options.map((x, i) => (
								<Grid key={i} item xs={12}>
									<FormControl fullWidth>
										<Button
											sx={{ borderRadius: 10 }}
											fullWidth
											variant="outlined"
											size="medium"
											onClick={() => animateQuestions(i)}
										>
											{x}
										</Button>
									</FormControl>
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item xs={6}>
						<Box
							display={"flex"}
							justifyContent={"flex-end"}
							alignItems={"center"}
							sx={{
								minHeight: "200px",
								height: "100%",
								aspectRatio: 1,
								backgroundImage: `url(${
									imageSource[curI % imageSource.length]
								})`,
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
						>
							{/* <Image
								width={300}
								height={300}
								src={imageSource}
								alt={"q image"}
							></Image> */}
						</Box>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions sx={{ fontSize: 10 }}>POWERED BY GPT-3</CardActions>
		</Card>
	);
};

export default QuestionCard;
