(window.onload = function() {
    $('#filter').fadeOut(1500);
})();

function cntBtn(){
    var cnt = document.getElementById("contact");
    if(cnt.style.display=="block"){
        // noneで非表示
        $('#contact').hide("");
        let ht = $('#medium').height();
        ht -= 60;
        $('#medium').animate({'height':ht +"px"},"slow");
	}else{
        // blockで表示
        var ht = $('#medium').height();
        ht += 60;
        $('#medium').animate({'height':ht +"px"},"slow");
        $('#contact').show();
	}
}


  function pageBtn(val){
    $.when(
        $('#filter').fadeIn(1000),
    ).done(function(){
        if(val == 1){
        document.location.href="https://tt-sn.github.io/design.io/photo/about.html";
        }
        else if(val == 2){
            document.location.href="https://tt-sn.github.io/design.io/portfolio";
        }
        else if(val == 3){
            document.location.href="https://tt-sn.github.io/design.io/photo/make.html";
        }
        else if(val == 4){
            document.location.href="https://tt-sn.github.io/design.io/photo/photo.html";
        }

        else if(val == "MC"){
            document.location.href="https://play.google.com/store/apps/details?id=com.ttsn.MemoryCalculator&hl=ja"
        }
        else if(val == "cnv"){
            document.location.href="https://tt-sn.github.io/design.io/converter/"
        }
    });

  }
