/* ключ для финальной страницы. если false, то ключи закончиличь */
var key = true;
/*slide-1 */
function changeSex(content){
    $this = content;
    $('.sexCheckbox').removeClass('sexCheckbox-active');
    $this.find('.sexCheckbox').addClass('sexCheckbox-active');
    $('.male-radio').attr('checked', false);
    if ( $this.hasClass('male') ){
        $('#maleP01').attr('checked', true);
    }
    if ( $this.hasClass('female') ){
        $('#maleP02').attr('checked', true);
    }
}
function changeAgree(content){
    $this = content;
    if ( $this.hasClass('agreeCheckbox-active') ){
        $('.agreeCheck').attr('checked', false);
    }
    else {
        $('.agreeCheck').attr('checked', true);
    }
    $('.agreeCheckbox').toggleClass('agreeCheckbox-active');

}
/*slide-3 */
var marginLeft = 0;
var nameGroups = [];
function music(content){
    $this = content;
    var $all = $('.line3__item');
    var index = $all.index($this);
    if ( $this.hasClass('nextItem') ) {
        marginLeft = marginLeft - ($all.eq(index+1).innerWidth());
        $all.removeClass('activeItem').removeClass('prevItem');
        $all.eq(index-1).addClass('prevItem');
        if (index-2 >= 0) {
            $all.eq(index-2).css({'opacity': 0});
        }
        $this.removeClass('nextItem').addClass('activeItem');
        $all.eq(index+1).addClass('nextItem');
        $('.line3').animate({'margin-left': marginLeft+'px'}, 500);

    }
    if ( $this.hasClass('prevItem') ) {
        marginLeft = marginLeft + ($all.eq(index+2).innerWidth());
        $all.removeClass('activeItem').removeClass('prevItem').removeClass('nextItem');
        $all.eq(index-1).addClass('prevItem').css({'opacity': 0.5});
        $this.addClass('activeItem');
        $all.eq(index+1).addClass('nextItem');
        $('.line3').animate({'margin-left': marginLeft+'px'}, 500);
        var progress = $('.progress3__scale').css('width').split('px')[0];
        progress = parseInt(progress)-41;
        $('.progress3__scale').animate({'width': progress+'px'}, 500);
        $('.progress3__numbers').text(index+1+'/17');
        var numberChecked = $('.music'+index+'[checked]').attr('value');
        console.log(numberChecked);
        $('.circle3').removeClass('circle3-active');
        $('.like3__item[data-like="'+numberChecked+'"]').find('.circle3').addClass('circle3-active');

        $('.like3').attr('data-item', index);
    }
}
var  begin = 0;
/*      function musicNew(content){
 $this = content;
 var $all = $('.line3__item');
 var index = $all.index($this);
 var indexActive = $all.index($('.activeItem'));
 var progress = $('.progress3__scale').css('width').split('px')[0];
 var progressNumber  =   parseInt($('.progress3__numbers').text().split('/')[0]);
 $all.removeClass('activeItem');
 $this.addClass('activeItem');

 if (index > indexActive) {
 marginLeft = marginLeft - ($all.eq(begin).innerWidth());
 begin = begin + 1;
 $('.progress3__numbers').text(progressNumber+'/17');
 progress = ($('.progress5').width()/17)*(index+1);

 }
 if (index < indexActive) {
 marginLeft = marginLeft + ($all.eq(begin-1).innerWidth());
 begin = begin -1;
 $('.progress3__numbers').text(progressNumber+'/17');
 progress = ($('.progress5').width()/17)*(index+1);

 }
 $('.progress3__numbers').text(index+1+'/17');
 $('.progress3__scale').animate({'width': progress+'px'}, 500);
 var numberChecked = $('.music'+index+'[checked]').attr('value');
 $('.circle3').removeClass('circle3-active');
 $('.like3__item[data-like="'+numberChecked+'"]').find('.circle3').addClass('circle3-active');
 $('.like3').attr('data-item', index);
 $('.line3').animate({'margin-left': marginLeft+'px'}, 500);
 }*/
