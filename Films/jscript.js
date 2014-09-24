    document.onmousedown=disableclick;
    status="Right Click Disabled";
    function disableclick(event)
    {
        if(event.button==2)
        {
            console.log(status);
            return false;    
        }
    }