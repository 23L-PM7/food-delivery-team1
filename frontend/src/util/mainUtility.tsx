import axios from "axios";

export async function utilFetcher(path: string) {
  const response: any = await axios.get(`http://localhost:9090/${path}`, {
    // headers: {
    //   "access-token": localStorage.getItem("accessToken") || "",
    // },
  });

  return response.data;
}

export async function utiloneFetcher(path: string, postData: {}) {
  const response: any = await axios.post(
    `http://localhost:9090/${path}`,
    postData
  );

  return response.data;
}

export async function utilMutator(path: string, postData: {}) {
  const response: any = await axios
    .post(`http://localhost:9090/${path}`, postData)
    .catch((error) => {
      console.error("Category Error", error);
    });

  return response.data;
}

export async function utilDeleter(path: string) {
  const response: any = await axios
    .delete(`http://localhost:9090/${path}`)
    .catch((error) => {
      console.error("Category Error", error);
    });

  return response.data;
}

// useEffect(() => {
//     categoryFetcher("foods").then((data) => {
//       console.log(data);
//     });
//   }, []);

// const data = await mutator("login", { email, password });
