import './style.scss'
import youtube01 from './../../assets/image/youtube01.png'
import { QuintaAulaItem } from '../aula05'

export function QuartaAula(){

    const componentsFinded = [
        {
            id: 1
            , title: 'Video Componenet'
            , image: youtube01
            , text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab laborum molestiae, quisquam odit fugiat facilis ex deserunt aspernatur autem nihil cumque eveniet quod at nam laboriosam modi pariatur? Explicabo!'
        }
        , {
            id: 2
            , title: 'Input Componenet'
            , image: youtube01
            , text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab laborum molestiae, quisquam odit fugiat facilis ex deserunt aspernatur autem nihil cumque eveniet quod at nam laboriosam modi pariatur? Explicabo!'
        }
    ]

    return (

        <div className="quarta-aula-component">
            <h1 className='main-title'>Componentes identifificados</h1>

            <ul className='components-finded'>

                {                   

                    componentsFinded.map(
                        component => {
                            return(
                                <QuintaAulaItem item={component}/>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}