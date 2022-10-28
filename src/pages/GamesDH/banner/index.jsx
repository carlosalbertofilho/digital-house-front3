import './style.scss'
export function BannerMain(props){

    return(
        <div className={props.class}>
            <div className='bannerBox'>
                <div className="title">
                    <h3>Tchotchoza Games</h3>
                    <h1>PROMOS OU</h1>
                    <h2>DESCONTOZURAS?</h2>
                </div>
                <p className='destaque'>O trocadilho é ruim mas as promoções não!</p>
                <p>Aproveite as assombrosas ofertas de Halloween.</p>
            </div>
        </div>
    )
}