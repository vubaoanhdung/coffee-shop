import "./styles/item_card.css";
import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
	const { name, description, price, imageSource, calories } = item;
	const renderButton = () => {
		return (
			<Link to={`/menu/${item._id}`} className="ui blue button">
				Edit
			</Link>
		);
	};
	return (
		<div className="five wide column">
			<div className="ui card">
				<div className="image">
					<img src={imageSource} alt={description} />
				</div>
				<div className="content">
					<div style={{ fontSize: "24px" }} className="header">
						<b>{name}</b>
					</div>
					<div
						style={{ fontSize: "16px" }}
						className="meta"
					>{`${calories} calories`}</div>
					<div style={{ fontSize: "16px" }} className="description">
						{description}
					</div>
					<h4 className="ui header">{`$ ${price}`}</h4>
					{renderButton()}
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
