// @ts-ignore
import {useFilters} from "../hooks/FilterContext.tsx";
import ItemList from "./ItemList.tsx";

export default function FilteredItemList({ items }) {
    const filters = useFilters();

    const filteredItems = items.filter(item => {
        return filters.every(filter => {
            return filter.isSatisfiedBy(item);
        });
    })
    return (
        <ItemList items={filteredItems}/>
    );
}
