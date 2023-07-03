import { useState, FormEvent } from "react";
import classNames from "clsx";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { MaskedFormControl } from "../MaskedFormControl";

import "./styles.scss";

type Props = {
	resultLabel: string;
	disabled: boolean;
};

export function HeightCalculator({ resultLabel, disabled }: Props) {
	const [height, setHeight] = useState("");

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		setHeight(String(formData?.get("height")));
	}

	return (
		<>
			<Form onSubmit={(event) => handleSubmit(event)} className="card">
				<Form.Group className="form-group" controlId="height">
					<Form.Label>Digite sua altura</Form.Label>
					<MaskedFormControl
						name="height"
						placeholder="Digite sua altura"
						mask={Number}
					/>
				</Form.Group>

				<Button type="submit">CALCULAR</Button>

				<Form.Group className="form-group" controlId="value">
					<Form.Label>{resultLabel}</Form.Label>
					<Form.Control
						className={classNames(disabled && "disabled")}
						placeholder={resultLabel}
						value={height}
						disabled={disabled}
					/>
				</Form.Group>
			</Form>
		</>
	);
}
