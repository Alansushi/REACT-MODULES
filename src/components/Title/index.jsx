import './Title.css'
export default function Title(props){
    return(
        <h1>{props.text.toUpperCase()}</h1>
    )
}
