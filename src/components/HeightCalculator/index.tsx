import { useState, ChangeEvent } from "react"

import Form from "react-bootstrap/Form"

import { MaskedFormControl } from "../../utils/mixins"

import "./styles.scss"

export function HeightCalculator() {
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
                <Form.Label>Resultado</Form.Label>
                <Form.Control placeholder="Resultado" value={height} readOnly />
            </Form.Group>
        </div>
    )
}