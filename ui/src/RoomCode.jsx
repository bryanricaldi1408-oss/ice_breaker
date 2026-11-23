import bgRoomCode from "./assets/bg-purple-circle.png"

const RoomCode= () => {
    return (
        <>

            <div style={{"background-image" : `url(${bgRoomCode})`}}
            class="bg-cover bg-center bg-no-repeat h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-fixed"
            >
                <p class="text-white font-mono text-3xl font-bold">IceBreaker</p>
                <div class="bg-white rounded-2xl h-40 w-120 m-7 flex flex-col gap-2 items-center justify-center">
                    <input type="text"  class="border border-gray-400  w-[87%] h-[35%] rounded-md text-center text-xl font-jakarta-sans font-extrabold" placeholder="Enter room code"/>
                    <br />
                    <button class="w-[87%] text-white bg-[#7209B7] rounded-md h-[35%] hover:bg-[#a12cef]">Enter</button>
                </div>
            </div>
        </>
    )
}

export default RoomCode