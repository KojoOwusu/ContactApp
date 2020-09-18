import { DeleteOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

interface IContactInput {
	placeholder: string;
	type: string;
	icon?: boolean;
	value?: string;
	id?: number;
	remove?: (arg0: number) => any;
	onChange: (arg1: string) => any;
}

const ContactInput: React.FC<IContactInput> = ({
	placeholder,
	type,
	icon = false,
	value,
	remove = () => {},
	id = 0,
	onChange,
}) => {
	return (
		<div className="contact-input">
			<p>{placeholder}</p>
			{icon ? (
				<Row align="middle" justify="center" gutter={16}>
					<Col span={22}>
						<Input
							placeholder={placeholder}
							value={value}
							type={type}
							onChange={(e) => onChange(e.target.value)}
						/>
					</Col>
					<Col span={2}>
						<DeleteOutlined
							onClick={() => remove(id || 1)}
							style={{ fontSize: "1.2rem" }}
						/>
					</Col>
				</Row>
			) : (
				<Input
					value={value}
					placeholder={placeholder}
					type={type}
					onChange={(e) => onChange(e.target.value)}
				/>
			)}
		</div>
	);
};

ContactInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default ContactInput;
