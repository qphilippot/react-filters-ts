// @ts-ignore
import {useFilterDispatch, useFilters} from "../hooks/FilterContext.tsx";

export default function FilterList() {
    const filters = useFilters();
    const dispatch = useFilterDispatch();
console.log(filters);
    return (
        <section>
            <h2>Filtres actifs:</h2>
        <ul>
            {
                filters.map(filter => (
                    <li key={filter.getId()}>
                        <b>{filter.getName()}:</b>{filter.getValue()}
                    </li>
                ))
            }
        </ul>
            <br/>
            <h2>Changer de filtres:</h2>
            <ul>
                {
                    filters.map(filter => (
                        <li key={filter.getId()}>
                            <b>{filter.getName()}:</b>
                            {
                                filter.valuesAllowed().map(value => (
                                    <button
                                        key={filter.id +'-' + value}
                                        onClick={() => dispatch({ type: 'update', attribute: filter.getId(), eq: value})}
                                    >
                                        { value }
                                    </button>
                                ))
                            }
                            <button onClick={() => dispatch({type: 'clear', attribute: filter.getId()})}>reset</button>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}
