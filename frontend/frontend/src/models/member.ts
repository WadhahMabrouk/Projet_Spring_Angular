import { Article } from "./article";
import { Event } from "./event";
import { Tool } from "./tool";

export interface Member {
    id:String,
    cin:String,
    nom:String,
    prenom:String,
    dateNaissance:String,
    createdDate:String,
    cv:String,
    email:String,
    password:String,
    type?:string,
    pubs:Article[],
    events?:Event[],
    outils?:Tool[],

    //etudiant
    sujet?:String,
    dateInscription?:String,
    diplome?:String,

    //enseignant
    grade?:String,
    etablissement?:String,


}