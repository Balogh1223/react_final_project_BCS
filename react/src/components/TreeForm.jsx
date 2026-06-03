import { useRef, useState } from "react";
import Card from "../wrappers/Card";
import Swal from "sweetalert2"

const TreeForm = ({ sendDataToApp }) => {

    const nameRef = useRef();
    const img_urlRef = useRef();
    const priceRef = useRef();
    const stockRef = useRef();
    const descriptionRef = useRef(); 

    const handleSubmit = (event) =>{
        event.preventDefault();
        summarizeTreeData();
    }
    

    const summarizeTreeData = () => {
        const name = nameRef.current.value;
        const img_url = img_urlRef.current.value;
        const price = priceRef.current.value;
        const stock = stockRef.current.value;
        const description = descriptionRef.current.value;

        if(!name || !img_url || !price|| !stock || !description){
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
                        description,
                        img_url,
                        price : Number(price),
                        stock : Number(stock),             
                    }),
                });
                if (response.ok) {
                const data = await response.json();
                sendDataToApp(data);
                Swal.fire({
                                icon: "success",
                                title: "Sikeres hozzáadás",
                                text: "A facsemete sikeresen hozzáadva!",
                                });
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
                    <input type="text" id="name" ref={nameRef}/><br />

                    <label htmlFor="img_url">Kép URL:</label>
                    <input type="text" id="img_url" ref={img_urlRef}/><br />

                    <label htmlFor="price">Ár:</label>
                    <input type="number" id="price" ref={priceRef}/><br />

                    <label htmlFor="stock">Darabszám:</label>
                    <input type="number" id="stock" ref={stockRef}/><br />

                    <label htmlFor="describtion">Leírás:</label>
                    <input type="text" id="describtion" ref={descriptionRef}/><br />

                    <button type="submit">
                        Küldés
                    </button>
                </form>
            </div>
        </Card>
    )
}


export default TreeForm;