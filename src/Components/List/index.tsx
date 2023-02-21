import './style.scss'

export default function ListForm(){
    const tarefas = [{
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]


    return(
        <aside className='listaTarefas'>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className='item'>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}