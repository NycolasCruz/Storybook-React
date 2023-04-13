import { HeightCalculator } from "./components/HeightCalculator"
import { Logos } from "./components/Logos"

export function App() {
	return (
		<div id="app">
			<Logos />
			<h1>Calculadora de Altura</h1>
			<HeightCalculator resultLabel="Sua altura é:" disabled />
		</div>
	)
}
