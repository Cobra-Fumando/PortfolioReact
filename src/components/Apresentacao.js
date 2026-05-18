import './Apresentacao.css'
import Cobra from './Images/Cobra.jfif'

function Apresentacao(){
    return(
        <div className='Apresentar'>
            <div className='Imagem'>
                <img src={Cobra} alt='Foto perfil'></img>
                <h1><strong>Olá, eu sou Thiago Zanini </strong></h1>
            </div>

            <h2>Desenvolvedor Web em formação</h2>

            <p>
                Focado em React, C#, .NET e PostgreSQL.
                Construo aplicações web e estou evoluindo como full stack.
            </p>

            <p>
                <strong>Ciência da Computação (1 Semestre)</strong>
            </p>
        </div>
    )
}

export default Apresentacao