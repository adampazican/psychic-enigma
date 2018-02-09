import React from 'react'
import { VerticalList } from '../components/List'

export default function LessonList(props){
    return(
        <VerticalList>
            <li linkTo="/polynomy">Polynómy</li>
            <li linkTo="/matice">Matice</li>
            <li linkTo="/vektory">Vektory</li>
        </VerticalList>
    )
}