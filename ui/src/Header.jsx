
export const Header = (props) => {
  return (
    <>
      <div class="bg-[#7209B7] w-screen flex gap-7 p-4">
        <p class="text-[#C6E4F9] font-mono font-extrabold text-2xl">IceBreaker</p>
        <ul class="flex gap-2">
          <li><p class="text-white">Join</p></li>
          <li><p class="text-white">Make</p></li>
        </ul>
      </div>
      {props.children}
    </>
  )
}