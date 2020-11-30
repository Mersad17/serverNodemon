console.log('hi');


$(document).on('click','#button-search',()=>{
    console.log('re')
});

$(document).on('keyup','#input-search',()=>{
    const search=$("#input-search").val();
    //requet get en jquery

    $.get('/search?search=' +search,(results)=>{ 
        //connect with handelbars
        const html=$('#template-products').html();
        var template = Handlebars.compile(html);
        // execute the compiled template and print the output to the console
        const renderHtml = template({ 
             results });
             console.log("🚀 ~ file: index.js ~ line 19 ~ $.get ~ results", results)
             
        $("#table").html(renderHtml)
    });

});
