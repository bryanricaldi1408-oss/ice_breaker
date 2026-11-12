import { createSignal } from "solid-js"
import Card from "./Card"

const roleContent = {

    participants: {
        subtitle: "Five simple steps to get started",
        buttonText: "Enter room code",
        steps: [
            { number: "01", step: "Join the game", desc: "Scan the QR code or enter the room code" },
            { number: "02", step: "Join a team", desc: "Enter your name and choose a team" },
            { number: "03", step: "Choose a captain", desc: "Choose who will represent your team" },
            { number: "04", step: "Roll the dice", desc: "The captain rolls when it's your team's turn" },
            { number: "05", step: "Complete the challenges", desc: "Follow the prompt and have fun together!" },
        ],
    },
    host: {
        subtitle: "You're the host, you're in control! Set the stage, keep the energy going, and let the fun unfold",
        buttonText: "Create a game",
        steps: [
            { number: "01", step: "Create a game", desc: "Start a new session to set up your game" },
            { number: "02", step: "Set up teams", desc: "Choose the number of teams and customize their names" },
            { number: "03", step: "Invite players", desc: "Display the QR code or room code on the shared screen" },
            { number: "04", step: "Start the game", desc: "Once everyone has joined, launch the game board!" },
            { number: "05", step: "Manage the game", desc: "Keep track of team turns, tokens, and game progress" },
            { number: "06", step: "End the game", desc: "Wrap up the session whenever you're ready" },
        ],
    },
}
const Home = () => {
    const [role, setRole] = createSignal("")
    return (
        <>
            <main class="flex flex-col h-screen w-screen items-center my-7">
                <p class="text-center text-4xl font-bold text-[#7209B7]">Start your Game!</p>

                {/* Tombol Participants atau Host */}
                <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2 w-fit bg-[#FDE3EF] p-2 rounded-2xl m-5">
                    <button
                        onClick={() => setRole("participants")} 
                        class={`text-[#F72585] text-2xl font-bold py-3 
                        px-8 rounded-xl cursor-pointer
                        ${role() == "participants" ? "bg-white shadow-xs" : ""}`}>
                        Participants
                    </button>
                    {/* Garis pemisah */}
                    <div class="w-[1px] self-stretch bg-[#F72585]/40 my-1"></div>
                    <button
                        onClick={() => setRole("host")}
                        class={`text-[#F72585] text-2xl font-bold py-3 
                        px-8 rounded-xl cursor-pointer
                        ${role() == "host" ? "bg-white shadow-xs" : ""}`}>

                        Host
                    </button>
                </div>

                {/* Five Simple Steps */}
                <div>

                </div>
            </main>
        </>
    )
}

export default Home