import { useRef, useState } from "react";
import Card from "../wrappers/Card";

const TreeForm = ({ sendDataToApp }) => {
    return (
        <Card>
            <div>
                <h2>Farendeles</h2>
                <form>
                    <label htmlFor="fatpus">Választható fatípus:</label>
                    <select name="" id="fatipus">
                        <option value="barack">Barackfa csemete</option>
                        <option value="cseresznye">Cseresznyefa csemete</option>
                        <option value="gesztenye">Gesztenyefa csemete</option>
                        <option value="alma">Almafa csemete</option>
                    </select>

                </form>
            </div>
        </Card>
    )
}


export default TreeForm;