class Meal {
  constructor(
    id,
    categoryIds,
    title,
    afforability,
    complexity,
    imageUrl,
    duration,
    ingradients,
    steps,
    isGlutenFree,
    isVeagan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.afforability = afforability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingradients = ingradients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVeagan = isVeagan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
