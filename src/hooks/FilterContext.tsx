// import { createContext, useContext, useReducer } from "react";
//
// const FilterContext = createContext(null);
//
// const FilterDispatchContext = createContext(null);
//
//
// function filtersReducer(filters, action) {
//     // return filters;
//     switch (action.type) {
//         case 'update': {
//             return filters.map(filter => {
//                 if (filter.attribute === action.attribute) {
//                     // todo update with VO
//                     return {
//                         ...filter,
//                         eq: action.eq,
//                         active: true
//                     }
//                 }
//
//                 return { ...filter };
//             });
//         }
//         case 'reset': {
//             return initialFilters;
//         }
//
//         case 'clear': {
//             return filters.map(filter => {
//                 if (filter.attribute === action.attribute) {
//                     const initial = initialFilters.find(initialFilter => initialFilter.attribute === action.attribute);
//                     // todo update with VO
//                     return {
//                         ...filter,
//                         eq: initial.eq,
//                         active: initial.active
//                     }
//                 }
//
//                 return { ...filter };
//             });
//         }
//     }
// }
//
// const initialFilters = [
//     { _id: 'filter-color', attribute: 'color', eq: 'blue', valuesAllowed: ['blue', 'red', 'green', 'orange'], active: false },
//     { _id: 'filter-shape', attribute: 'shape', eq: 'square', valuesAllowed: ['square', 'circle'], active: false }
// ];
//
// export function FilterProvider({ children }) {
//     // @ts-ignore
//     const [ filters, dispatch ] = useReducer(
//         filtersReducer,
//         initialFilters
//     );
//
//     return (
//         <FilterContext.Provider value={filters}>
//             <FilterDispatchContext.Provider value={dispatch}>
//                 { children }
//             </FilterDispatchContext.Provider>
//         </FilterContext.Provider>
//     )
// }
//
// export function useFilters() {
//     return useContext(FilterContext);
// }
//
// export function useFilterDispatch() {
//     return useContext(FilterDispatchContext);
// }


import { createContext, useContext, useReducer } from "react";
import {ShapeFilter} from "../Models/ShapeFilter.ts";
import {ColorFilter} from "../Models/ColorFilter.ts";
import {FilterInterface} from "../Interfaces/FilterInterface.ts";
import {updateFilter} from "../Services/FilterService.ts";

const FilterContext = createContext(null);

const FilterDispatchContext = createContext(null);

const initialFilters = [
    new ShapeFilter(false, 'shape', 'square'),
    new ColorFilter(false, 'color', 'red')
];
function filtersReducer(filters: FilterInterface[], action) {
    // return filters;
    switch (action.type) {
        case 'update': {
            return filters.map(filter => {
                if (filter.getId() === action.attribute) {
                    // todo update with VO
                    return updateFilter(filter, action.eq)
                }

                return filter;
            });
        }
        case 'reset': {
            return  initialFilters
        }

        case 'clear': {
            return filters.map(filter => {
                if (filter.getId() === action.attribute) {
                    return initialFilters.find(
                        initialFilter => initialFilter.getId() === action.attribute
                    );
                }

                return filter;
            });
        }
        default: {
            console.log("defualt");
            return filters;

        }
    }
}







export function FilterProvider({ children }) {
    // @ts-ignore
    const [ filters, dispatch ] = useReducer(
        filtersReducer,
        [...initialFilters]
    );

    return (
        <FilterContext.Provider value={filters}>
            <FilterDispatchContext.Provider value={dispatch}>
                { children }
            </FilterDispatchContext.Provider>
        </FilterContext.Provider>
    )
}

export function useFilters() {
    return useContext(FilterContext);
}

export function useFilterDispatch() {
    return useContext(FilterDispatchContext);
}
