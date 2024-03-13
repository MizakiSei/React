import { useContext,useEffect, useState } from "react"
import { SearchInput } from "./components/SearchInput";
import { Context } from "./Context";

//PROMISE DE TODA LA VIDA
export const GifExpertApp = () => {

    const [arrGifsUrl, setData] = useState([]);
    const { items, setItems } = useContext(Context);
    
    useEffect(() => {

        if(items != undefined){
            if(items.length > 0){
                console.log(items)
                const API_KEY = "AIzaSyCsWR92HaLnzPKP3wFCPU6HIM6eietQ0kI"
                const results = fetch(`https://tenor.googleapis.com/v2/search?q=${items}&key=${API_KEY}&client_key=IntegracionGifs&limit=50`)
        
                results.then(resp => resp.json())
                .then (data => {
                    console.log(data)
                    const arrayRaw = data.results;
                    const defArray = []
                    arrayRaw.forEach(element => {
                        defArray.push({id : element.id , url: element.media_formats.gif.url})
                    })
                    setData(defArray);
                })
                .catch(console.warn)
            }
        }

      }, [items])

  return (
    <>
        <h1>Test URL</h1>
        <SearchInput setData = {setItems}/>
        <ol>
            {arrGifsUrl.map( gif => {
                return<li key={gif.id}><img src={gif.url} height="500px"width="500px"/> </li>
            })}
        </ol>
        
    </>
  )
}
//Backup
// export const GifExpertApp = () => {

//     const [gifUrl, setData] = useState();

//     const API_KEY = "AIzaSyCsWR92HaLnzPKP3wFCPU6HIM6eietQ0kI"
//     const results = fetch(`https://tenor.googleapis.com/v2/search?q=tired&key=${API_KEY}&client_key=IntegracionGifs&limit=8`)

//     results.then(resp => resp.json())
//     .then (data => {
//         console.log(data)
//         const url = data.results[0].media_formats.gif.url;
//         setData(url)
//     })
//     .catch(console.warn)
     
   

//   return (
//     <>
//         <h1>Test URL</h1>
//         <img src={gifUrl}/>
        
//     </>
//   )
// }
//WITH AWAIT AND USEEFFECT
// export const GifExpertApp = () => {

//     const [data, setData] = useState();
//     useEffect(() => {
//         async function fetchData() {
//             const API_KEY = "AIzaSyCsWR92HaLnzPKP3wFCPU6HIM6eietQ0kI"
//             // You can await here
//             const response = await fetch(`https://tenor.googleapis.com/v2/search?q=tired&key=${API_KEY}&client_key=IntegracionGifs&limit=1`);
//             const json = await response.json();
//             const url = json.results[0].media_formats.gif.url
//             console.log(json)
//             setData(url)

//         }
//         fetchData();

//         }, []); 

//     return (
//     <>
//         <h1>Test URL</h1>
//         <img src={data}/>
        
//     </>
//     )
// }
