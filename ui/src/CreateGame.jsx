import { createSignal } from "solid-js";
import { Index } from "solid-js";
import { useNavigate } from "@solidjs/router"

function CreateGameForm() {
  const [teamCount, setTeamCount] = createSignal(2);
  const [teamNames, setTeamNames] = createSignal(["", ""]);

  const handleTeamCount = (e) => {
    const count = Math.max(
      2,
      Math.min(10, Number(e.currentTarget.value) || 2)
    );

    setTeamCount(count);

    setTeamNames((prev) => {
      const updated = [...prev];

      while (updated.length < count) {
        updated.push(`Team ${updated.length + 1}`);
      }

      return updated.slice(0, count);
    });
  };

  const handleTeamName = (index, value) => {
    setTeamNames((prev) =>
      prev.map((name, i) =>
        i === index ? value : name
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      teamCount: teamCount(),
      teamNames: teamNames()
    });
  };

  const navigate = useNavigate()

  return (
    <main class="flex flex-col min-h-screen w-screen items-center mt-7">
        <div class="min-h-screen w-[85%] flex flex-col items-center space-y-4">
            <p class="text-center text-4xl font-bold text-[#7209B7] mt-7">Let's set up your game!</p>
            <p class="text-center text-lg font-medium">A few quick details before the fun begins</p>

            <form id="create-game-form" method="POST" onSubmit={handleSubmit} class="bg-[#C6E4F9] p-6 space-y-4 rounded-[10px] w-full max-w-md">
                <div class="flex flex-col">
                    <label class="font-medium text-lg">Number of Teams</label>

                    <input
                    class="bg-[#FFFFFF] rounded-[5px] px-3 py-1 font-lg block w-full"
                    type="number"
                    min="2"
                    max="10"
                    value={teamCount()}
                    onInput={handleTeamCount}
                    />

                    <small>Minimum 2 teams</small>
                </div>

                <div class="flex flex-col">
                    <label class="font-medium text-lg">Teams Name</label>
                    <small>Customize the names or keep the defaults</small>

                    <Index each={teamNames()}>
                        {(name, index) => (
                            <div class="mt-2">
                                <label class="font-medium font-lg flex flex-col">Team {index + 1}</label>

                                <input
                                    class="bg-[#FFFFFF] rounded-[5px] px-3 py-1 font-lg block w-full"
                                    type="text"
                                    value={name()}
                                    onInput={(e) =>
                                    handleTeamName(
                                        index,
                                        e.currentTarget.value
                                    )
                                    }
                                    placeholder={`Enter Team ${index + 1}`}
                                    required
                                />
                            </div>
                        )}
                    </Index>
                </div>
            </form>
          <div class="w-full max-w-md mt-2">
              <button onClick={() => navigate("/display-code")} class="type= submit bg-[#7209B7] rounded-[10px] w-full py-2">
                <p class="text-xl font-medium text-white">Continue to Lobby →</p> 
              </button>
          </div>
        </div>
    </main>

);
};

export default CreateGameForm;