function musicCheck(content){
    var $all = $('.line3__item');
    var indexActive = $all.index($('.activeItem'));
    var numberAll = $all.length-1;

    if( !($('.list3__left').hasClass('list3-none')) &&  ( indexActive == 0 ) ){
        $('.list3__left').addClass('list3-none');
    }
    else {
        ($('.list3__left').removeClass('list3-none'))
    }
    if (content.hasClass('like3__item') && ( indexActive == numberAll-1) ){
        $('.list3__right').addClass('list3-none');
    }
    else {
        $('.list3__right').removeClass('list3-none');
        if ( !(content.hasClass('circle3')) && ( indexActive == numberAll)){
            $('.list3__right').addClass('list3-none');
        }

        else {
            $('.list3__right').removeClass('list3-none');
        }
    }

    if( ( indexActive == numberAll) ){
        return false
    }

    else {
        return true
    }

}
function musicLike(content) {
    $this = content;
    var flag = musicCheck($this);
    var index = parseInt($('.like3').attr('data-item'));
    var indexNext = index+1;
    var like = $this.attr('data-like');
    $('.circle3').removeClass('circle3-active');
    $('.music'+index).attr('checked',false);
    $('#musicN'+index+like).attr('checked', true);
    if ( flag == true ){
        $('.line3__item').removeClass('activeItem').fadeOut(0);
        $('.line3__item').eq(indexNext).addClass('activeItem').fadeIn(0);
        $('.like3').attr('data-item', indexNext);
        var numberChecked = $('.music'+indexNext+'[checked]').attr('value');
        $('.like3__item[data-like="'+numberChecked+'"]').find('.circle3').addClass('circle3-active');
        var progress = ($('.progress3').width()/17)*(indexNext+1);
        $('.progress3__numbers').text(indexNext+1+'/17');
        $('.progress3__scale').animate({'width': progress+'px'}, 500);
    }
    else {
        $this.find('.circle3').addClass('circle3-active');
    }

}

function musicLeft(){
    var $all = $('.line3__item');
    var indexActive = $all.index($('.activeItem'));
    var indexNew = indexActive - 1;
    $('.progress3__numbers').text(indexNew+1+'/17');
    var progress = ($('.progress3').width()/17)*(indexActive);
    $('.progress3__scale').animate({'width': progress+'px'}, 500);
    var numberChecked = $('.music'+indexNew+'[checked]').attr('value');
    $('.circle3').removeClass('circle3-active');
    $('.like3__item[data-like="'+numberChecked+'"]').find('.circle3').addClass('circle3-active');
    $('.like3').attr('data-item', indexNew);
    $('.line3__item').removeClass('activeItem').fadeOut(0);
    $('.line3__item').eq(indexNew).addClass('activeItem').fadeIn(0);
}
function musicRight(){
    var $all = $('.line3__item');
    var indexActive = $all.index($('.activeItem'));
    var indexNew = indexActive + 1;

    $('.progress3__numbers').text(indexNew+1+'/17');
    var progress = ($('.progress3').width()/17)*(indexNew+1);
    $('.progress3__scale').animate({'width': progress+'px'}, 500);
    var numberChecked = $('.music'+indexNew+'[checked]').attr('value');
    $('.circle3').removeClass('circle3-active');
    $('.like3__item[data-like="'+numberChecked+'"]').find('.circle3').addClass('circle3-active');
    $('.like3').attr('data-item', indexNew);
    $('.line3__item').removeClass('activeItem').fadeOut(0);
    $('.line3__item').eq(indexNew).addClass('activeItem').fadeIn(0);
}

