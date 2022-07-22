import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { projectFirestore } from "../../firebase/config";

//Styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientsInput = useRef(null)
  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault()
    const doc = { title, ingredients, method, cookingTime:cookingTime + ' minutes' } 

    try {
      projectFirestore.collection('recipes').add(doc)
      history.push('/')
    } catch (err){
      console.log(err)
    }
    
  }

  const addIngredients = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIng => [...prevIng, ing])
    }
    setNewIngredient('') 
    ingredientsInput.current.focus()
  }


  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe Title:</span>
          <input 
          type={"text"}
          onChange={e=>setTitle(e.target.value)}
          value={title}
          required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients'>
            <input
              type="text"
              onChange={e=>setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
            />
            <button onClick={addIngredients} className={'btn'}>add</button>
          </div>
        </label>
        <p>Current Ingredients: {ingredients.map(i=><em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe Method:</span>
          <input
          type={"textarea"}
          onChange={e=>setMethod(e.target.value)}
          value={method}
          required
          />
        </label>

        <label>
          <span>Recipe Cooking Time:</span>
          <input
          type={"number"}
          onChange={e=>setCookingTime(e.target.value)}
          value={cookingTime}
          required
          />
        </label>
        
        <button className="btn">submit</button>

      </form>

    </div>
  )
}
