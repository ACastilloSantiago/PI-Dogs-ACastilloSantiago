import {
  GET_DOGBYID,
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGSBYRAZA,
  POST_DOG,
  FILTER,
  ORDER,
  RESET,
  TEMPFILTER,
} from "./actions-types";
/// Un estado con TODOS LOS PERROS PARA LOS FILTROS=> TIENE QUE TENER LOS BUSCADOS POR RAZA Y LOS DE LA RUTA GET =>  ALLDOGS
//                                                  DOGS_SHOW
///
let initialState = {
  dogs_Show: [], // para usar con los filtros
  allDogs: [], // todos en general
  dogId: {},
  temps: [],
};
const reducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    // Presentaciones
    case TEMPFILTER:
      if (typeof action.payload === "string") {
        // console.log("entre en crear");
        return {
          ...state,
          dogs_Show: [...state.dogs_Show].filter((dog) => {
            // console.log(dog.temperaments);
            if (dog.temperaments) {
              if (dog.temperaments.includes(action.payload)) return dog;
              return;
            }
            return;
          }),
        };
      } else {
        // caso de array en payload
        console.log("entre en borrar");
        let delet = [...state.allDogs];
        for (const temp of action.payload) {
          console.log("temperamento de broorar", temp, delet);
          delet = delet.filter((dog) => {
            // console.log(dog.temperaments);
            if (dog.temperaments) {
              if (dog.temperaments.includes(temp.trim())) return dog;
              return;
            }
          });
          console.log("temperamento borradp", temp, delet);
        }
        console.log("dogShow terminado", delet);
        return {
          ...state,
          dogs_Show: [...delet],
        };
      }
    //  !action.payload.length
    //       ? [...state.allDogs]
    //       :
    //todo return {
    //   ...state,
    //   dogs_Show: [...state.dogs_Show].filter((dog) => {
    //     console.log(dog.temperaments);
    //     if (dog.temperaments) {
    //       if (dog.temperaments.includes(action.payload)) return dog;
    //       return;
    //     }
    //     return;
    //   }),
    // };
    case RESET:
      return {
        ...state,
        dogs_Show: [...state.allDogs],
      };
    case FILTER:
      switch (action.payload) {
        case "BaseF": {
          return {
            ...state,
            dogs_Show: [...state.allDogs],
          };
        }
        case "Api":
          return {
            ...state,
            dogs_Show: [...state.allDogs].filter(
              (dog) => dog.created === false
            ),
          };

        case "DataBase": {
          return {
            ...state,
            dogs_Show: [...state.allDogs].filter((dog) => dog.created === true),
          };
        }
        default:
          return { ...state };
      }
    case ORDER:
      switch (action.payload) {
        case "BaseO":
          return {
            ...state,
            dogs_Show: [...state.allDogs],
          };
        case "RazaA":
          return {
            ...state,
            dogs_Show: [...state.dogs_Show].sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }

              return 0;
            }),
          };
        case "RazaB":
          return {
            ...state,
            dogs_Show: [...state.dogs_Show].sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }

              return 0;
            }),
          };
        case "PesoA":
          return {
            ...state,
            dogs_Show: [...state.dogs_Show].sort((a, b) => {
              let mediaA = 0;
              a.weight.split(" - ").forEach((num) => {
                mediaA += Number(num);
              });
              let mediaB = 0;
              b.weight.split(" - ").forEach((num) => {
                mediaB += Number(num);
              });
              if (mediaA > mediaB) {
                return 1;
              }
              if (mediaA < mediaB) {
                return -1;
              }

              return 0;
            }),
          };
        case "PesoB":
          return {
            ...state,
            dogs_Show: [...state.dogs_Show].sort((a, b) => {
              let mediaA = 0;
              a.weight.split(" - ").forEach((num) => {
                mediaA += Number(num);
              });
              let mediaB = 0;
              b.weight.split(" - ").forEach((num) => {
                mediaB += Number(num);
              });
              if (mediaA < mediaB) {
                return 1;
              }
              if (mediaA > mediaB) {
                return -1;
              }

              return 0;
            }),
          };
        default:
          return { ...state };
      }

    // Datos
    case GET_DOGBYID:
      return { ...state, dogId: action.payload };
    case GET_DOGS:
      return {
        ...state,
        allDogs: [...action.payload],
        dogs_Show: [...action.payload],
      };
    case GET_DOGSBYRAZA:
      return {
        ...state,
        // allDogs: [...action.payload],
        dogs_Show: [...action.payload],
      };
    case GET_TEMPERAMENTS:
      return { ...state, temps: action.payload };
    case POST_DOG:
      return {
        ...state,
        allDogs: [...state.allDogs, ...action.payload],
        // dogs_Show: [...state.allDogs, ...action.payload],
      };
    default:
      return { ...state };
  }
};

export default reducer;
