$(function(){
    //get dom elem
    var $width = $('#width'),
            $height = $('#height'),
            $bthCal = $('#calculate'),
            $perimeter = $('#perimeter'),
            $area = $('#area');

    $bthCal.click(function(){
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