
$(document).ready(function () {
    // For loading home content
    $('#home').click();
    $(function ()
    {
        var ticker = function()
        {
            setTimeout(function(){
                $('#ticker li:first').animate( {marginTop: '-120px'}, 800, function()
                {
                    $(this).detach().appendTo('ul#ticker').removeAttr('style');
                });
                ticker();
            }, 4000);
        };
        ticker();
    });
    $('.nav li a').on('click', function(e){

        e.preventDefault(); // prevent link click if necessary?

        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');

        if (!$thisLi.hasClass('active'))
        {
            $ul.find('li.active').removeClass('active');
            $thisLi.addClass('active');
        }

    })

});

/***** Function to load content on menu click *****/
var loadTemplate = function(ele) {
    if(!$(ele).length) {
        var url= ele + '.html';
        //alert(url);
        $('#content').load(url);
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return;
    }
  
    var _id = $(ele).attr('id');
    var url= _id + '.html';
    //alert(url);
    $('#content').load(url);
    
    if(_id == "map_view") {
//        loadScript();
    }
    if(_id == "home") {
//      $('#social-footer').show();
    }
    else {
//      $('#social-footer').hide();
    }

    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
      

