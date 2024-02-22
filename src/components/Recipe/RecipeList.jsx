import PropTypes from "prop-types";
import styles from "./RecipeList.module.css";
import RecipeCard from "./RecipeCard";
import { recipies } from "../../recipies.js";
const RecipeList = () => {
  return (
    <div className={styles.recipeListWrapper}>
      {recipies.map((recipe) => (
        <RecipeCard recipies={recipe}></RecipeCard>
      ))}
    </div>
  );
};

export default RecipeList;
