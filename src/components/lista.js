import { useState, useEffect} from 'react';
import './lista.css';
function Lista() {

    const contatosSimulados = [
        { id: 1, nome: "Alice Santos", email: "alice@email.com" },
        { id: 2, nome: "Bruno Lima", email: "bruno@email.com" },
        { id: 3, nome: "Carla Souza", email: "carla@email.com" },
        { id: 4, nome: "Diego Martins", email: "diego@email.com" },
        { id: 5, nome: "Elaine Rocha", email: "elaine@email.com" },
        { id: 6, nome: "Fernando Dias", email: "fernando@email.com" },
        { id: 7, nome: "Gabriela Tavares", email: "gabriela@email.com" },
        { id: 8, nome: "Henrique Moraes", email: "henrique@email.com" },
        { id: 9, nome: "Isabela Costa", email: "isabela@email.com" },
        { id: 10, nome: "João Pereira", email: "joao@email.com" },
        { id: 11, nome: "Karina Melo", email: "karina@email.com" },
        { id: 12, nome: "Leonardo Cunha", email: "leonardo@email.com" },
        { id: 13, nome: "Mariana Lopes", email: "mariana@email.com" },
        { id: 14, nome: "Nicolas Barreto", email: "nicolas@email.com" },
        { id: 15, nome: "Otávio Lima", email: "otavio@email.com" },
      ];

    const [contato, setContato] = useState([]);

    useEffect(() => {
        setContato(contatosSimulados);
        console.log('Página de lista carregada');
        return () => {
            console.log('Saindo da página de lista');
        };
    }, []);

    const count = contato.length;

    return <div>
        <h1>Lista de Contatos</h1>
        <h4>Total de contatos: {count}</h4>
        <table>
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
                {contato.map((item, idx) => (
                    <tr key={idx}>
                        <th id="nome">{item.nome}</th>
                        <th id="email">e-mail: {item.email}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}


export default Lista;