/* ----- */
/*slide 4 */
function changeCheck(content) {
    $this = content;
    var index = $this.attr('data-check');
    if ( $this.hasClass('group4__check-active') ) {
        $this.removeClass('group4__check-active');
        $('#group4'+index).attr('checked', false);
    }
    else {
        $this.addClass('group4__check-active');
        $('#group4'+index).attr('checked', true);
    }
}
/* ------ */
/* slide 5 */
/* футнкиция которая добавляет выбранные группы из шага 2 в список */
function nextFour(){
    var allItems =  $('.groupList4__item');
    var form = $('.form');
    var j =0;
    for ( var i = 0; i < allItems.length; i++ ){
        if ( allItems.eq(i).find('.group4__check').hasClass('group4__check-active') ) {
            nameGroups[j] = allItems.eq(i).find('.group4__name').text();
            j++
        }
    }
    if (nameGroups.length > 0){
        $('.line5').find('li').remove();
        for (var f =0; f < nameGroups.length; f++ ){
            var item = $('<li class="line5__item">'+nameGroups[f]+'</li>');
            $('<input id="groupPersonN'+f+'5" form="formReg" class="groupPerson-radio groupPerson'+f+'" name="groupPerson'+f+'" type="checkbox" value="5">').appendTo(form);
            $('<input id="groupPersonN'+f+'4" form="formReg" class="groupPerson-radio groupPerson'+f+'" name="groupPerson'+f+'" type="checkbox" value="4">').appendTo(form);
            $('<input id="groupPersonN'+f+'3" form="formReg" class="groupPerson-radio groupPerson'+f+'" name="groupPerson'+f+'" type="checkbox" value="3">').appendTo(form);
            $('<input id="groupPersonN'+f+'2" form="formReg" class="groupPerson-radio groupPerson'+f+'" name="groupPerson'+f+'" type="checkbox" value="2">').appendTo(form);
            $('<input id="groupPersonN'+f+'1" form="formReg" class="groupPerson-radio groupPerson'+f+'" name="groupPerson'+f+'" type="checkbox" value="1">').appendTo(form);
            $('<input id="groupPersonN'+f+'99" form="formReg" class="groupPerson-radio groupPerson'+f+'" name="groupPerson'+f+'" type="checkbox" value="99">').appendTo(form);
            if ( f == 0 ){
                item.addClass('activeItem1');
            }
            if ( f == 1 ){
                item.addClass('nextItem ');
            }
            $('.line5').append(item);
            $('.progress5__numbers').text('1/'+nameGroups.length).attr('data-all', nameGroups.length);
            $('.progress5__scale').width($('.progress5').width()/nameGroups.length).attr('data-length',$('.progress5').width()/nameGroups.length);
        }
        if (nameGroups.length == 1) {
            $('.list5__right').addClass('list5-none');
        }
        $('.line5__item').on('click', function(){
            //   GroupcNew($(this));
        });
    }

}
/*   function groupPerson(content){
 $this = content;
 var $all = $('.line5__item');
 var index = $all.index($this);
 if ( $this.hasClass('nextItem') ) {
 marginLeft = marginLeft - ($all.eq(index+1).innerWidth());
 $all.removeClass('activeItem').removeClass('prevItem');
 $all.eq(index-1).addClass('prevItem');
 if (index-2 >= 0) {
 $all.eq(index-2).css({'opacity': 0});
 }
 $this.removeClass('nextItem').addClass('activeItem');
 $this.removeClass('nextItem').addClass('activeItem');
 $all.eq(index+1).addClass('nextItem');
 $('.line5').animate({'margin-left': marginLeft+'px'}, 500);
 var progress = $('.progress5__scale').css('width').split('px')[0];
 progress = parseInt(progress)+parseInt($('.progress5__scale').attr('data-length'));
 $('.progress5__scale').animate({'width': progress+'px'}, 500);
 $('.progress5__numbers').text(index+1+'/'+$('.progress5__numbers').attr('data-all'));
 var numberChecked = $('.groupPerson'+index+'[checked]').attr('value');
 $('.circle5').removeClass('circle5-active');
 $('.like5__item[data-like="'+numberChecked+'"]').find('.circle5').addClass('circle5-active');

 $('.like5').attr('data-item', index);
 }
 if ( $this.hasClass('prevItem') ) {
 marginLeft = marginLeft + ($all.eq(index+2).innerWidth());
 $all.removeClass('activeItem').removeClass('prevItem').removeClass('nextItem');
 $all.eq(index-1).addClass('prevItem').css({'opacity': 0.5});
 $this.addClass('activeItem');
 $all.eq(index+1).addClass('nextItem');
 $('.line5').animate({'margin-left': marginLeft+'px'}, 500);
 var progress = $('.progress5__scale').css('width').split('px')[0];
 progress = parseInt(progress)-parseInt($('.progress5__scale').attr('data-length'));
 $('.progress5__scale').animate({'width': progress+'px'}, 500);
 $('.progress5__numbers').text(index+1+'/'+$('.progress5__numbers').attr('data-all'));
 var numberChecked = $('.groupPerson'+index+'[checked]').attr('value');
 $('.circle5').removeClass('circle5-active');
 $('.like5__item[data-like="'+numberChecked+'"]').find('.circle5').addClass('circle5-active');

 $('.like5').attr('data-item', index);
 }
 }*/
