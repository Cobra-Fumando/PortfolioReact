import './habilidades.css'

function Habilidades(){
    return(
        <div className='habilidades'>
            <h1>Habilidades</h1>
            <ul>
                <li>C# / .NET (ASP.NET Core, APIs RESTful)</li>
                <li>Autenticação: JWT, Refresh Token, Cookies HttpOnly</li>
                <li>Banco de Dados: PostgreSQL, SQLite, SQL Server</li>
                <li>Arquitetura: Camadas, Dependency Injection, Clean Architecture</li>
                <li>Mensageria em tempo real: SignalR</li>
                <li>Mensageria Assíncrona: RabbitMQ (filas, produtores e consumidores)</li>
                <li>Cache: Redis (cache distribuído e armazenamento temporário)</li>
                <li>Ferramentas: Git, Insomnia, Docker</li>
            </ul>
        </div>
    )
}

export default Habilidades