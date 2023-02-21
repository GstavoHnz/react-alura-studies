import React from 'react';
import Button from '..';


export default class formDeafult extends React.Component {
    render(){
        return(
            <form>
                <div>
                    <label htmlFor='tarefa'>
                        <span>
                            Adicione um novo estudo
                        </span>
                    </label>
                    <input 
                        type="text"
                        name='tarefa'
                        id='tarefa'
                        placeholder='Oque voce deseja estudar?'
                        required
                    />
                </div>
                <div>
                <label htmlFor='tempo'>
                    <span>
                        tempo
                    </span>
                </label>
                    <input 
                        type="time"
                        step="1"
                        name='tempo'
                        id='tempo'
                        min="00:00:00"
                        max="01:30:00"
                        required 
                    />
                </div>
                <Button />
            </form>
        )
    }
}