var begin1 = 0;
var margin1 =0;
/*  function GroupcNew(content){
 console.log(marginLeft);
 $this = content;
 var $all = $('.line5__item');
 var index = $all.index($this);
 var indexActive = $all.index($('.activeItem1'));
 var progress = $('.progress5__scale').css('width').split('px')[0];
 var progressNumber  =   parseInt($('.progress5__numbers').text().split('/')[0]);
 $all.removeClass('activeItem1');
 $this.addClass('activeItem1');

 if (index > indexActive) {
 margin1 = margin1 - ($all.eq(begin1).innerWidth());
 begin1 = begin1 + 1;
 $('.progress5__numbers').text($all.index($this)+1+'/'+$all.length);
 progress = ($('.progress5').width()/$all.length)*(index+1);

 }
 if (index < indexActive) {
 margin1 = margin1 + ($all.eq(begin1-1).innerWidth());
 console.log(marginLeft);
 begin1 = begin1 -1;
 $('.progress5__numbers').text($all.index($this)+1+'/'+$all.length);
 progress = ($('.progress5').width()/$all.length)*(index+1);

 }
 $('.progress5__scale').animate({'width': progress+'px'}, 500);

 var numberChecked = $('.groupPerson'+index+'[checked]').attr('value');
 $('.circle5').removeClass('circle5-active');
 $('.like5__item[data-like="'+numberChecked+'"]').find('.circle5').addClass('circle5-active');
 $('.like5').attr('data-item', index);
 $('.line5').animate({'margin-left': margin1+'px'}, 500);
 }*/

function groupCheck(content){
    var $all = $('.line5__item');
    var indexActive = $all.index($('.activeItem1'));
    var numberAll = $all.length-1;
    if( !($('.list5__left').hasClass('list5-none')) &&  ( indexActive == 0 ) ){
        $('.list5__left').addClass('list5-none');
    }
    else {
        if  ( $all.length > 1) {
            ($('.list5__left').removeClass('list5-none'))
        }
    }

    if (content.hasClass('like5__item') && ( indexActive == numberAll-1) ){
        $('.list5__right').addClass('list5-none');
    }
    else {
        $('.list5__right').removeClass('list5-none');
        if ( !(content.hasClass('circle5')) && ( indexActive == numberAll)){
            $('.list5__right').addClass('list5-none');
        }

        else {
            $('.list5__right').removeClass('list5-none');
        }
    }

    if( ( indexActive == numberAll) ){
        return false
    }

    else {
        return true
    }
}


