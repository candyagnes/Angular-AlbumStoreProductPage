export interface Album {
    name:string;
    releaseDate:string;
    coverImage:string;
    tracks:Track[];
}
import {Track} from './track'