import { useRef, useState } from "react";
import Card from "../wrappers/Card";
import Swal from "sweetalert2"

const TreeForm = ({ sendDataToApp }) => {

    const nameRef = useRef();
    const img_urlRef = useRef();
    const priceRef = useRef();
    const stockRef = uesRef();
    const describtionRef = useRef(); 

    const handleSubmit = (event) =>{
        event.preventDefault();
        summarizeTreeData();
    }
    

    const summarizeTreeData = () => {
        const name = nameRef.current.value;
        const img_url = img_urlRef.current.value;
        const price = priceRef.current.value;
        const stock = stockRef.current.value;
        const describtion = describtionRef.current.value;

        if(!name || !stock || !describtion){
            Swal.fire({
                icon: "error",
                title: "Hiba",
                text: "Kérem töltse ki a kötelező mezőket!"
            })
            return;
        }

        const saveTreeDataToDatabase = async () => {
            try {
                const response = await fetch("http://localhost:3000/products", { 

                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": localStorage.getItem("token"),
                    },
                    body: JSON.stringify({
                        name,
                        img_url,
                        price,
                        stock,
                        description,
                    }),
                });
                if (response.ok) {
                const data = await response.json();
                sendDataToApp(data);
                } else {
                Swal.fire({
                    icon: "error",
                    title: "Hiba",
                    text: "A fa mentése sikertelen!",
                });
                }
            } catch (error) {
                console.error("Hiba:", error);
            }
        };

        saveTreeDataToDatabase();
    }


    return (
        <Card>
            <div>
                <h2>Új facsemete felvitele</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Név:</label>
                    <input type="text" id="name" ref={nameRef}/>

                    <label htmlFor="img_url">Kép URL:</label>
                    <input type="text" id="img_url" ref={img_urlRef}/>

                    <label htmlFor="price">Ár:</label>
                    <input type="number" id="price" ref={priceRef}/>

                    <label htmlFor="stock">Darabszám:</label>
                    <input type="number" id="stock" ref={stockRef}/>

                    <label htmlFor="describtion">Leírás:</label>
                    <input type="text" id="describtion" ref={describtionRef}/>

                    <button type="submit">
                        Küldés
                    </button>
                </form>
            </div>
        </Card>
    )
}


export default TreeForm;