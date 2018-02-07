import React from 'react';

import { storiesOf } from '@storybook/react';

import { ImageList, VerticalList } from '../src/components/List'
import styles from '../src/App.css'
import { items } from './itemsMock'





const ImageLis = (
  <ImageList>
    <li image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png">Slovenčina</li>
    <li image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png">Slovenčina</li>
    <li image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png">Slovenčina</li>
    <li image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png">Slovenčina</li>
  </ImageList>
)
storiesOf('List', module)
  .add('ImageList', () => ImageLis)
  .add('VerticalList', () => 
    <VerticalList>
      <li>Slovenčina</li>
      <li>Slovenčina</li>
      <li>Slovenčina</li>
      <li>Slovenčina</li>
    </VerticalList>
  )