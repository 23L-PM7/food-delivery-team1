import axios from "axios";

export async function categoryFetcher(path: string) {
  const response: any = await axios.get(`http://localhost:9090/${path}`, {
    // headers: {
    //   "access-token": localStorage.getItem("accessToken") || "",
    // },
  });

  return response.data;
}

export async function categoryMutator(path: string, postData: {}) {
  const response: any = await axios
    .post(`http://localhost:9090/${path}`, postData, {
      // headers: {
      //   "access-token": localStorage.getItem("accessToken") || "",
      // },
    })
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
