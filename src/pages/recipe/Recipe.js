import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

//styles
import "./Recipe.css"
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";

export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then((doc)=>{
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe')
      }
    })
  },[id])

  return (
    <div className={`recipe ${mode}`}>
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
