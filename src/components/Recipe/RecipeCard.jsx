import PropTypes from "prop-types";
import styles from "./RecipeCard.module.css";
import RecipeIngredentLi from "./RecipeIngredentLi";
const RecipeCard = (props) => {
  const {
    additionalTime,
    cookTime,
    directions,
    id,
    imgUrl,
    ingredients,
    prepTime,
    servings,
    title,
    totalTime,
  } = props.recipies;
  console.log(ingredients);
  return (
    <div className={styles.recipeCardWrapper}>
      <div className={styles.cardFrond}>
        <div className={styles.img}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <div className={styles.prepTime}>
            <p>
              <strong>prepTime</strong>
            </p>
            <p>{prepTime}</p>
          </div>
          <div className={styles.cookTime}>
            <p>
              <strong>cookTime</strong>
            </p>
            <p>{cookTime}</p>
          </div>
          <div className={styles.additionalTime}>
            <p>
              <strong>additionalTime</strong>
            </p>
            <p>{additionalTime}</p>
          </div>
          <div className={styles.totalTime}>
            <p>
              <span>totalTime</span>
            </p>
            <p>{totalTime}</p>
          </div>
          <div className={styles.servings}>
            <p>
              <strong>servings</strong>
            </p>
            <p>{servings}</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBack}>
        <div className="directions">
          <div>
            <p>
              <strong>directions</strong>
            </p>
            <p>{directions}</p>
          </div>
        </div>
        <div className="ingredients">
          <div>
            <p>
              <strong>ingredients</strong>
            </p>
            <ul>
              {ingredients.map((ing, index) => (
                <RecipeIngredentLi key={index}>{ing}</RecipeIngredentLi>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  recipies: PropTypes.object,
};
