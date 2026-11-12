const Card = (props) => {
  return (
    <>
      <div class="rounded-md border border-purple-300 p-4 w-84 h-full flex flex-col gap-1">
        <h5 class="text-sm">{props.number}</h5>
        <h4 class="font-bold">{props.step}</h4>
        <p class="text-sm">{props.desc}</p>
      </div>
    </>
  )
};

export default Card;