function groupLike(content) {
    $this = content;
    var flag = groupCheck($this);
    var index = parseInt($('.like5').attr('data-item'));
    var indexNext = index+1;
    var allnumber = $('.line5__item').length;
    var like = $this.attr('data-like');
    $('.circle5').removeClass('circle5-active');
    $('.groupPerson'+index).attr('checked',false);
    $('#groupPersonN'+index+like).attr('checked', true);
    if ( flag == true ){
        $('.line5__item').removeClass('activeItem1').fadeOut(0);
        $('.line5__item').eq(indexNext).addClass('activeItem1').fadeIn(0);
        $('.like5').attr('data-item', indexNext);
        var numberChecked = $('.groupPerson'+indexNext+'[checked]').attr('value');
        $('.like5__item[data-like="'+numberChecked+'"]').find('.circle5').addClass('circle5-active');
        var progress = ($('.progress5').width()/allnumber)*(indexNext+1);
        $('.progress5__numbers').text(indexNext+1+'/'+allnumber);
        $('.progress5__scale').animate({'width': progress+'px'}, 500);
    }
    else {
        $this.find('.circle5').addClass('circle5-active');
    }
}
function groupLeft(){
    var $all = $('.line5__item');
    var indexActive = $all.index($('.activeItem1'));
    var indexNew = indexActive - 1;
    var allnumber = $('.line5__item').length;
    $('.progress5__numbers').text(indexNew+1+'/'+allnumber);
    var progress = ($('.progress5').width()/allnumber)*(indexActive);
    $('.progress5__scale').animate({'width': progress+'px'}, 500);
    var numberChecked = $('.groupPerson'+indexNew+'[checked]').attr('value');
    $('.circle5').removeClass('circle5-active');
    $('.like5__item[data-like="'+numberChecked+'"]').find('.circle5').addClass('circle5-active');
    $('.like5').attr('data-item', indexNew);
    $('.line5__item').removeClass('activeItem1').fadeOut(0);
    $('.line5__item').eq(indexNew).addClass('activeItem1').fadeIn(0);
}
function groupRight(){
    var $all = $('.line5__item');
    var allnumber = $('.line5__item').length;
    var indexActive = $all.index($('.activeItem1'));
    var indexNew = indexActive + 1;

    $('.progress5__numbers').text(indexNew+1+'/'+allnumber);
    var progress = ($('.progress5').width()/allnumber)*(indexNew+1);
    $('.progress5__scale').animate({'width': progress+'px'}, 500);
    var numberChecked = $('.groupPerson'+indexNew+'[checked]').attr('value');
    console.log(numberChecked);
    $('.circle5').removeClass('circle5-active');
    $('.like5__item[data-like="'+numberChecked+'"]').find('.circle5').addClass('circle5-active');
    $('.like5').attr('data-item', indexNew);
    $('.line5__item').removeClass('activeItem1').fadeOut(0);
    $('.line5__item').eq(indexNew).addClass('activeItem1').fadeIn(0);
}
/* -------------*/
/* slide 6 */
function loveMusicChange(content) {
    var $this = content;
    var index = $this.attr('data-check')-1;
    $('.group6__check').removeClass('group6__check-active');
    $this.addClass('group6__check-active');
    $('.lovemusic-radio').attr('checked', false);
    $('#lovemusicN6'+index).attr('checked', true);

}
/*----------*/
/*slide 7 */
function change7Check(content) {
    $this = content;
    var index = $this.attr('data-check');
    if ( $this.hasClass('group7__check-active') ) {
        $this.removeClass('group7__check-active');
        $('#group7'+index).attr('checked', false);
    }
    else {
        $this.addClass('group7__check-active');
        $('#group7'+index).attr('checked', true);
    }
}
var height;
var marginTop = 0;
var heightFirst;

function startInterview(content){
    marginTop = marginTop - height;
    if ( content.hasClass('nextfFinal') ){
        if ( key == false ) {
            $('.page9').removeClass('page-none');
            $('.page8').addClass('page-none');
        }
    }
    $('.allPages').animate({'margin-top': marginTop+'px'}, 500);
}
function heightChange(){
    height = parseInt($(window).height());
    var width = parseInt($(window).innerWidth());
    if ( height > 666  & width > 500 ){
        $('.ballPages').css({'height': height+'px'});
        $('.frame').css({'height': height+'px'});
    }
    else {
        height = 667;
        if (width < 1000) {
            height = 850;
        }
        $('.ballPages').css({'height': height+'px'});
        $('.page1').css({'height': height+'px'});
        $('.frame').css({'height': height+'px'});
    }
}
/*отступ первого элемента */
/* function marginLeftItem(){
 var marginItemFirs1 = $('.line3').outerWidth() - $('.line3__item').eq(0).width() -$('.line3__item').eq(1).width()-34;
 $('.line3__item--1').eq(0).css({'margin-left': marginItemFirs1+'px'});
 }*/
