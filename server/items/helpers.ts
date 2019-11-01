export function recursiveCategoriesExtraction(categoryFilterItem){
  if(categoryFilterItem){
    const nextArray = categoryFilterItem.path_from_root || [];
    return [categoryFilterItem.name, ...recursiveCategoriesExtraction(nextArray[0])]
  }else{
    return [];
  }
}
