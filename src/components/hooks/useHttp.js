import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong ");
  }

  return resData;
}

export default function useHTTP() {
    const [error, setError]  = useState()

    async function sendRequest(){
        try{
            const resData = sendHttpRequest();
        } catch(error) {

        }
    }
}