/* hover-registration */
function checkRequiredRegistration(content){
    $this = content;
    var flag = true
    if ( !$('.male-radio').attr('checked')) {
        $('.maleText').addClass('balRequired');
        flag = false
    }
    var allText = $('.edit-text');
    for (var i=0; i<allText.length; i++){
        if (typeof allText.eq(i).attr('data-value') == 'undefined') {
            allText.eq(i).addClass('balRequiredBlock');
            flag = false;
            $('agreeHoverContainerChecked').css('display', 'block');
        }
    }
    if ( !$('.agreeCheck').attr('checked') ){
        $('.agreeLink').addClass('balRequired');
        flag = false;
        $('.agreeHoverContainerChecked').css('display', 'block');
    }
    return flag

}
function checkMusicStyles(){
    var flag = true;
    var musicStyles = $('.line3__item');
    for ( var i=0; i<musicStyles.length; i++) {
        var item = $('.music'+i);
        var flaginner = false;
        for ( var j = 0; j < item.length; j++) {
            if (item.eq(j).attr('checked') == 'checked' ) {

                flaginner = true;
            }
        }
        if (flaginner == false) {
            $('.line3__item').eq(i).addClass('balRequired');
            flag = false;
        }
    }
    if (flag == false ) {
        $('.agreeHoverContainerChecked-3').css('display', 'block');
        $('.line3').css('margin-left', 0);
        $('.progress3__scale').animate({'width': 41+'px'}, 500);
        $('.progress3__numbers').text('1/17');
        $('.line3__item').removeClass('activeItem');
        $('.line3__item').eq(0).addClass('activeItem');
        $('.like3').attr('data-item', 0);
        $('.circle3').removeClass('circle3-active');
        var numberChecked = $('.music0[checked]').attr('value');
        $('.like3__item[data-like="'+numberChecked+'"]').find('.circle3').addClass('circle3-active');
        /* ---------------------------------- */
        marginLeft = 0;

        begin = 0;
        $('.list3__left').addClass('list3-none');
        $('.list3__right').removeClass('list3-none');
    }
    return flag
}
function checkGroup() {
    var flag = false;
    for ( var u = 0; u < $('.group4-box').length; u++ ){
        if ( $('.group4-box').eq(u).attr('checked') == 'checked' ) {
            flag = true;
        }
    }
    if (flag == false ) {
        $('.agreeHoverContainerChecked-4').css('display', 'block');
    }
    return flag
}

