// Google +1
function plusClick(data){
    if(data.state=="on"){
     $("#subscribe").trigger("click");
	 $(".plusone").hide();
    }else if(data.state=="off"){
       
    }
}