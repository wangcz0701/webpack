
import $ from 'jquery'
import './css/index.css'


import './css/test.less'

import './css/demo.scss'


$(function () {  
  $('ul>li:odd').css('backgroundColor', 'skyblue')
  $('ul>li:even').css('backgroundColor', 'lightpink')
})