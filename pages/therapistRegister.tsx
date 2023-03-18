import {
	Box,
	Button,
	Card,
	CardContent,
	FormControl,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { Upload } from "mdi-material-ui";
// import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import $ from "jquery";

const therapistRegister = () => {
	const [formType, setFormType] = useState("Register");
	const [formValues, setFormValues] = useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
		confirmPassword: "",
		location: "",
		phoneNo: "",
		cv: null,
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
							// alert(formValues);
							// localStorage.setItem("test", JSON.stringify(formValues));
							e.preventDefault();
							$.post(
								"https://healthcaresys2121.pythonanywhere.com/therapist/signup/",

								formValues,

								function (data, status) {
									if (status === "success") {
										console.log("Post successfully created!", data);
									}
								},

								"json"
							);
						}}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography
									fontSize={25}
									fontWeight={"bold"}
									textAlign={"center"}
								>
									Therapist {formType}
								</Typography>
							</Grid>
							{formType === "Register" && (
								<>
									<Grid item xs={12} md={6}>
										<TextField
											fullWidth
											value={formValues.fname}
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
									<Grid item xs={12} md={6}>
										<TextField
											fullWidth
											value={formValues.phoneNo}
											onChange={(val) => {
												setFormValues({
													...formValues,
													phoneNo: val.target.value,
												});
											}}
											id="outlined-multiline-flexible"
											label="Phone No."
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<FormControl fullWidth>
											<Button
												variant="contained"
												component="label"
												startIcon={<Upload />}
											>
												Upload
												<input
													hidden
													accept="image/png,image/jpeg,image/jpg,text/csv,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
													type="file"
													onChange={(e) => {
														setFormValues({
															...formValues,
															cv: e.target.value,
														});
													}}
												/>
											</Button>
										</FormControl>
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

export default therapistRegister;
