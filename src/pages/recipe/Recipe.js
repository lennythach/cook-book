import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

//styles
import "./Recipe.css"

export default function Recipe() {
  const { id } = useParams()
  const {data:recipe, isPending, error} = useFetch('http://localhost:3000/recipes/'+id);
  return (
    <div className="recipe">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>It takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing =><li key={ing}>{ing}</li>)}
          </ul>
          <p>{recipe.method}</p>
        </>
      )}

    </div>
  )
}
