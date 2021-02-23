import {createContext} from 'react';

export const UserContext = createContext({ville:"Lyon", setVille:(v)=>{this.ville=v;}});