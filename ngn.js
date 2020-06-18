var videoCurrent = document.getElementById('vid'), marker = document.querySelector("a-marker");
videoCurrent.pause();
AFRAME.registerComponent('vidhandler', {
    init: function () {
        this.toggle = false;
    },
    tick: function () {
        $('#arjsDebugUIContainer').hide();
          if (marker.object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                var promise = videoCurrent.play().then(function() {
                }).catch(function(err){
                    console.log(err)
                })
            }
        } else {
            this.toggle = false;
            document.querySelector("#vid").pause();
        }
    }
});
$('#unmute').click(function(){
    videoCurrent.muted = !videoCurrent.muted;
})