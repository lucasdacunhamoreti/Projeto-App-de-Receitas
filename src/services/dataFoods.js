const apiFoods = async (type, search) => {
  if (type === 'ingredient') {
    const apiIngredients = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
    );
    const apiIngredientsJson = await apiIngredients.json();
    return apiIngredientsJson;
  }
  if (type === 'name-ingredient') {
    const apiName = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
    const apiNameJson = await apiName.json();
    return apiNameJson;
  }
  const apiFirstLetter = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`,
  );
  const apiFirstLetterJson = await apiFirstLetter.json();
  return apiFirstLetterJson;
};

export const getCategoryFoods = async () => {
  const MAX_QUANTITY_CATEGORY = 5;
  const apiCategory = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  );
  const apiCategoryJson = await apiCategory.json();
  return apiCategoryJson.meals.slice(0, MAX_QUANTITY_CATEGORY);
};

export const getFoodsCategorySpecify = async (food) => {
  const MAX_QUANTITY_CATEGORY = 12;
  const apiCategory = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`,
  );
  const apiCategoryJson = await apiCategory.json();
  return apiCategoryJson.meals.slice(0, MAX_QUANTITY_CATEGORY);
};

export const getRecipeFood = async (id) => {
  const apiCategory = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const apiCategoryJson = await apiCategory.json();
  return apiCategoryJson.meals;
};

export const getRecomendedCardDrink = async () => {
  const MAX_QUANTITY = 6;
  const apiResponse = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  );
  const apiResponseJson = await apiResponse.json();
  return apiResponseJson.drinks.slice(0, MAX_QUANTITY);
};

export const getIngredientsFoods = async () => {
  const MAX_QUANTITY = 12;
  const apiResponse = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  );
  const apiResponseJson = await apiResponse.json();
  return apiResponseJson.meals.slice(0, MAX_QUANTITY);
};

export const getRandomRecipeFoods = async () => {
  const apiCategory = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php',
  );
  const apiCategoryJson = await apiCategory.json();
  return apiCategoryJson.meals;
};

export const getNationalities = async () => {
  const apiNationalities = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
  );
  const getNationalitiesJson = await apiNationalities.json();
  return getNationalitiesJson;
};

export const getRecipesNationality = async (nationality) => {
  const apiRecipeNationalities = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`,
  );
  const getNationalitiesJson = await apiRecipeNationalities.json();
  return getNationalitiesJson;
};

export default apiFoods;
