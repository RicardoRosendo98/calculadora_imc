import { useEffect, useState } from "react";

import styles from './Calculator.modules.css';




const Calculator = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    useEffect(() => {
        console.log("Mudamos o altura:" + altura, "Mudamos o peso:" + peso)
    }, [altura, peso]);

    const renderizaResultado = () => {
        if (altura > 0 && peso > 0) {
            const metroAltura = altura / 100;
            const imc = peso / (metroAltura * metroAltura);
            console.log(imc)
            return imc;
        } else {
            return 0;
        }
    };

    return (
        <div className="container">
            <form>
                <label htmlFor="Altura">Digite o Altura</label>
                <input type="number" required onChange={({ target }) => setAltura(parseInt(target.value))} />
                <label htmlFor="Peso">Digite o Peso</label>
                <input type="number" required onChange={({ target }) => setPeso(parseInt(target.value))} />
                <h3>IMC = {renderizaResultado().toFixed(1)}</h3>
            </form>
        </div>
    )
}

export default Calculator;