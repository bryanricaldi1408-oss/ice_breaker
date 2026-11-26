import joinIcon from "./assets/join.svg";
import makeIcon from "./assets/edit.svg";

export const Header = () => {
  return (
    <>
      <div class="bg-[#7209B7] w-screen flex items-center gap-12 p-4">
        <p class="text-[#C6E4F9] font-mono font-extrabold text-2xl">IceBreaker</p>
        <ul class="flex gap-8">
          <li class="flex gap-2 items-center">
            <img 
              src={joinIcon}
              class="w-4 h-4 object-contain"
            />
            <p class="text-white">Join</p>
          </li>
          <li class="flex gap-2 items-center">
            <img 
              src={makeIcon}
              class="w-4 h-4 object-contain"
            />
            <p class="text-white">Make</p>
          </li>
        </ul>
      </div>
    </>
  )
}