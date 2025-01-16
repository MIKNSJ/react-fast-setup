export default function Navbar() {
    return (
        <>
            <div className="bg-zinc-800 text-white w-100">
                <div className="container mx-auto max-w-screen-xl flex justify-between items-center shadow-md p-4">
                    <div className="flex gap-4 items-center">
                        <a href="/" className="text-white font-bold sm:text-4xl">MERN Setup</a>
                    </div>

                    <a href="/create" className="bg-white py-4 px-5 text-black rounded">Add</a>
                </div>
            </div>
        </>
    )
}
