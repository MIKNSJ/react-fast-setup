import HomeTemplate from "./pages/home.jsx"
import { useEffect } from "react";



function App() {
    const testBackendApi = async () => {
        const response = await fetch("/api");
        const data = await response.json();
        console.log("{name: " + data.username + ": " + "password: " + data.password + "}");
        
        const response2 = await fetch("/api/test1");
        const data2 = await response2.json();
        console.log("{name: " + data2.username + ": " + "password: " + data2.password + "}");

        const response3 = await fetch("/admin");
        const data3 = await response3.json();
        console.log("{name: " + data3.username + ": " + "password: " + data3.password + "}");
    };

    useEffect(() => {
        testBackendApi();
    }, [])

    return (
      <>
        <HomeTemplate />
      </>
    )
}

export default App
