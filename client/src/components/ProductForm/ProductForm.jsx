'use client'
import { Autocomplete, Button, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";



const ProductForm = ({ titleInitial = "", priceInital = 0, descriptionInitial = "", onSubmitFn, btnLabel = "Submit", clearStates = true }) => {

    const [title, setTitle] = useState(titleInitial);
    const [price, setPrice] = useState(priceInital);
    const [description, setDescription] = useState(descriptionInitial);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            price,
            description,
        }
        await onSubmitFn(data);
        if (clearStates) {
            setTitle("");
            setPrice(0);
            setDescription("");
            setTimeout(() => alert("Agregado Exitosamente!"), 1000);
        }
    }

    return (
        <form style={{ display: "flex", flexDirection: "column", rowGap: "20px", alignItems:"center" }} onSubmit={handleSubmit}>

            <div>
                <TextField
                    type="text"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    type="number"
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    type="text"
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                
            </div>
            <Button  type="submit" sx={{width:"90px"}} variant="outlined">{btnLabel}</Button>
        </form>
    )
}

export default ProductForm;