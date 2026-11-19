const DisplayCode = () => {
    return (
        <>
            <div className="font-[Plus Jakarta Sans] flex flex-col justify-center items-center h-screen gap-4">
                <h2 className="text-4xl font-semibold text-[#7209B7]">Gather your team!</h2>
                <p className="text-base font-semibold">Scan the QR code or enter the room code to join the game</p>
                
                {/* teams and QR code */}
                <div className="justify-items-center border border-[#F72585] rounded-lg px-3 overflow-y-auto box-border h-64">
                    {/* teams */}
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

                    {/* QR Code */}
                    <div className="">

                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayCode;