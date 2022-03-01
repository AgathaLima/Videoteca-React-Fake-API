import React, { useContext } from "react";

import { VideoContext } from '../contexts/VideoContext'
import { AddIcon, AddVideoButton } from "./style";

export function AddVideo(){
    const {handleAdd} = useContext(VideoContext)

    return(
        <li>
            <AddVideoButton onClick={handleAdd}>
                <AddIcon/>
            </AddVideoButton>
        </li>
    )
}

// PAREI EM ESTILAZAR O FORM // 