const Home = () => {
    return (
        <>
            <main class="flex flex-col h-screen w-screen items-center my-7">
                <p class="text-center text-4xl font-bold text-[#7209B7]">Start your Game!</p>

                {/* Tombol Participants atau Host */}
                <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2 w-fit bg-[#FDE3EF] p-2 rounded-2xl m-5">
                    <button class="bg-white text-[#F72585] text-2xl font-bold py-3 px-8 rounded-xl cursor-pointer">
                        Participants
                    </button>
                    {/* Garis pemisah */}
                    <div class="w-[1px] self-stretch bg-[#F72585]/40 my-1"></div>
                    <button class="text-[#F72585] text-2xl font-bold py-3 px-8 rounded-xl cursor-pointer">
                        Host
                    </button>
                </div>

                {/* Five Simple Steps */}
                <div>
                    <p>Five Simple Steps</p>

                </div>
            </main>
        </>
    )
}

export default Home