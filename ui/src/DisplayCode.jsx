const DisplayCode = () => {
    return (
        <>
            <div className="font-[Plus Jakarta Sans] flex flex-col justify-center items-center h-screen gap-4">
                <h2 className="text-4xl font-semibold text-[#7209B7]">Gather your team!</h2>
                <p className="text-base font-semibold">Scan the QR code or enter the room code to join the game</p>
                
                {/* teams and QR code */}
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
            </div>
        </>
    )
}

export default DisplayCode;