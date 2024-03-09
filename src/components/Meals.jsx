import Mealitem from "./Mealitem";
import useHTTP from "./hooks/useHTTP";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHTTP("http://localhost:3000/mealss", requestConfig, []);


  if (isLoading) {
    return <p style={{textAlign: 'center'}}>Fetching meals...</p>;
  }

  if(error){
    return <Error title='Failed to fetch meals' message={error} />
  }


  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Mealitem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
