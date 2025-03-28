import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import {useParams} from 'react-router-dom'
import storeReducer from '../store'

const Description = () => {
    const [character, setCharacter] = useState();
    const {store, dispatch} = useGlobalReducer()
    const {uid} = useParams()
    function descriptionApi (){
        fetch("https://www.swapi.tech/api/people/" + uid)
        .then((response)=>{return response.json()})
        .then((data)=>{ 
            console.log(data.result.properties); 
           setCharacter(data.result.properties)
        })
        .catch((err)=>{return err}) 
    }
    console.log(store.characterDescription);
    
    useEffect(()=>{
        descriptionApi()
    },[])
    return (
        <>
            <div class="card mb-3" style={{"maxWidth": "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{character && character.name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description