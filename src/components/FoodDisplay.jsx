import FoodDisplayItem from "./FoodDisplayItem";
import { food_list } from "../../public/assets";

const FoodDisplay = () => {
  // Slice the food_list to only include the first 6 items
  const displayedFood = food_list.slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto flex flex-col my-8 p-3">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
        Top Dishes near you
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 my-8 gap-5">
        {displayedFood.map((item, index) => (
          <FoodDisplayItem
            key={index}
            name={item.name}
            desc={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <div className="text-center">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none"
         
        >
         load  More
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
