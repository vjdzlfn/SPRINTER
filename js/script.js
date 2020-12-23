;(function($){
    $(function(){
        
        $(".slider").bxSlider({
        prevText:'<',
        nextText:'>',
        pager:false,
        controls:true,
        auto:true, //슬라이드 자동 이동
        touchEnabled:false,
        speed:1000,
        pause:7000,
        easing:'ease-in-out'
            
        });
     
        $(".givescroll").scrollToGiveClass({

            baseline:'top', add:'0.5'

        });  

        lightbox.option({
            alwaysShowNavOnTouchDevices:true,
            disableScrolling:true,
            
        });
            

        var full = $('#fullpage').fullpage({
            //options here
            autoScrolling:true,
            scrollHorizontally: false
        });

        $(".mobile_menu_open").click(function(){
            $(".gnb_mobile_wrap").add(this).toggleClass('show');
        });

        $('.subscribe_box').keypress(function(e){
            if (e.which == 13) {
                $re=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
             
                if($(this).val()=='' || $(this).val().length<6 || !$re.test($(this).val())) {
                    alert('이메일 형식이 올바르지 않습니다.');
                }
                else {alert("신청이 완료되었습니다.");
                }
            }
        });     //이메일박스 엔터키 작동시 이벤트

        $("#subscribe_button").click(function(e){
                $re=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
                
                if($('.subscribe_box').val()=='' || $('.subscribe_box').val().length<6 || !$re.test($('.subscribe_box').val())) {
                    alert('이메일 형식이 올바르지 않습니다.');
                }
                else {alert("신청이 완료되었습니다.");
                }
        });     //이메일박스 버튼 클릭시 이벤트


	});
})(jQuery);