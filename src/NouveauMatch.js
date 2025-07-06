import React,{useState} from "react";
import { useDispatch } from "react-redux";
// import { AddMatch } from "./reducers/ReducerMatch";
import { AddMatch } from "./StoreFootball";
import './GlobalStyles.css';

export default function NouveauMatch(){
const dispatch=useDispatch()
const [id,setId]=useState('')
const [date,setDate]=useState('')
const [id_j1,setIdJoueur1]=useState('')
const [id_j2,setIdJoueur2]=useState('')
const [id_winner,setWinner]=useState('')
    return(<div>
        <form className="form-match">
            <fieldset>
                <table className="tab-form-match">
                      <tr>
                          <td>Id:</td><td><input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/></td>
                      </tr>
                      <tr>
                          <td>Date : </td><td><input type="date"  value={date} onChange={(e)=>{setDate(e.target.value)}}/></td>
                      </tr>
                      <tr>
                          <td>id_joueur1: </td><td><input type="text" value={id_j1}  onChange={(e)=>{setIdJoueur1(e.target.value)}}/></td>
                     </tr>
                     <tr>
                          <td>id_joueur2: </td><td><input type="text" value={id_j2}  onChange={(e)=>{setIdJoueur2(e.target.value)}}/></td>
                     </tr>
                     <tr>
                          <td>id_gagnant: </td><td><input type="text" value={id_winner}  onChange={(e)=>{setWinner(e.target.value)}}/></td>
                      </tr>
                      <tr>
                           <td colSpan="2"> <button type="button"   onClick={()=>{dispatch(AddMatch(id,date,id_j1,id_j2,id_winner));setId('');setDate('');setIdJoueur1('');setIdJoueur2('');setWinner('')}}> Submit  </button> </td>
                      </tr>
                </table>
            </fieldset>
        </form>
    </div>)
}


