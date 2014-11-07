
tabmonth= "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
tabmonth=tabmonth.split(',')
var i=-1
tabdate=new Array();
while (tabmonth[++i]){
tabdate[tabmonth[i]]= (i<10)?"0"+(i+1):i+1
}
 
function month(a,b,c,d){
return b+"/"+tabdate[c]+"/"+d
}
 
function convdate(mydate){
tabmydate=mydate.split(' ')
return tabmydate[0].replace(/(\d+)-([a-z]+)-(\d+)/i,month)+" "+tabmydate[1]
}
 
function back2En(){
 $('table tr').find('td:eq(2)').each(function(idx,elt){
 		$(this).text( Endates[idx] ) 
		})
		}
 
function conv2Fr(){
 $('table tr').find('td:eq(2)').each(function(idx,elt){
 		$(this).text( convdate(Endates[idx]) ) 
		})
 
}
 
$(function(){
Endates=new Array();
$('table tr').find('td:eq(2)').each(function(){
 		Endates.push( $(this).text() ) })
 
$('#fr').click( conv2Fr)
$('#en').click( back2En)
 
 
 
})