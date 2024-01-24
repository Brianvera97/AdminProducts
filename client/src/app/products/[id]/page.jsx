'use client'
import { Button } from "@mui/material";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../[id]/idPage.module.css"




const DetailProductPage = () => {

    const { id } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState({});

    const getProducto = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}`);
            const result = await response.data;
            setProduct(result);
        } catch (error) {
            console.log(error);
        }

    }

    const deleteProduct = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/products/${id}`);
            const result = await response.data;
            console.log(result);
            router.push("/products");

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducto();
    }, [])

    return (
        <main className={styles.main}>
            <ul>
                <h1>Detalles del Producto</h1>
                <li><h3>Titulo: {product.title}</h3></li>
                <li><h3>Precio: ${product.price}</h3></li>
                <li><h3>Description: {product.description}</h3></li>
            </ul>
            <Button color="error" variant="contained" onClick={deleteProduct} >Delete</Button>
        </main>
    )
}

export default DetailProductPage;