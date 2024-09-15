//require("dotenv").config();
//import { string } from "astro/zod";
import React from "react";
import { useForm } from "react-hook-form";
import CheckboxGroup from "../components/Checkbox.jsx";
import Radio from "../components/Radio.jsx";
import Select from "../components/Select.jsx";

function RegisterForm() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm();

	// const form = document.querySelector("#mc-embedded-subscribe-form");
	// const formData = new FormData(form);
	// const dat = new URLSearchParams(formData);

	const onSubmit = async (data) => {
		try {
		

			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log(JSON.stringify(data));

			fetch("https://reqres.in/api/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					//"Content-Type": "application/x-www-form-urlencoded",
				},
				body: data,
			})
				.then((res) => res.json())
				.then((data) => console.log(data));

			

			//throw new Error();
		} catch (error) {
			setError("root", {
				message: "You have already subscribed",
			});
			// console.log(err.status);
			// res.sendFile(`${__dirname}/failure.html`);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid" id="mc-embedded-subscribe-form">
			<div>
				<label htmlFor="firstName" className="visuallyhidden">
					First Name
				</label>
				<input
					type="text"
					id="firstName"
					placeholder="First Name *"
					aria-invalid={errors.firstName ? "true" : "false"}
					{...register("FNAME", {
						required: "First name is required",
						pattern: { value: /^[A-Za-z]+$/i, message: "Please enter a valid first name" },
					})}
				/>
				<span className="helperText">First Name *</span>
				{errors.FNAME && <p>{errors.FNAME.message}</p>}
			</div>

			<div>
				<label htmlFor="lastName" className="visuallyhidden">
					Last Name
				</label>
				<input
					type="text"
					id="lastName"
					placeholder="Last Name *"
					{...register("LNAME", {
						required: "Last name is required",
						pattern: { value: /^[A-Za-z]+$/i, message: "Please enter a valid last name" },
					})}
				/>
				<span className="helperText">Last Name</span>
				{errors.LNAME && <p>{errors.LNAME.message}</p>}
			</div>

			<div>
				<label htmlFor="email" className="visuallyhidden">
					Email
				</label>
				<input
					type="email"
					id="email"
					placeholder="Email *"
					{...register("EMAIL", {
						required: "Email is required",
						pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Please enter a valid email" },
					})}
				/>
				<span className="helperText">Email</span>
				{errors.EMAIL && <p className="errorMsg">{errors.EMAIL.message}</p>}
			</div>

			<div>
				<label htmlFor="phone" className="visuallyhidden">
					Phone
				</label>
				<input type="tel" id="phone" placeholder="Phone" {...register("PHONE")} />
				<span className="helperText">Phone</span>
			</div>

			<div>
				{/* <Select name="hear" /> */}
				<select {...register("HEAR", { required: false })} className="select">
					<option value="">How did you hear about us?</option>
					<option value="A">Option A</option>
					<option value="B">Option B</option>
				</select>
			</div>

			<div className="grid-columns-span">
				{/* <Radio /> */}
				<input {...register("RADIO", { required: false })} type="radio" value="Yes" />
				<input {...register("RADIO", { required: false })} type="radio" value="No" />
			</div>

			<div className="grid-columns-span">
				{/* <CheckboxGroup name="CheckboxGroup" /> */}
				<input {...register("CHECKBOX", { required: false })} type="checkbox" value="Yes" />
				<input {...register("CHECKBOX", { required: false })} type="checkbox" value="No" />
			</div>

			<div className="grid-columns-span">
				<label htmlFor="comments" className="visuallyhidden">
					Comments
				</label>
				<textarea type="text" rows="5" id="comments" placeholder="Comments" {...register("COMMENTS")}></textarea>
				<span className="helperText">Comments</span>
			</div>

			<div className="grid-columns-span">
				{errors.root && <p className="errorMsg">{errors.root.message}</p>}
				<button type="submit" className="button" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</div>

			<div>
				<p className="disclaimer">Disclaimer...</p>
			</div>
		</form>
	);
}

export default RegisterForm;
