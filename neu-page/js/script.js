$(document).ready(function(){
    $('#btnHide').click(function(){
        $('p').hide(1000)
    })
})




$(document).ready(function(){
    //.html() is same as innerHtml
    $('#htmlBtn').click(function(){
       alert( $('#p1').html())
    })


    $('#btnSetHtml').click(function(){
        $('#link1').html('change Html <h1>i m change </h1>')
     })




    //.text()    is same as innerText
    $('#textBtn').click(function(){
        alert( $('#p1').text())
     })

     //.val()    get value
     $('#valueBtn').click(function(){
        alert( $('#txtFName').val())
     })

     // get txt and set it inside value
     $('#btnSetValue').click(function(){
       let fname =  prompt('enter your name')
         $('#txtFName').val(fname)
     })




        //add at the end
     $('#btnAppen').click(function(){
         var link2 = '<a href="#">link2</a>'

         $('#p1').append(link2)
     })
        
     // add at the first
     $('#btnPrepend').click(function(){
        var prepend = '<a href="#">prepend</a>'
        $('#p1').prepend(prepend)
    })
       
    //add for Element
    $('#btnBefor').click(function(){
        var beforeElement = '<a href="#">before Element p</a>'
        $('#p1').before(beforeElement)
    })

    // add after Element
    $('#btnAfter').click(function(){
        var afterElement = '<a href="#">after Element p</a>'
        $('#p1').after(afterElement)
    })



//addClass()  ------   removeClass()   ----------  toggleClass()  or hasClass() with if()
    $('#btnAddClass').click(function(){
        $('#p1').addClass('blue')
    })
})