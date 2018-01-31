import React from 'react'
import { ImageList as List } from '../components/List'

const items = [
	{
		name: 'Slovenčina',
		style: {
			backgroundImage: 'url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)'
		}
	},
	{
		name: 'Matematika',
		style: {
			backgroundImage: 'url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)'
		}
	},
	{
		name: 'Nemčina',
		style: {
			backgroundImage: 'url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)',
		}
	},
	{
		name: 'Informatika',
		style: {
			backgroundImage: 'url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)'
		}
	},
]

export default function Home(props){
    return (
        <List items={items} />
    )
}