import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export default function GifExpertApp() {
    const [categories, setCategories] = useState(['Demon Slayer','One Punch', 'Dragon ball'])
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* titulo */}
            <div>GifExpertApp</div> 

            {/* Input */}
            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory = {onAddCategory}
            />

            {/* Listado de Gif */}
            
           
            {   categories.map(category => (
                    <GifGrid key={ category } 
                    category={ category }/>
                ))
            }
               
           




        </>
    )
}
