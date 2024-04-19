import axios from "axios";

export async function LoginFetcher(path: string) {
    const response: any = await axios.get(`http://localhost:9090/users/${path}`, {
        headers: {
            accessToken: localStorage.getItem("accsessToken") || "",
        },
    });
    return response.data;
}


export async function LoginMutator(path: string, postData: {}) {
    const response: any = await axios.post(`http://localhost:9090/users/${path}`, postData)
    return response.data;
}

export async function UserPrinting(path: string, postData: {}) {
    const response: any = await axios.put(`http://localhost:9090/users/${path}`, {
        data: postData
    })
    return response.data;
}

// mutator dotor bsn
// {
//     headers: {
//         "access-token": localStorage.getItem("accessToken") || "",
//     },
// }