import {FilterInterface} from "../Interfaces/FilterInterface.ts";
import {ShapeFilter} from "../Models/ShapeFilter.ts";
import {ColorFilter} from "../Models/ColorFilter.ts";

function changeFilterState(filter: FilterInterface, isEnable: boolean): FilterInterface {
    if (filter instanceof ShapeFilter) {
        return new ShapeFilter(
            isEnable,
            filter.getName(),
            filter.getValue()
        );
    }

    if (filter instanceof ColorFilter) {
        return new ColorFilter(
            isEnable,
            filter.getName(),
            filter.getValue()
        );
    }

    throw new Error('Not found exception');
}
export function enableFilter(filter: FilterInterface): FilterInterface {
    return changeFilterState(filter, true);
}

export function disableFilter(filter: FilterInterface): FilterInterface {
    return changeFilterState(filter, false)
}

export function updateFilter(filter: FilterInterface, newValue: any) {
    console.log('upadateFilter', newValue);
    if (filter instanceof ShapeFilter) {
        return new ShapeFilter(
            true,
            filter.getName(),
            newValue
        );
    }

    if (filter instanceof ColorFilter) {
        return new ColorFilter(
            true,
            filter.getName(),
            newValue
        );
    }
}
