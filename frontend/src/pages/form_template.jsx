import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { useEffect } from "react";



export default function FormTemplate() {
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
            <div className="bg-gray-500 flex flex-col gap-10 min-h-screen">
                <Navbar />

                <div className="container mx-auto max-w-screen-xl grow flex justify-center items-center">
                    <form className="grow bg-zinc-800 mx-4 p-6 flex flex-col gap-5 border">
                        <h1 className="text-xl font-bold uppercase">Enter your account.</h1>

                        <div className="flex flex-col">
                            <label className="font-bold uppercase">Email</label>
                            <input name="email" type="text" autoComplete="off" className="text-black px-2 py-1"></input>
                        </div>
    
                        <div className="flex flex-col">
                            <label className="font-bold uppercase">Password</label>
                            <input name="password" type="text" autoComplete="off" className="text-black px-2 py-1"></input>
                        </div>
    
                        <input type="submit" value="Submit" className="bg-green-500 p-2 rounded"></input>
                    </form>
                </div>

                <Footer />
            </div>
        </>
    )
}
