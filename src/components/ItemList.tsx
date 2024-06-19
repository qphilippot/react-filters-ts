// @ts-ignore
import {useFilters} from "../hooks/FilterContext.tsx";

export default function ItemList({ items }) {
    return (
        <ul className='items-list'>
            {
                items.map(item => (
                    <li
                        key={item.id}
                        className={item.shape + ' ' + item.color }
                    >
                    </li>
                ))
            }
        </ul>
    );
}
