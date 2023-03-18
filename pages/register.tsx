import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
// import axios from "axios";
import $ from "jquery";

const register = () => {
	const [formType, setFormType] = useState("Register");
	const [formValues, setFormValues] = useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
		confirmPassword: "",
		location: "",
		phoneNo: "",
	});
	return (
		<Box
			height={"calc(100vh - 75px)"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Card sx={{ width: "70vw", borderRadius: 4 }}>
				<CardContent>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (
								formType === "Register" &&
								formValues.password === formValues.confirmPassword
							)
								// fetch(
								// 	"https://healthcaresys2121.pythonanywhere.com/users/signup/",
								// 	{
								// 		method: "POST",
								// 		// mode: "no-cors",
								// 		body: {
								// 			fname: formValues.fname,
								// 			// lname: formValues?.lname ?? undefined,
								// 			email: formValues.email,
								// 			location: formValues.location,
								// 		},
								// 		headers: {
								// 			Accept: "application/json",
								// 			"Content-Type": "application/json",
								// 			// "Access-Control-Allow-Orgin": "*",

								// 			// "Access-Control-Allow-Headers": "*",
								// 			// "Access-Control-Allow-Headers":
								// 			// 	"accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with",
								// 		},
								// 	}
								// )
								$.post(
									"https://healthcaresys2121.pythonanywhere.com/users/signup/",

									{
										fname: formValues.fname,
										// lname: formValues?.lname ?? undefined,
										email: formValues.email,
										location: formValues.location,
									},

									function (data, status) {
										if (status === "success") {
											console.log("Post successfully created!", data);
										}
									},

									"json"
								);

							// .then((res) => {
							// 	console.log(res);
							// })
							// .catch((err) => console.log(err));
						}}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography
									fontSize={25}
									fontWeight={"bold"}
									textAlign={"center"}
								>
									User {formType}
								</Typography>
							</Grid>
							{formType === "Register" && (
								<>
									<Grid item xs={12} md={6}>
										<TextField
											fullWidth
											value={formValues.fname}
											required
											onChange={(val) => {
												setFormValues({
													...formValues,
													fname: val.target.value,
												});
											}}
											id="outlined-multiline-flexible"
											label="Firstname"
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField
											fullWidth
											value={formValues.lname}
											onChange={(val) => {
												setFormValues({
													...formValues,
													lname: val.target.value,
												});
											}}
											id="outlined-multiline-flexible"
											label="Lastname"
										/>
									</Grid>
								</>
							)}
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									required
									value={formValues.email}
									onChange={(val) => {
										setFormValues({
											...formValues,
											email: val.target.value,
										});
									}}
									id="outlined-multiline-flexible"
									label="Email"
									type="email"
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									required
									value={formValues.password}
									onChange={(val) => {
										setFormValues({
											...formValues,
											password: val.target.value,
										});
									}}
									id="outlined-multiline-flexible"
									label="Password"
									type="password"
								/>
							</Grid>
							{formType === "Register" && (
								<>
									<Grid item xs={12} md={6}>
										<TextField
											fullWidth
											required
											value={formValues.confirmPassword}
											onChange={(val) => {
												setFormValues({
													...formValues,
													confirmPassword: val.target.value,
												});
											}}
											id="outlined-multiline-flexible"
											label="Confirm Password"
											type="password"
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField
											fullWidth
											required
											value={formValues.location}
											onChange={(val) => {
												setFormValues({
													...formValues,
													location: val.target.value,
												});
											}}
											id="outlined-multiline-flexible"
											label="Location"
										/>
									</Grid>
								</>
							)}

							<Grid item xs={12}>
								{formType === "Register" ? (
									<Typography fontSize={12} textAlign={"center"}>
										Already have a account?{" "}
										<a
											style={{ cursor: "pointer" }}
											onClick={() => {
												setFormType("Login");
											}}
										>
											Log In
										</a>
									</Typography>
								) : (
									<Typography fontSize={12} textAlign={"center"}>
										Don't have a account?{" "}
										<a
											style={{ cursor: "pointer" }}
											onClick={() => {
												setFormType("Register");
											}}
										>
											Signup
										</a>
									</Typography>
								)}
							</Grid>
							<Grid
								item
								xs={12}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Button type="submit" variant="contained">
									{formType}
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</Box>
	);
};

export default register;
