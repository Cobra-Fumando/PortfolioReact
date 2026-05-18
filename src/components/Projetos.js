import './projetos.css'

function Projetos(){
    return(
        <div className="Projeto">
            <h1>Projetos</h1>
            <p>
                API de Autenticação (C# / ASP.NET Core)
                API RESTful para autenticação segura de usuários
                JWT e Refresh Token com cookies HttpOnly
                Arquitetura em camadas e injeção de dependência
                Integração com PostgreSQL
                Testes de endpoints com Insomnia
            </p>
            <a href="https://github.com/Cobra-Fumando?tab=repositories" target='_blank' className="Botao" rel='noreferrer'>Clique para visualizar</a>
        </div>
    )
}

export default Projetos