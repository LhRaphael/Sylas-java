import React from "react";
import TitleApp from "../components/TitleApp";
import { useDisplay } from "../services/DisplayProvider";
import { calcCommand, echoCommand, helpCommand, lsCommand, mkdirCommand, cdCommand} from "../services/ShellFuncs";
import { useUser } from "../services/UserProvider";
import { updateUser } from "../services/UserUpdate";

function InputShell(){
    const {

        comands, setComands, ativoShell, 
        setAtivoShell, setOutputs, handleAppToggle, 
        commandPointer, setCommandPointer
    
    } = useDisplay(); // Hook para acessar o contexto de exibição

    const {user, setUser} = useUser() // Hook para acessar o contexto do usuário

    // salva o comando digitado e a saida do comando
    const saveResponse = (Command, Response) =>{
        setOutputs(prev => [...prev, {
            prompt: Command, 
            response: Response, 
            id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 0
        }])
    }

    const switchComand = async (command) => {
        const commandTarget = command.trim().split(' '); // Extrai o comando principal, removendo espaços e pegando a primeira palavra
        switch(commandTarget[0]){

            case 'clear':
                setOutputs([]); // Limpa os comandos se o comando for 'clear'
            break

            case 'echo':
                const echoResponse = echoCommand(command); // Chama a função echoCommand
                saveResponse(command, echoResponse) // Adiciona o comando e resposta ao output
            break

            case 'calc':
                const calcResponse = calcCommand(command)
                saveResponse(command, calcResponse)
            break

            case 'exit':
                handleAppToggle("Shell")// fecha o terminal
                break

            case 'help':
                const helpResponse = helpCommand(command);
                saveResponse(command, helpResponse) // Adiciona a ajuda ao output
            break

            case 'ls':
                console.log(user)
                const lsResponse = lsCommand(user.dir.id) // Chama a função lsCommand passando o id do diretório do usuário;
                saveResponse(command, lsResponse) // Adiciona a resposta do comando ls ao output
            break

            case 'pwd':
                const pwdResponse = user.dir.path
                saveResponse(command, pwdResponse)
            break

            case 'mkdir':
                const mkdirResponse = mkdirCommand({nameDir: command, dirId: user.dir.id, userEmail: user.email})
                saveResponse(command, mkdirResponse)
                const updatedUser = await updateUser(user.id) // Atualiza o usuário após criar o diretório
                setUser(updatedUser) // Atualiza o contexto do usuário com os novos dados
            break

            case 'cd':
                //verifica se o diretório existe para o usuario atual
                const dirId = user.dir.subDirs.find(item => item.name === commandTarget[1])
                if(dirId.name != ""){
                    const cdResponse = await cdCommand({fatherId: user.dir.id, dirId: dirId.code}) // retorna o novo diretório
                    user.dir = cdResponse
                    saveResponse(command,cdResponse.path) // exibe o caminho do diretório
                }
                else{
                    console.log(user)
                    return alert(commandTarget[1])
                }

            break

            default:
                saveResponse(command,"")
                break
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Previne o comportamento padrão do Enter
            const inputValue = e.target.value.trim(); // Obtém o valor do input e remove espaços
            setAtivoShell(true); // Define o app Shell como ativo
            if (inputValue) {
                try{
                    setComands(prevComands => [...prevComands, inputValue]); // Adiciona o comando ao estado
                    setCommandPointer(commandPointer+1) // adiciona um no ponteiro de comandos, referente ao comando adicionado
                    switchComand(inputValue); 
                    e.target.value = ''; // Limpa o input após o envio
                    console.log('Comando enviado:', inputValue);

                }
                catch (error) {
                    console.error('Erro ao enviar comando:', error); // Loga erros se ocorrerem 
                }
            }
            else{
                console.log('Nenhum comando digitado'); // Loga se o input estiver vazio
                setOutputs(prev => [...prev, {prompt: "", response:""}]); // Adiciona mensagem de erro ao output
            }
            console.log('Comandos:', comands); // Loga os comandos para depuração
            console.log('Ativo Shell:', ativoShell); // Loga o estado ativo do Shell para depuração
        }
        else if(e.key === "ArrowUp"){
            if(commandPointer > 0){
                setCommandPointer(commandPointer-1)
                e.target.value = comands[commandPointer-1]
            }
        }
        else if(e.key === "ArrowDown"){
            if(commandPointer < comands.length){
                setCommandPointer(commandPointer+1)
                e.target.value = comands[commandPointer]
            }
        }
        
    }

    return(
        <>
            <div className="Input-shell-div">
                <span>Sylas@Shell:</span>
                <input type="text" onKeyDown={handleKeyDown}/>
            </div>
        </>
    )
}


function Shell({min, max}) {

    const {outputs, ativoShell} = useDisplay(); // Hook para acessar o contexto de exibição

    const focusInput = () =>{
        const input = document.querySelector('.Input-shell-div input');
        if(input) {
            input.focus(); // Foca no input quando a div é clicada
        }
        console.log('Input focused');
    }

    return(
        <div className={`Shell-main-div ${min ? "minimized" : ""} ${max ? "maximized" : ""}`}>
            <TitleApp title="Shell" Id="Shell"/>
            <section className='Shell-content-div' onClick={focusInput}>

                {ativoShell && outputs.map((out) => (
                    <div key={out.id} className='Shell-command'>
                        <span>Sylas@Shell: </span>
                        <span>{out.prompt}</span>
                        <p>{out.response}</p>
                    </div>
                    
                ))}
                <InputShell />
            </section>
        </div>
    )
}

export default Shell;