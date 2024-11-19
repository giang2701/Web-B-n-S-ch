import { createContext, useContext, useEffect, useState } from "react";
import Instance from "../api/Instance";

export const ProductsContext = createContext({});
export const useProducts = () => useContext(ProductsContext);
const ProductsProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await Instance.get("/products");
            // console.log(data.data);
            setData(data.data);
        })();
    }, []);
    return (
        <ProductsContext.Provider value={{ data, setData }}>
            {children}
        </ProductsContext.Provider>
    );
};
export default ProductsProvider;
