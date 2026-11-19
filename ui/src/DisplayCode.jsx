const DisplayCode = () => {
    return (
        <>
            <div className="font-[Plus Jakarta Sans] flex flex-col justify-center items-center h-screen gap-4">
                <h2 className="text-4xl font-semibold text-[#7209B7]">Gather your team!</h2>
                <p className="text-base font-semibold">Scan the QR code or enter the room code to join the game</p>
                
                {/* teams and QR code */}
<<<<<<< HEAD
                <div className="grid grid-cols-3 gap-4">
                    {/* teams */}
                    <div className="col-span-2 border rounded-lg border-[#F72585]">
                        {/* name       info */}
                        {/* every div has their team name and info */}
                        
                        {/* header */}
                        <div className="grid grid-cols-2">
                            <h3 className="text-2xl font-semibold">Teams</h3>
                            {/* info */}
                            <span className="bg-[#F72585] text-white rounded-lg p-0.5 col-start-2">[17] players joined</span>
                        </div>
                    </div>

                    {/* QR Code */}
                    <div className="">

                    </div>
                </div>
=======
                <div className="justify-items-center flex gap-5">
                    {/* teams */}
                    <div className="overflow-y-auto box-border h-64 border border-[#F72585] rounded-lg px-3">
                        <table className="border-separate border-spacing-y-4">
                            <tr>
                                <th className="pe-50">
                                    <span className="text-3xl font-medium p">Teams</span>
                                </th>
                                <th className="ps-8s">
                                    <span className="bg-[#F72585] text-white p-1 rounded-md font-medium py-0.5 px-2">17 players joined</span>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <span className="font-medium">Team Alpha</span>
                                    <br />
                                    6 Players
                                </td>
                                <td className="grid justify-items-end">
                                    <span className="bg-[#F72585] text-white py-0.5 px-5 rounded-md">Joined</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="font-medium">Team Alpha</span>
                                    <br />
                                    6 Players
                                </td>
                                <td className="grid justify-items-end">
                                        <span className="bg-[#F72585] text-white py-0.5 px-5 rounded-md">Joined</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="font-medium">Team Alpha</span>
                                    <br />
                                    6 Players
                                </td>
                                <td className="grid justify-items-end">
                                        <span className="bg-[#F72585] text-white py-0.5 px-5 rounded-md">Joined</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="font-medium">Team Alpha</span>
                                    <br />
                                    6 Players
                                </td>
                                <td className="grid justify-items-end">
                                        <span className="bg-[#F72585] text-white py-0.5 px-5 rounded-md">Joined</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="font-medium">Team Alpha</span>
                                    <br />
                                    6 Players
                                </td>
                                <td className="grid justify-items-end">
                                        <span className="bg-[#F72585] text-white py-0.5 px-5 rounded-md">Joined</span>
                                </td>
                            </tr>
                        </table>
                    </div>

                    {/* QR Code */}
                    <div className="flex flex-col items-center gap-5">
                        <div className="bg-black h-40 w-40">
                            Test
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-xl">
                                Room Code:
                            </p>
                            <p className="font-bold text-2xl">
                                123456
                            </p>
                        </div>
                    </div>
                </div>

                <button onClick={() => navigate("/room-code")} class="font-jakarta-sans font-bold bg-[#7209B7] hover:bg-[#8a21cf] p-2 m-5 text-white rounded-2xl w-175">
                    Start Game
                </button>
>>>>>>> 2306a31cac9ccb772699feb15d1e9efc0f77e400
            </div>
        </>
    )
}

export default DisplayCode;