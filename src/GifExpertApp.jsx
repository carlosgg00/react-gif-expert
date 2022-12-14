import {useState} from 'react'
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([  ]);
    
    //Agregar nuevas categorias
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories  ]);
        // setCategories( cat => [...cat, 'Valorant'] );
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
        //setCategories={ setCategories } 
            onNewCategory={ (event) => onAddCategory(event) }
        />

        {/* Listado de Gif */}
        { 
            categories.map( (category) =>(
                <GifGrid 
                    key={ category }
                    category={ category } />
            ))
        }
    </>
  )
}
