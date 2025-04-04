export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    vehicles: [],
    favorites:  []
    
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case "set_personajes":
      const { personaje } = action.payload
      return {
        ...store,
        characters: personaje
      }
    case "set_planets":
      const { planet } = action.payload
      return {
        ...store,
        planets: planet
      }
    case "set_vehicles":
      const { vehicle } = action.payload
      return {
        ...store,
        vehicles: vehicle
      }
      case "newFavorite":
        const addFavorite = action.payload
        return {
          
          ...store,
          favorites: [...store.favorites, addFavorite]
        }
        case "removeFavorite":
          const favoriteName= action.payload
          return{
            ...store,
            favorites: store.favorites.filter((name) => name !== favoriteName)
          }
    
    default:
      throw Error('Unknown action.');
  }
}
