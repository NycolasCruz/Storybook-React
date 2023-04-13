import { useState, ChangeEvent } from "react"

import Form from "react-bootstrap/Form"

import { MaskedFormControl } from "../MaskedFormControl"

import "./styles.scss"

type Props = {
    resultLabel: string
}

export function HeightCalculator({resultLabel}: Props) {
    const [height, setHeight] = useState("")

    return(
		<div className="card">
            <Form.Group className="form-group" controlId="height">
                <Form.Label>Digite sua altura</Form.Label>
				<MaskedFormControl
					placeholder="Digite sua altura"
					mask={Number}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setHeight(event.target.value)}
				/>
            </Form.Group>

            <Form.Group className="form-group" controlId="value">
                <Form.Label>{resultLabel}</Form.Label>
                <Form.Control placeholder={resultLabel} value={height} readOnly />
            </Form.Group>
        </div>
    )
}