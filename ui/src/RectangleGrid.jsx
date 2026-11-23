
import moveIcon from "./assets/move.svg";
import talkIcon from "./assets/talk.svg";
import createIcon from "./assets/create.svg";
import wildcardIcon from "./assets/wildcard.svg";

const rectangleContent = [
  {
    id: "move",
    icon: moveIcon,
    title: "MOVE",
    description: "Complete a fun physical activity",
  },
  {
    id: "talk",
    icon: talkIcon,
    title: "TALK",
    description: "Answer a question and share your thoughts",
  },
  {
    id: "create",
    icon: createIcon,
    title: "CREATE",
    description: "Take on a quick creative challenge",
  },
  {
    id: "wildcard",
    icon: wildcardIcon,
    title: "WILDCARD",
    description: "Choose any challenge your team likes",
  },
];

const RectangleGrid = () => {
    return (
        <>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <For each={rectangleContent}>
                    {(item) => (
                        <div class="h-[50vh] bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                            <img 
                              src={item.icon}
                              class="w-24 h-24 object-contain mb-4"
                            />
                            <p class="font-jakarta-sans text-gray text-3xl font-bold">{item.title}</p>
                            <hr class="w-full my-3 border-gray-300" />
                            <p class="font-jakarta-sans">{item.description}</p>
                        </div>
                    )}
                </For>
            </div>
        </>
    )
}

export default RectangleGrid;