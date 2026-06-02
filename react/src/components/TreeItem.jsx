import Swal from "sweetalert2";
import Card from "../wrappers/Card";

const TreeItem = ({tree}) => {

    return(
        <>
        <Card>
            <div>
                <h3>{tree.name}</h3>
                <img src={tree.img_url} alt={tree.name} title={tree.name}/>
                    
                <button>Részletek</button>
            </div>
        </Card>
        </>
    )
}

export default TreeItem;