import {useFilters} from "../hooks/FilterContext.tsx";

export default function FilterList() {
    const filters = useFilters();

    return (
        <ul>
            {
                filters.map(filter => (
                    <li key={filter.attribute}>
                        <b>{filter.attribute}:</b>{filter.eq}
                    </li>
                ))
            }
        </ul>
    );
}
