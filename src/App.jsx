import RecipeList from "./components/Recipe/RecipeList";
import styles from "./App.module.css";
import burger from "./burger.gif";
import donut from "./donut.gif";
function App() {
  return (
    <div className={styles.appwrapper}>
      <div className={styles.header}>
        <div>
          <img src={burger} alt="" />
          <h1>Recipe List</h1>
          <img src={donut} alt="" />
        </div>
      </div>
      <div>
        <blockquote>
          Please hover over the recipe to see the recipe and ingredients.
        </blockquote>
      </div>
      <RecipeList></RecipeList>
    </div>
  );
}

export default App;
