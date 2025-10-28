import React from "react";

export const Sidebar = ({ recipeQue, handelRemove , preparingRecipes, calculateTimeAndCalories, totalCalories, totalTime }) => {
  return (
    <div className="md:w-1/3 border border-[#28282833] rounded-2xl">
      <h1 className="text-center text-xl font-semibold text-[#282828] pt-8">
        Want to cook: {recipeQue.length}
      </h1>
      <hr className="text-[#28282826] my-4 w-7/10 mx-auto" />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-base text-[#878787] font-medium">
              <th></th>
              <th>Name</th>
              <th>time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQue.map((recipe, idx) => (
              <tr className="hover:bg-gray-100" key={idx}>
                <th className="text-base font-semibold text-[#282828CC]">
                  {idx + 1}
                </th>
                <td className="text-base text-[#282828B3]">
                  {recipe.recipe_name}
                </td>
                <td className="text-base text-[#282828B3]">
                  {recipe.preparing_time} min
                </td>
                <td className="text-base text-[#282828B3]">
                  {recipe.calories} calories
                </td>
                <th>
                  <button
                    onClick={() => {
                      handelRemove(recipe.recipe_id)
                      calculateTimeAndCalories(recipe.preparing_time, recipe.preparing_time)
                    }}
                    className="text-[#150B2B] text-base font-semibold bg-[#0BE58A] rounded-[38px] py-2 px-3"
                  >
                    Preparing
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="text-center text-xl font-semibold text-[#282828] pt-8">
        Currently cooking : {preparingRecipes.length}
      </h1>
      <hr className="text-[#28282826] my-4 w-7/10 mx-auto" />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-base text-[#878787] font-medium">
              <th></th>
              <th>Name</th>
              <th>time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparingRecipes.map((recipe, idx) => (
              <tr className="hover:bg-gray-100" key={idx}>
                <th className="text-base font-semibold text-[#282828CC]">
                  {idx + 1}
                </th>
                <td className="text-base text-[#282828B3]">
                  {recipe.recipe_name}
                </td>
                <td className="text-base text-[#282828B3]">
                  {recipe.preparing_time} min
                </td>
                <td className="text-base text-[#282828B3]">
                  {recipe.calories} calories
                </td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <th></th>
              <th className="text-[#282828CC] font-semibold text-lg">Total Time : {totalTime} min</th>
              <th className="text-[#282828CC] font-semibold text-lg">Total Calories : {totalCalories} calories</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
