$(function () {

    var day = $('<p>');
    var box9 = $('#div9');
    var box10 = $('#div10');
    var box11 = $('#div11');
    var box12 = $('#div12');
    var box1 = $('#div1');
    var box2 = $('#div2');
    var box3 = $('#div3');
    var box4 = $('#div4');
    var box5 = $('#div5');

    box9.val(localStorage.getItem('Entry9'));
    box10.val(localStorage.getItem('Entry10'));
    box11.val(localStorage.getItem('Entry11'));
    box12.val(localStorage.getItem('Entry12'));
    box1.val(localStorage.getItem('Entry1'));
    box2.val(localStorage.getItem('Entry2'));
    box3.val(localStorage.getItem('Entry3'));
    box4.val(localStorage.getItem('Entry4'));
    box5.val(localStorage.getItem('Entry5'));

    let button9 = $('#btn9');
    let button10 = $('#btn10');
    let button11 = $('#btn11');
    let button12 = $('#btn12');
    let button1 = $('#btn1');
    let button2 = $('#btn2');
    let button3 = $('#btn3');
    let button4 = $('#btn4');
    let button5 = $('#btn5');

    var timeNow = parseInt(moment().format('HH'));

    function clear(){
        localStorage.clear();

        box9.val('');
        box10.val('');
        box11.val('');
        box12.val('');
        box1.val('');
        box2.val('');
        box3.val('');
        box4.val('');
        box5.val('');
    }

    function tick(){
        day.text(moment().format('LL'));
        $('.day').append(day);
    }

    function checkTime(){

        if(parseInt(box9.attr('data-hour'))>timeNow){
            box9.removeClass('past present future');
            box9.addClass('future');
        
        } else if(parseInt(box9.attr('data-hour'))=== timeNow){
            box9.removeClass('past present future');
            box9.addClass('present');

        } else{
            box9.removeClass('past present future');
            box9.addClass('past');
        }

        if(parseInt(box10.attr('data-hour'))>timeNow){
            box10.removeClass('past present future');
            box10.addClass('future');
        
        } else if(parseInt(box10.attr('data-hour'))=== timeNow){
            box10.removeClass('past present future');
            box10.addClass('present');

        } else{
            box10.removeClass('past present future');
            box10.addClass('past');
        }

        if(parseInt(box11.attr('data-hour'))>timeNow){
            box11.removeClass('past present future');
            box11.addClass('future');
        
        } else if(parseInt(box11.attr('data-hour'))=== timeNow){
            box11.removeClass('past present future');
            box11.addClass('present');

        } else{
            box11.removeClass('past present future');
            box11.addClass('past');
        }

        if(parseInt(box12.attr('data-hour'))>timeNow){
            box12.removeClass('past present future');
            box12.addClass('future');
        
        } else if(parseInt(box12.attr('data-hour'))=== timeNow){
            box12.removeClass('past present future');
            box12.addClass('present');

        } else{
            box12.removeClass('past present future');
            box12.addClass('past');
        }

        if(parseInt(box1.attr('data-hour'))>timeNow){
            box1.removeClass('past present future');
            box1.addClass('future');
        
        } else if(parseInt(box1.attr('data-hour'))=== timeNow){
            box1.removeClass('past present future');
            box1.addClass('present');

        } else{
            box1.removeClass('past present future');
            box1.addClass('past');
        }

        if(parseInt(box2.attr('data-hour'))>timeNow){
            box2.removeClass('past present future');
            box2.addClass('future');
        
        } else if(parseInt(box2.attr('data-hour'))=== timeNow){
            box2.removeClass('past present future');
            box2.addClass('present');

        } else{
            box2.removeClass('past present future');
            box2.addClass('past');
        }

        if(parseInt(box3.attr('data-hour'))>timeNow){
            box3.removeClass('past present future');
            box3.addClass('future');
        
        } else if(parseInt(box3.attr('data-hour'))=== timeNow){
            box3.removeClass('past present future');
            box3.addClass('present');

        } else{
            box3.removeClass('past present future');
            box3.addClass('past');
        }

        if(parseInt(box4.attr('data-hour'))>timeNow){
            box4.removeClass('past present future');
            box4.addClass('future');
        
        } else if(parseInt(box4.attr('data-hour'))=== timeNow){
            box4.removeClass('past present future');
            box4.addClass('present');

        } else{
            box4.removeClass('past present future');
            box4.addClass('past');
        }

        if(parseInt(box5.attr('data-hour'))>timeNow){
            box5.removeClass('past present future');
            box5.addClass('future');
        
        } else if(parseInt(box5.attr('data-hour'))=== timeNow){
            box5.removeClass('past present future');
            box5.addClass('present');

        } else{
            box5.removeClass('past present future');
            box5.addClass('past');
        }
    } 

    tick();
    setInterval(checkTime, 600000);

    button9.on('click', function(){
        event.preventDefault();
        if(box9.val()!==''){
            localStorage.setItem('entry9',box9.val());
        }
    });

    button10.on('click', function(){
        event.preventDefault();
        if(box9.val()!==''){
            localStorage.setItem('entry10',box10.val());
        }
    });

    button11.on('click', function(){
        event.preventDefault();
        if(box11.val()!==''){
            localStorage.setItem('entry11',box11.val());
        }
    });

    button12.on('click', function(){
        event.preventDefault();
        if(box12.val()!==''){
            localStorage.setItem('entry12',box12.val());
        }
    });

    button1.on('click', function(){
        event.preventDefault();
        if(box1.val()!==''){
            localStorage.setItem('entry1',box1.val());
        }
    });

    button2.on('click', function(){
        event.preventDefault();
        if(box2.val()!==''){
            localStorage.setItem('entry2',box2.val());
        }
    });

    button3.on('click', function(){
        event.preventDefault();
        if(box3.val()!==''){
            localStorage.setItem('entry3',box3.val());
        }
    });

    button4.on('click', function(){
        event.preventDefault();
        if(box4.val()!==''){
            localStorage.setItem('entry4',box4.val());
        }
    });

    button5.on('click', function(){
        event.preventDefault();
        if(box5.val()!==''){
            localStorage.setItem('entry5',box5.val());
        }
    });

    checkTime();
});