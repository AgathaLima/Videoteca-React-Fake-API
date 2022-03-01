import { createContext, useState } from "react";
import { FormModal } from "../FormModal";

export const VideoContext = createContext();

export function VideoContextProvider({children}){
    const [openFormModal, setOpenFormModal] = useState();

    function handleAdd(){
        setOpenFormModal(true)
    }

    return (
        <VideoContext.Provider value={{handleAdd}}>
            {children}
            {openFormModal && <FormModal />}
        </VideoContext.Provider>
    )
} 