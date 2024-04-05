import axios from "axios";

export async function Fetcher(path: string) {
    const { data }: any = await axios.get(`http://localhost:9090/users/login${path}`, {
        headers: {
            accessToken: localStorage.getItem("accsessToken"),
        },
    })
    return data;
}


export async function mutator(path: string, postData: {}) {
    const response: any = await axios.post(`http://localhost:9090/users/${path}`, postData, {
        headers: {
            accessToken: "accsessToken",
        },
    })
    return response.data;
}