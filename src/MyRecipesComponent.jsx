function MyRecipesComponent({ label, image, calories, ingredients, preparation }) {

   return (
      <div className="recipe-card">
         <div className="card-header">
            {label}
         </div>
         <div className="card-image">
            <img src={image} alt="recipe-pic" />
         </div>
         <div className="card-info">
            <div className="card-info-calories">
               {Math.floor(calories)} calories
            </div>
            <ul className="card-info-ingredients">
               {ingredients.map(ingredient => (
                  <li>{ingredient}</li>
               ))}
            </ul>
         </div>



         <a href={preparation} target='_blank' rel="noreferrer" className="btn btn--stripe">Preparation</a>

      </div >
   )
}
export default MyRecipesComponent;