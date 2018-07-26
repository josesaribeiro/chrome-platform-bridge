// DOM loaded
(async function() {


    $("#preflight-check-btn").click(async function () {
        try {
            $("#progress").show();
            $("#preflight-check-btn").prop('disabled', true);
            $("#system-ready-alert").hide();
            $("#system-not-ready-alert").hide();
        
            var bridge = new ChromePlatformBridge();
            var result = await bridge.invoke({method:"example1"});
            $("#system-ready-alert").show();
        }
        catch(err) {
            $("#system-not-ready-alert").show();
        }
        finally {
            $("#progress").hide();
            $("#preflight-check-btn").prop('disabled', false);
        }
    });


    $("#testbtn").click(async function () {
        try {
            $("#testbtn").prop('disabled', true);

            var bridge = new ChromePlatformBridge();
            var result = await bridge.invoke({method:"example1"});
            $("#result").text(result);    
        }
        catch(err) {
            alert(err);
        }
        finally {
            $("#testbtn").prop('disabled', false);
        }
    });

    $("#testbtn2").click(async function () {
        try {
            var bridge = new ChromePlatformBridge();
            var result = await bridge.invoke({method:"example2"});
            $("#result2").text(result);
        }
        catch(err) {
            alert(err);
        }

    });
})();