import { createContext, useContext, useEffect, useState } from "react";
import Instance from "./../api/Instance";

export const ParentContext = createContext({});
export const useParentCate = () => useContext(ParentContext);
export const ParentProvider = ({ children }) => {
    const [parent, setParent] = useState([]);
    const GetAllParentCate = async () => {
        try {
            const { data } = await Instance.get("/parentCate");
            const filteredParent = data.data.filter(
                (category) => category._id !== "673c43e39af01762f5b1118e"
            );
            setParent(filteredParent);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        GetAllParentCate();
    }, []);
    return (
        <ParentContext.Provider value={{ parent, setParent }}>
            {children}
        </ParentContext.Provider>
    );
};
