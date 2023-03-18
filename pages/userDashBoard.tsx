import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { Account, Pencil, ContentSave } from "mdi-material-ui";
import { useEffect, useState } from "react";

const userDashBoard = () => {
	const [formValues, setFormValues] = useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
		confirmPassword: "",
		location: "",
		phoneNo: "",
	});
	useEffect(() => {
		//get data from api here and update formValues
	}, []);
	const [editing, setEditing] = useState(false);
	return (
		<Grid container spacing={2} padding={2}>
			<Grid item xs={5} md={3}>
				<Card
					sx={{
						paddingLeft: 2,
						paddingRight: 2,
						height: "calc(100vh - 120px)",
					}}
				>
					<Grid container spacing={5}>
						<Grid
							item
							xs={12}
							display={"flex"}
							alignItems={"center"}
							justifyContent={"center"}
						>
							<Account sx={{ fontSize: "15rem" }} />
						</Grid>
						<Grid item xs={12}>
							<form onSubmit={() => {}}>
								<Grid container spacing={2}>
									<Grid
										item
										xs={12}
										display={"flex"}
										justifyContent={"flex-end"}
									>
										{!editing ? (
											<Button
												onClick={() => {
													setEditing(!editing);
												}}
												variant="contained"
											>
												<Pencil />
											</Button>
										) : (
											<Button
												onClick={() => {
													setEditing(!editing);
												}}
												variant="contained"
											>
												<ContentSave />
											</Button>
										)}
									</Grid>

									<Grid item xs={12}>
										<TextField
											fullWidth
											value={formValues.fname}
											disabled={!editing}
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
									<Grid item xs={12}>
										<TextField
											fullWidth
											value={formValues.lname}
											disabled={!editing}
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
									<Grid item xs={12}>
										<TextField
											fullWidth
											value={formValues.email}
											disabled={!editing}
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

									<Grid item xs={12}>
										<TextField
											fullWidth
											value={formValues.location}
											disabled={!editing}
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
								</Grid>
							</form>
						</Grid>
					</Grid>
				</Card>
			</Grid>
			<Grid item xs={7} md={9}>
				{/* <Grid container spacing={2}> */}
				<Grid item xs={12}>
					<Card sx={{ height: "calc(100vh - 120px)" }}>
						<CardHeader title="Appoinments" />
						<CardContent>
							There is no appoinment currently scheduled for you
						</CardContent>
					</Card>
				</Grid>
				{/* <Grid item xs={12}>
						<Card sx={{ height: "100%" }}></Card>
					</Grid> */}
				{/* </Grid> */}
			</Grid>
		</Grid>
	);
};

export default userDashBoard;
