import React, { Component } from 'react'
import { VerticalList } from '../components/List'

class LessonList extends Component{
    render(){
        return (
            <VerticalList>
                <li linkTo="/polynomy">Polynómy</li>
                <li linkTo="/matice">Matice</li>
                <li linkTo="/vektory">Vektory</li>
            </VerticalList>
        )
    }
}
export default LessonList