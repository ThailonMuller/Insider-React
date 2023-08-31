import {useState} from 'react' // importação do react para uso do useState()
function Form(){
    function cadastrarUsuario(event){
        event.preventDefault() //Não deixa carregar a página, bom para formulários
        console.log(`Usuário: ${name} Senha: ${password}`)
        console.log("Cadastrou o usuário:")
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div><label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>  
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>              
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form