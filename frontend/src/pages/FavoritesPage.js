import React from "react";


// This is where faveTodos will assemble into a list with input field to add more. This component will call <FaveTodo /> which will provide the todo item paired with delete function. The faveList[] is where autoComplete will pull faveTodos to add to a list.--sb 

const FavoritesPage = () => {
  
    //this function receives the faveTodo.title and key and populates them into faveList. Contains pseudo code that sb tested a little bit.
      
  
  return (
    <>
     <h1 className='Favs'>Favorites</h1>
     <h3>This will be a list of faveTodos with star "removeFave" icon</h3>
    </>
    );
  };
  
export default FavoritesPage;
  
// The handleStar function could change the state, copy the faveTodo.title, and then send to faveList. Icon needs to change from empty star to filled star.
    // const [starStatus, setStarStatus] = useState([]);
    // const [faveList, setFaveList] = useSemiPersistentState()

    // const handleStar = (e) => {
    //    on (e) change starStatus, label it faveTodo, and fill the star
    // };
  // then maybe
  //   const addFaveTodo = (faveTodo) =>{
          // setFaveList([...faveList, faveTodo])
          // send to FavoritesPage};
  
  // 
//   <>      
//       <ul >
//           {faveList.map((faveTodo) => (
//             <FaveItem
//             key={todo.id}
//             todo={faveTodo.title}
//             handleStar={handleStar}
//             removeStar={removeStar}
//             />
//           ))} 
//         </ul>
// </>
      
