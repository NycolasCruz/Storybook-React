import { HeightCalculator } from "./components/HeightCalculator"
import { Logos } from "./components/Logos"

export function App() {
	return (
		<>
			<Logos />
			<h1>Calculadora de Altura</h1>
			<HeightCalculator resultLabel="Sua altura é:" disabled />
		</>
	)
}
