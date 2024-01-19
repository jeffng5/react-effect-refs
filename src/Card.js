import React, { useState, useRef, useEffect } from "react";
import './App.css';
import axios from 'axios'







const Card = () => {

let url2= `https://deckofcardsapi.com/api/deck/new/draw/?count=1`

const [data, setData] = useState()
const [card, setCard] = useState(data)
const [state, setState] = useState()

async function apiCall() { 
    let res = await axios.get(url2)
        console.log(res)
        let deckId= res['data']['deck_id']
        console.log(deckId)
        setState(deckId)
      
    }
console.log(state)

useEffect(() => {

async function getCard() {
let res = await axios.get(url2)
let deckId= res['data']['deck_id']

let res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${state}/draw/?count=1`)
setData(res2['data']['cards'][0]['image'])
console.log(data)
// setCard(res2['data']['cards'][0]['image'])
// console.log(card)
} getCard()}

,[]);




async function handleSubmit(){
    
    let res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${state}/draw/?count=1`)
    setData(res2['data']['cards'][0]['image'])
    console.log(data)
    console.log(state)
    
}







return (
    <>
    <button onClick={handleSubmit}>Hit Me</button>
    <button onClick={apiCall}>Shuffle</button>  
<img src= {data}></img>
</>
 )

}


export {Card} 