


export default function StandardImage(props){

    return(
        <>
        <div>
            <img className={props.className} src={props.url} alt={props.alt} />
        </div>
        </>
    )
}