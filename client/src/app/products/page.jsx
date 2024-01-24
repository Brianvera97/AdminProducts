'use client'

import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../products/productPage.module.css"

const { useState, useEffect } = require("react")




const ProductosPage = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/products");
            const result = await response.data;
            setProducts(result);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = (id) => async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/products/${id}`);
            const result = await response.data;
            console.log(result);
            /* Actualizacion del estado */
            /* setProducts((prevVal) => {
                const newList = prevVal.filter((item) => item._id !== id);
                console.log(newList);
                return ([...newList]);
            }); */
            getProducts();

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <main className={styles.main}>
            <h1>Productos Disponibles</h1>
            <ul style={{ marginLeft: 24, display: "flex", flexDirection: "column" }}>
                {
                    products.map((item, idx) => {
                        return (
                            <li key={idx} >
                                <div style={{ display: "flex", columnGap: 8, alignItems: "center", justifyContent: "flex-end" }}>
                                    <h3>
                                        <Link style={{ textDecoration: "none" }} href={`/products/${item._id}`}>{item.title}</Link>
                                    </h3>
                                    <Button variant="contained" color="info" size="small"> <Link style={{ textDecoration: "none" }} href={`/products/${item._id}/edit`}>EDIT</Link></Button>
                                    <Button variant="contained" color="error" size="small" onClick={deleteProduct(item._id)} >Eliminar</Button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default ProductosPage;

