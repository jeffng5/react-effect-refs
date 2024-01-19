import axios from 'axios'
export const getCard = (url2) =>{
    let res = axios.get(url2)
    // let rand = res['data']['cards'][0]['image']
    return res['data']['cards'][0]['image']}

export const setCard = (data) =>{ return(
    <img src= {data}/>)}
