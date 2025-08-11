import React from "react";
import axios from "axios";

export async function updateUser(userId) {
    const content = await axios.get(`http://127.0.0.1:8080/user/${userId}`)
    if (content.status === 200 && content.data) {
        console.log("Usuário atualizado:", content.data);
        return content.data
    } else {
        return "Erro ao buscar usuário.";
    }

}