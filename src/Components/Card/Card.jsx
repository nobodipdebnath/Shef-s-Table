import { BsStopwatch } from "react-icons/bs";
import { GiFlame } from "react-icons/gi";

export const Card = ({ card, addRecipe }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;
  return (
    <div className="p-6 border border-[#28282833] rounded-2xl">
      <img
        className="h-[200px] w-full object-cover rounded-xl"
        src={recipe_image}
        alt={recipe_name}
      />
      <h2
        className="text-[#282828] text-xl font-semibold mt-6">
        {recipe_name}
      </h2>
      <p className="text-base my-4 text-[#878787]">{short_description}</p>
      <hr className="text-[#2828281a]" />
      <p className="text-[#282828] text-xl font-semibold mt-6">Ingredients : {ingredients.length}</p>
      <ul className="list-disc text-[#878787] text-lg ml-5 my-4">
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
      </ul>
      <hr className="text-[#2828281a]" />
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2 text-base text-[#282828cc]">
            <BsStopwatch />
          <p>{preparing_time} min</p>
        </div>
        <div className="flex items-center gap-2 text-base text-[#282828cc]">
            <GiFlame />
          <p>{calories} calories</p>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start">
        <button onClick={() =>addRecipe(card)} className="py-4 px-12 hover:bg-[#0b9d60] duration-500 bg-[#0BE58A] text-[#150B2B] rounded-[38px] font-semibold cursor-pointer mt-8">Want to Cook</button>
      </div>
    </div>
  );
};
