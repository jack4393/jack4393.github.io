 $(function(){
        $("a:lt(6)").each(function(index){
                $(this).click(function(){
                    $("a").removeClass("dainji");
                    $("a").eq(index).addClass("dainji");
                });
            });  
            var b =0;
             $('.kk').each(function(index){
                $(this).click(function(){
                    $(".meng").hide();
                    $(".meng").eq(index).show();
                });
            }); 

            // $('.kk').each(function(index){
            //     $(this).click(function(){
            //         $(".meng").eq(index).hide();
            //     });
            // });  
            
            // for(var i=0;i<Aa.lenght;i++){
            //     Aa[i].click(function(){
            //         this.show()
            //     });
            // }
            $('.header-i').click(function(){
                $('.sss').show();
            });
            $('#btn').click(function(){
                $('.sss').hide();
            });
            $('.fff-buttom').click(function(){
                $('.fff-buttom').hide();
            });
});

   
