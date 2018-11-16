import $ from 'jquery'


$(function(){
	$('ul>li:odd').css('backgroundColor','red');
	$('ul>li:even').css('backgroundColor','blue');
})