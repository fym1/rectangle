$(function(){
    //get dom elem
    var $width = $('#width'),
            $height = $('#height'),
            $bthCal = $('#calculate'),
            $perimeter = $('#perimeter'),
            $area = $('#area');
            $widthValidate = $('#width-validate'),
            $heightValidate = $('#height-validate'),
            isPassValidate1 = false;
            isPassValidate2 = false;
            $forkMeGH.show('https://github.com/sihan9/rectangle');
            $bszPageFooter.show('body');
    $width.focusout(function() {
        var result = validate($width.val());
        isPassValidate1 = result.isOK;
        console.log(isPassValidate1);
        console.log(isPassValidate2);
        if(!result.isOK) {
            $widthValidate.html('宽度' + result.reason);
            $width.select();
        } else {
            $widthValidate.html('');
        }
    });
    $width.keypress(function(e) {
        if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
          e.preventDefault();
        }
    });
    $height.keypress(function(e) {
        if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });
    $height.focusout(function() {
        var result = validate($height.val());
        isPassValidate2 = result.isOK;
        console.log(isPassValidate2);
        if(!result.isOK) {
            $heightValidate.html('高度' + result.reason);
            $height.select();
        } else {
            $heightValidate.html('');
        }
    });
    $bthCal.click(function(){
        if(!isPassValidate1 || !isPassValidate2) return;
        //get value
        var w = $width.val(),
            h = $height.val();
        //calculate
        var r = new Rectangle(w,h);
        //output
        $perimeter.val(r.perimeter());
        $area.val(r.area());
    });
});