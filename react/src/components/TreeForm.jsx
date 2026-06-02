import { useRef, useState } from "react";
import Card from "../wrappers/Card";
import Swal from "sweetalert2"

const TreeForm = ({ sendDataToApp }) => {

    const [fatipusState,setFatipus] = useState();
    const darabszamRef = uesRef();
    const megjegyzesRef = useRef(); 

    const handleSubmit = (event) =>{
        event.preventDefault();
        summarizeTreeData();
    }
    

    const summarizeTreeData = () => {
        const fatipus = fatipusState
        const darabszam = darabszamRef.current.value
        const megjegyzes = megjegyzesRef.current.value

        if(!fatipus || !darabszam || !megjegyzes){
            Swal.fire({
                icon: "error",
                title: "Hiba",
                text: "Kérem töltse ki a kötelező mezőket!"
            })
            return;
        }
    }


    return (
        <Card>
            <div>
                <h2>Farendeles</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fatpus">Választható fatípus:</label>
                    <select name="" id="fatipus" onChange={(e) => setFatipus(e.target.value)}>
                        <option value="Barack csemete">Barackfa csemete</option>
                        <option value="Cseresznyefa csemete">Cseresznyefa csemete</option>
                        <option value="Gesztenyefa csemete">Gesztenyefa csemete</option>
                        <option value="Almafa csemete">Almafa csemete</option>
                    </select>

                    <label htmlFor="darabszam">Hány darab facsemetét vásárol</label>
                    <input type="number" id="darabszam" ref={darabszamRef}/>

                    <label htmlFor="megjegyzes">Megjegyzések:</label>
                    <input type="text" name="" id="megjegyzes" ref={megjegyzesRef}/>

                    <button type="submit">
                        Küldés
                    </button>
                </form>
            </div>
        </Card>
    )
}


export default TreeForm;