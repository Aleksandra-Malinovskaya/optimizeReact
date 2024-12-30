import { useMemo } from "react";

const ItemList = ({items, search}) =>{
    
    const filteredmas = useMemo(() =>{
        return items.filter(item => item.includes(search));
    },[items, search]);

    return(
        <ul>{filteredmas.map((item, index) => (
                <li key={index +"a"}>{item}</li>
            ))}
        </ul>
    )
} 
export default ItemList;