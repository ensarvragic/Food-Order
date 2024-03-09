import Mealitem from "./Mealitem";
import useHTTP from "./hooks/useHTTP";

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHTTP("http://localhost:3000/meals", {}, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }


  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Mealitem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
