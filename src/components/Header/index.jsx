import styles from './Header.modules.css';


const Header = () => {

    return (
        <div className="container">
            <header>
            <h1>Calculadora IMC</h1>
            <img src="https://www.saudebemestar.pt/media/89347/obesidade.jpg" alt="BMI illustrative image"/>

            <p>O índice de massa corporal (IMC) é uma ferramenta importante para avaliar a relação entre o peso e a altura de uma pessoa. Ele nos fornece uma medida rápida e fácil de obter uma noção geral sobre a adequação do peso de uma pessoa.
                <br/> O IMC é valioso porque pode nos ajudar a identificar possíveis problemas de saúde relacionados ao peso. Um IMC elevado pode indicar sobrepeso ou obesidade, que estão associados a um maior risco de desenvolver condições como diabetes, doenças cardíacas e pressão alta. Por outro lado, um IMC muito baixo pode ser um indicativo de desnutrição ou outros problemas de saúde.
                <br/>No entanto, é importante destacar que o IMC é uma medida simplificada e não leva em consideração fatores como a composição corporal, massa muscular ou distribuição de gordura. Portanto, é fundamental utilizar o IMC como uma ferramenta inicial de avaliação e combinar com outras medidas, como avaliação clínica e análise da composição corporal, para uma avaliação mais precisa.
                <br/>O IMC também pode ser uma referência útil para o estabelecimento de metas de saúde e bem-estar. Se alguém está acima do peso ou abaixo do peso adequado, o IMC pode ajudar a estabelecer objetivos realistas e acompanhar o progresso ao longo do tempo.
                <br/> No entanto, é importante lembrar que cada pessoa é única e o peso adequado pode variar de acordo com a constituição individual, estilo de vida e outros fatores. Portanto, é sempre recomendado buscar orientação de profissionais de saúde, como médicos e nutricionistas, para uma avaliação completa e personalizada da saúde e do peso.</p>
            </header>
        </div>
    )
}

export default Header;