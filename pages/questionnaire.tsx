import QuestionCard from "@/compnents/QuestionCard";
import mindPuzzle from "../public/mindPuzzle.jpg";
import b1 from "../public/b1.jpg";
import b2 from "../public/b2.jpg";
import brainladder from "../public/brainladder.jpg";
import questions from "@/compnents/questions";
import { Box } from "@mui/material";

const questionnaire = () => {
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			height={"calc(100vh - 75px)"}
		>
			<QuestionCard
				qs={questions}
				imageSource={[mindPuzzle.src, b1.src, b2.src, brainladder.src]}
			/>
		</Box>
	);
};

export default questionnaire;
