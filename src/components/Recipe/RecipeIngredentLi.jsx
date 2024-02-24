import React from "react";
import PropTypes from "prop-types";
import styles from "./RecipeIngredentLi.module.css";
const RecipeIngredentLi = (props) => {
  return <li className={styles.recipeIngredentLi}>{props.children}</li>;
};

export default RecipeIngredentLi;

RecipeIngredentLi.propTypes = {
  children: PropTypes.string,
};
