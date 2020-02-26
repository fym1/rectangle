$(function(){
    //get dom elem
    var $width = $('#width'),
            $height = $('#height'),
            $bthCal = $('#calculate'),
            $perimeter = $('#perimeter'),
            $area = $('#area');
    //*calc button click event
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    $bthCal.click(function(){
        //get value
        var w = Number($width.val()),
                h = Number($height.val());
        //calculate
        var p = 2*(w+h),
                a = w*h;
        //output
        $perimeter.val(p);
        $area.val(a);
        $perimeter.val(roundFractional(p, 1));
        $area.val(roundFractional(a, 2));
    });
});