function checkMusicGroups(){
    var flag = true;
    var musicStyles = $('.line5__item');
    for ( var i=0; i<musicStyles.length; i++) {
        var item = $('.groupPerson'+i);
        var flaginner = false;
        for ( var j = 0; j < item.length; j++) {
            if (item.eq(j).attr('checked') == 'checked' ) {

                flaginner = true;
            }
        }
        if (flaginner == false) {
            $('.line5__item').eq(i).addClass('balRequired');
            flag = false;
        }
    }
    if (flag == false ) {
        $('.agreeHoverContainerChecked-5').css('display', 'block');
        $('.line5').css('margin-left', 0);
        $('.progress5__scale').animate({'width': ($('.progress5').width())/musicStyles.length+'px'}, 500);
        $('.progress5__numbers').text('1/'+musicStyles.length);
        $('.line5__item').removeClass('activeItem1');
        $('.line5__item').eq(0).addClass('activeItem1');
        $('.like5').attr('data-item', 0);
        var numberChecked = $('.groupPerson0[checked]').attr('value');
        $('.like5__item[data-like="'+numberChecked+'"]').find('.circle5').addClass('circle5-active');
        $('.like5').attr('data-item', 0);
        $('.list5__left').addClass('list5-none');
        $('.list5__right').removeClass('list5-none');
        begin1 = 0;
        margin1 = 0;
    }
    return flag
}
function checkMusicLove() {
    var flag = false;
    for ( var u = 0; u < $('.lovemusic-radio').length; u++ ){
        if ( $('.lovemusic-radio').eq(u).attr('checked') == 'checked' ) {
            flag = true;
        }
    }
    if (flag == false ) {
        $('.agreeHoverContainerChecked-6').css('display', 'block');
    }
    return flag
}
function checkDetail() {
    var flag = false;
    for ( var u = 0; u < $('.lovemusic-radio').length; u++ ){
        if ( $('.group7-box').eq(u).attr('checked') == 'checked' ) {
            flag = true;
        }
    }
    if (flag == false ) {
        $('.agreeHoverContainerChecked-7').css('display', 'block');
    }
    return flag
}
window.onload = function() {
    heightChange();
}
$(function(){
    /* высота экрана */
    heightChange();
    $(window).on('resize',function(){
        heightChange();
    });
    /* ---------------------------------------- */

    /*  какую страницу приветсвия показывать */
    var person =  window.location.toString().split('?')[1];
    if ( person == 'newPerson') {
        $('.page1').removeClass('page-none');
        $('.page2').addClass('page-none');
    }
    /* ---------------------------------------- */
    /* событие с формы */
    $('.edit-text').on('keyup', function(){
        $(this).attr('data-value', this.value);
    });
    $('.edit-text').on('click', function(){
        $(this).removeClass('balRequiredBlock');
    });
    $('.agreeCheckbox').on('click', function(){
        $('.agreeLink').removeClass('balRequired');
    });
    $('.agreeHover__CloseChecked').on('click', function(){
        $('.agreeHoverContainerChecked').css('display', 'none');
    });
    $('.agreeHover__CloseChecked-3').on('click', function(){
        $('.agreeHoverContainerChecked-3').css('display', 'none');
    });
    $('.agreeHover__CloseChecked-4').on('click', function(){
        $('.agreeHoverContainerChecked-4').css('display', 'none');
    });
    $('.agreeHover__CloseChecked-5').on('click', function(){
        $('.agreeHoverContainerChecked-5').css('display', 'none');
    });
    $('.agreeHover__CloseChecked-6').on('click', function(){
        $('.agreeHoverContainerChecked-6').css('display', 'none');
    });
    $('.agreeHover__CloseChecked-7').on('click', function(){
        $('.agreeHoverContainerChecked-7').css('display', 'none');
    });
    $('.button1').on('click', function(){
        //   e.preventDefault();
        if ( checkRequiredRegistration($(this) == true )) {
            startInterview($(this));
        }

    });
    $('.circle3').on('click', function(){
        $('.activeItem').removeClass('balRequired');
    });
    $('.circle5').on('click', function(){
        $('.activeItem1').removeClass('balRequired');
    });
    /* второй пункт */
    $('.list3__left').on('click', function(){
        musicLeft();
        musicCheck($(this));
    });
    $('.list3__right').on('click', function(){
        musicRight();
        musicCheck($(this));
    });
    /*------------------- */
    /* следующая страница */
    /* 4ый пункт */
    $('.list5__left').on('click', function(){
        groupLeft();
        groupCheck($(this));
    });
    $('.list5__right').on('click', function(){
        groupRight();
        groupCheck($(this));
    });
    /* --------------------------- */
    $('.next').add($('.button2')).on('click', function(event){
        event.preventDefault();
        var flag = true;
        if($(this).hasClass('next3')) {
            flag = checkMusicStyles();
        }
        if($(this).hasClass('next4')) {
            flag = checkGroup();
            /* генерация бывранных */
            nextFour();

        }
        if($(this).hasClass('next5')) {
            flag = checkMusicGroups();
        }
        if($(this).hasClass('next6')) {
            flag = checkMusicLove();
        }
        if($(this).hasClass('nextfFinal')) {
            flag = checkDetail();
        }
        if (flag == true){
            startInterview($(this));
        }
        /* marginLeftItem();*/
    });
    /* генерация бывранных */

    /* выбор пола на странице регистрации */
    $('.sex').on('click', function(){
        changeSex($(this));
        $('.maleText').removeClass('balRequired');
    });
    /* соглачие на обрабоку данных на странице регистрации */
    $('.agreeCheckbox').on('click', function(){
        changeAgree($(this));
    });
    /* всплывающее окно */
    $('.agreeHover__Close').add('.agreeHover__ok').on('click', function(){
        $('.agreeHoverContainer').css({'display': 'none'});
    });
    /* открытие всплывающего окна */
    $('.agreeLink').on('click', function(){
        $('.agreeHoverContainer').css({'display': 'block'});
    });
    /* смена стилей музыки на втором слайде */
    $('.line3__item').on('click', function(){
        musicNew($(this));
    });
    /* связь формы и лайков */
    $('.like3__item').on('click', function(){
        musicLike($(this));
    });

    $('.group4__check').on('click', function(){
        changeCheck($(this));
    });

    $('.like5__item').on('click', function(){
        groupLike($(this));
    });

    $('.group6__check').on('click', function(){
        loveMusicChange($(this));
    });

    $('.group7__check').on('click', function(){
        change7Check($(this));
    });
})