import Swal from "sweetalert2";
import Card from "../wrappers/Card";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/loginContext";
import styles from "./TreeItem.module.css"


const TreeItem = ({tree, deleteTree}) => {

    const {isLogged} = useAuth()
    console.log(tree.id)
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Biztosan törölni szeretnéd ezt az facsemetét?");
        if (confirmDelete) {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token"),
            },
        });
            if (response.ok) {
                Swal.fire({
                icon: "success",
                title: "Sikeres törlés",
                text: "A facsemete sikeresen törölve lett!",
                });
                deleteTree(id);
            } else {
                Swal.fire({
                icon: "error",
                title: "Hiba",
                text: "A facsemete törlése nem sikerült!",
                });
            }
        }
    };
    return(
        <>
        <Card>
            <div className={styles.container}>
                <h3 className={styles.product}>{tree.name}</h3>
                <img src={tree.img_url} alt={tree.name} title={tree.name}/>
            </div>
            {isLogged && <button onClick={() => handleDelete(tree.id)} className={styles.button}>Törlés</button>}
            <NavLink to={`/details/${tree.id}`}>
                <button className={styles.button}>Részletek</button>
            </NavLink>
        </Card>
        </>
    )
}

export default TreeItem;