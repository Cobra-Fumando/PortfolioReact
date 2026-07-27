import './Apresentacao.css'
import Cobra from './Images/Cobra.jfif'

function Apresentacao(){
    return(
        <div className='Apresentar'>

            <h1><strong>Olá, eu sou Thiago Zanini </strong></h1>

            <h2>Desenvolvedor Web em formação</h2>

            <p>
                Focado no desenvolvimento de aplicações com C#, .NET e ASP.NET Core, 
                com experiência prática na construção de APIs REST, autenticação JWT, Entity Framework Core, PostgreSQL, 
                Redis e RabbitMQ. Também possuo conhecimentos em React, 
                permitindo atuar na integração entre backend e frontend.
            </p>
        </div>
    )
}

export default Apresentacao