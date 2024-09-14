import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Controller } from "react-hook-form";
import "../styles/checkboxes.css";

// const CheckboxGroup = () => (
// 	<div className="checkboxesContainer">
// 		<Checkbox.Root className="CheckboxRoot" id="c1">
// 			<Checkbox.Indicator className="CheckboxIndicator">
// 				<CheckIcon />
// 			</Checkbox.Indicator>
// 		</Checkbox.Root>
// 		<label className="Label" htmlFor="c1">
// 			Checkbox 1
// 		</label>

// 		<Checkbox.Root className="CheckboxRoot" id="c2">
// 			<Checkbox.Indicator className="CheckboxIndicator">
// 				<CheckIcon />
// 			</Checkbox.Indicator>
// 		</Checkbox.Root>
// 		<label className="Label" htmlFor="c2">
// 			Checkbox 2
// 		</label>
// 	</div>
// );

const CheckboxGroup = (props) => (
	<Controller
		{...props}
		render={({ field }) => (
			<div className="checkboxesContainer">
				<Checkbox.Root {...field} value={undefined} checked={field.value1} onCheckedChange={field.onChange} className="CheckboxRoot" id="c1">
					<Checkbox.Indicator className="CheckboxIndicator">
						<CheckIcon />
					</Checkbox.Indicator>
				</Checkbox.Root>
				<label className="Label" htmlFor="c1">
					Checkbox 1
				</label>

				<Checkbox.Root {...field} value={undefined} checked={field.value2} onCheckedChange={field.onChange} className="CheckboxRoot" id="c2">
					<Checkbox.Indicator className="CheckboxIndicator">
						<CheckIcon />
					</Checkbox.Indicator>
				</Checkbox.Root>
				<label className="Label" htmlFor="c2">
					Checkbox 2
				</label>
			</div>
		)}
	/>
);

export default CheckboxGroup;
