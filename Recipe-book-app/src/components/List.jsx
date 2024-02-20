import ListItem from "./ListItem";

function List(props) {
  return (
    <div>
      {props.currentAllRecipes.map((eachObject, index) => {
        return (
          <div key={index}>
            <ListItem
              eachObject={eachObject}
              index={index}
              currentAllRecipes={props.currentAllRecipes}
              setCurrentAllRecipes={props.setCurrentAllRecipes}
              favRecipes={props.favRecipes}
              setFavRecipes={props.setFavRecipes}
            />
          </div>
        );
      })}
    </div>
  );
}

export default List;
