import { createEffect, onCleanup } from "solid-js";
import bgImage from "./assets/bg-purple-circle.png";

const WaitingRoom = () => {
    createEffect(() => {
        document.body.style.margin = "0";
        document.body.style.overflow = "hidden"; // Prevents any scrollbars
        document.body.style.backgroundImage = `url(${bgImage})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        });

        onCleanup(() => {
        document.body.style.overflow = ""; // Restores scrolling when leaving this page
        document.body.style.backgroundImage = "";
    });
    
    return (
        <>
            <div className="font-[Space_Mono] flex flex-col justify-center items-center min-h-dvh gap-4">
                <p className="text-white font-bold text-2xl">
                    IceBreak
                </p>

                <div className="bg-white flex p-15 rounded-2xl font-[Plus Jakarta Sans] flex items-center gap-10">
                    <div className="bg-black h-40 w-40">
                        test
                    </div>
                    <div>
                        <p className="text-xl">
                            Room Code
                        </p>
                        <p className="text-2xl font-bold">
                            123456
                        </p>
                    </div>
                </div>

                <p className="text-white font-bold text-xl">
                    Waiting for players...
                </p>
            </div>
        </>
    )
}

export default WaitingRoom;