
function Student(props) {
    console.warn(props.name)
    return (
        <div  style={{backgroundColor:"skyblue",margin:10}} >
            <h1>hello {props.name}</h1>
            <h2>email {props.email}</h2>
            <h4>address {props.other.address}</h4>
        </div>
    )
}
export default Student