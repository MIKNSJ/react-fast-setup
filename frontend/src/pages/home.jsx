import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer.jsx"




const dummyData = [
    {"username": "John", "password": "test1234"},
    {"username": "Waltz", "password": "fekfk344"},
    {"username": "George", "password": "bnfim234"},
]


var users_div = []
for (var i = 0; i < dummyData.length; i++) {
    users_div.push(
        <div key={i} className="flex flex-col">
            <h1 className="font-bold uppercase">USER {i + 1}</h1>
            <h1 className="font-bold uppercase">Name: {dummyData[i].username}</h1>
            <h1 className="font-bold uppercase">Password: {dummyData[i].password}</h1>
        </div>
    )
}


export default function HomeTemplate() {
    return (
        <>
            <div className="bg-gray-500 flex flex-col gap-10 min-h-screen">
                <Navbar />

                <div className="container mx-auto max-w-screen-xl p-4 grow flex flex-col gap-3">
                    <h1 className="font-bold uppercase text-xl">Current Users</h1>
                    {users_div}
                </div>

                <Footer />
            </div>
        </>
    )
}
