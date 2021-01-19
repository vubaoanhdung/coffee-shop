import React from "react";
import { useForm } from "react-hook-form";

function ItemForm({ onSubmit, initialData, onDelete }) {
	const { register, handleSubmit, errors } = useForm();

	const onFormSubmit = (formData) => {
		onSubmit(formData);
	};

	return (
		<div>
			<form className="ui form" onSubmit={handleSubmit(onFormSubmit)}>
				<div className="field">
					<label>Name</label>
					<br />
					<input
						type="text"
						name="name"
						defaultValue={initialData ? initialData.name : ""}
						ref={register({
							required: {
								value: true,
								message: "Name is required",
							},
						})}
						style={{ border: errors.name ? "1px solid red" : "" }}
					/>
					{errors.name && errors.name.type === "required" && (
						<p>{errors.name.message}</p>
					)}
				</div>

				<div className="field">
					<label>Calories</label>
					<br />
					<input
						type="text"
						name="calories"
						ref={register({
							required: {
								value: true,
								message: "Calories is required",
							},
						})}
						defaultValue={initialData ? initialData.calories : ""}
						style={{ border: errors.calories ? "1px solid red" : "" }}
					/>
					{errors.calories && errors.calories.type === "required" && (
						<p>{errors.calories.message}</p>
					)}
				</div>

				<div className="field">
					<label>Description</label>
					<br />
					<textarea
						type="text"
						name="description"
						ref={register({
							required: {
								value: true,
								message: "Description is required",
							},
						})}
						defaultValue={initialData ? initialData.description : ""}
						style={{ border: errors.description ? "1px solid red" : "" }}
					/>
					{errors.description && errors.description.type === "required" && (
						<p>{errors.description.message}</p>
					)}
				</div>

				<div className="field">
					<label>Price</label>
					<br />
					<input
						type="number"
						step="0.01"
						name="price"
						ref={register({
							required: {
								value: true,
								message: "Price is required",
							},
						})}
						defaultValue={initialData ? initialData.price : ""}
						style={{ border: errors.price ? "1px solid red" : "" }}
					/>
					{errors.price && errors.price.type === "required" && (
						<p>{errors.price.message}</p>
					)}
				</div>

				<div className="field">
					<label>Image Source</label>
					<br />
					<input
						type="text"
						name="image_source"
						ref={register({
							required: {
								value: true,
								message: "Imgage Source is required",
							},
						})}
						defaultValue={initialData ? initialData.imageSource : ""}
						style={{ border: errors.image_source ? "1px solid red" : "" }}
					/>
					{errors.image_source && errors.image_source.type === "required" && (
						<p>{errors.image_source.message}</p>
					)}
				</div>
				<div>
					<button className="ui blue button" type="submit">
						Submit
					</button>
				</div>
			</form>

			{/* if onDelete is not passed, do not display the delete button*/}
			{onDelete && (
				<button onClick={onDelete} className="ui negative button">
					Delete Item
				</button>
			)}
		</div>
	);
}

export default ItemForm;
