import { useParams } from "react-router-dom"

function Produto() {

    const { id } = useParams();

    return(
        <div>
            <h2>Produto</h2>
            <span>{id}</span>
        </div>
    )
}

export default Produto