import './style.scss'

export function Nav(props){

    const logo = {name: 'Tchotchoza Games'}

    const menuItem = [
         {title: 'STORE'}
        ,{title: 'LIBARY'}
        ,{title: 'COMMUNITY'}
        ,{title: 'ABOUT'}
        ,{title: 'PROFILE'}
    ]

    return(

        <header className={props.class}>
            <div className="logo">
                <h1>{logo.name}</h1>
            </div>
            <div className="menu">
                <ul>
                    {
                        menuItem.map(
                            menu =>  {
                                return(
                                    <li key={menu.title}>
                                        <a href="" target="_blank">{menu.title}</a>
                                    </li> 
                                )
                            }                                
                        )
                    }
                </ul>
            </div>
        </header>
    )
}