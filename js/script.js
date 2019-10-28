$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.)


//test_array.forEach(function(items,index,my_array) {
    //my_array[index]=items+"ay"
//});
//console.log(test_array);
function adday(mystring){
    return mystring + "ay";
}
$("button").click(() => {
    let message= $("input").val();
    //adday(message)
    let newmessage= adday(message);
  $("body").append(newmessage);
});


});