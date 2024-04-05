import axios from "axios";

export async function Fetcher(path: string) {
    const response: any = await axios.get(`http://localhost:9090/users/${path}`, {
        headers: {
            accessToken: localStorage.getItem("accsessToken") || "",
        },
    });
    return response.data;
}


export async function mutator(path: string, postData: {}) {
    const response: any = await axios.post(`http://localhost:9090/users/${path}`, postData, {
        headers: {
            "access-token": localStorage.getItem("accessToken") || "",
        },
    })
    return response.data;
}