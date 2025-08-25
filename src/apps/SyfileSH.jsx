import React from "react";
import { useState } from "react";


function SyfileSH({nameFile}) {

    const handleKeyDown = (e) =>{
        if (e.ctrlKey && e.key.toLowerCase() === "s"){
            e.preventDefault()

            
        }

    } 

    return (
        <>
        {nameFile? (
            <div className="Syfile-sh">
                <textarea name="syfile-textarea" id="syfile-textarea" onKeyDown={handleKeyDown}></textarea>
                <ul id="syfile-commands">
                    <li>Ctrl+s: save</li>
                    <li>Ctrl+x: exit</li>
                </ul>
            </div>
        ):(
            alert("Erro: Nome do arquivo não fornecido.")
        )}
    </>
    );
}   

export default SyfileSH;
