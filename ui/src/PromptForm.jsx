const PromptForm = () => {
    const promptType = ["All", "Move", "Talk", "Create"];
    return (
        <form class="flex flex-col justify-center items-center">
            <div>
                <div class="flex flex-col">
                    <label for="name">
                        Name
                    </label>
                    <input class="border" type="text" name="name" id="name" required/>
                </div>
                <div class="flex flex-col">
                    <label for="description">
                        Description
                    </label>
                    <input class="border" type="description" name="description" id="description" required/>
                </div>
                <div class="flex flex-col">
                    <label for="type">
                        Prompt Type
                    </label>
                    <div>
                        <For each={promptType}>
                            {(item) => (
                                <div>
                                    <input type="radio" id={item} value={item} name="type"/>
                                    <label for={item}>{item}</label>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PromptForm;