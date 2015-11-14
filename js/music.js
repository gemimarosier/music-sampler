$(document).ready(function(){

 function hideAll() {
        $('#green').hide();
        $('#orange').hide();
        $('#live').hide();
        $('#change').hide();
    }
        
        hideAll();
        
        $('.albumcover').click (function() {
        
          hideAll();
          
           switch ( $(this).attr("id") ) {
            case "thegreen" :
                $('#green').show();
                break;
            case "theorange" :
                $('#orange').show();
                break;
            case "thelive" :
                $('#live').show();
                break;
            case "thechange" :
                $('#change').show();
                break;
                }
            });
            
             function hideAll2() {
        $('#text').hide();
        
    }
    
    	hideAll2();
     
            

    
	$('#main').click (function() {
		$('#text').slideToggle();
	});
    
    



});