import bgRoomCode from "./assets/bg-purple-circle.png"

const RoomCode= () => {
    return (
        <>

            <div style={{"background-image" : `url(${bgRoomCode})`}}
            class="bg-cover bg-center bg-no-repeat h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-fixed"
            >
                <p class="text-white font-mono text-3xl font-bold">IceBreaker</p>
                <div>
                    <input type="text" />
                    <br />
                    <button>Enter</button>
                </div>
            </div>
        </>
    )
}

export default RoomCode