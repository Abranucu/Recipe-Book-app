import allRecipes from "../data/Recipes.json"

function List() {
    return (
        {currentAllRecipes.map((eachObject, index) => {
            return(
             <div key={eachObject.id}>  
          <img src={eachObject.image} alt={eachObject.name} width="200px"/>
            <h4>Nombre: {eachObject.name} </h4>
            <p>calories: {eachObject.calories}</p>
            <p>servings: {eachObject.servings}</p>
            <p>Recipes +400Cal: {eachObject.calories >= 400 ? "⬆️" :  "⬇️"}</p>
            <button onClick={() => handleRemoveRecipe(index)}>Borrar</button>
            <hr/>
          </div>
  )          
     }

  )}
       
    )
}

export default List
