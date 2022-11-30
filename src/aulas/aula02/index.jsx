import { MesaAula05 } from '../MesaAula05'
import './styles.scss'

export function SegundaAula() {
  const pList = [
    { p: 'Header' }
    , { p: 'Banner' }
    , { p: 'Buttons' }
    , { p: 'Plans Cards' }
    , { p: 'Sections' }
    , { p: 'Accordion-Container - Perguntas Frequentes' }
    , { p: 'Footer' }
  ]

  return (
    <main>
      <h1>Segunda Aula</h1>
      <h2>Site - <a href={"https://www.starplus.com/en-br"} target={"_blank"} >Star+</a> </h2>
      <br />
      <h3>COMPONENTES DA PÁGINA</h3>
      <ul>
        {
          pList.map(
            list => {
              return (
                <MesaAula05 item={list} />
              )
            }
          )
        }
      </ul>
    </main>

  )
}
