import React from 'react'
import { SearchPlayer } from '../project-hind-imane/src/StoreFootball';
// import Joueurs from './Joueurs'
import useDispatch from "react-redux"
export default function RechercheJoueurs() {
       
      const dispatch=useDispatch()
       return (
        <div>
            <fieldset>
                <form onClick={(e)=>dispatch(SearchPlayer(e))}>
                <h1>Recherche Joueurs</h1><br/>
                <input type="text" />
                <br/>
                <button>Recherche</button>
                </form>
                <fieldset className='joueurs'>
                  <h1>Joueurs</h1>
                    
                        </fieldset>
                    </fieldset>
            </div>
  )
}