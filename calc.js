/* exported Rectangle, validate, roundFractional */
function Rectangle(width, height) {
    var w = Number(width),
        h = Number(height);
 
    this.area = function() {
      return roundFractional(w * h, 2);
    };
 
    this.perimeter = function() {
      return roundFractional(2 * (w + h), 2);
    };
    function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
}
function validate(data) {
  var result = {
    isOK: false,
    reason: ''
  };

  if(data === '') {
    result.reason = '不能为空！';
    return result;
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)) {
    result.reason = '必须是数值';
    return result;
  }

  if(Number(data) < 0) {
    result.reason = '必须大于零';
    return result;
  }

  result.isOK = true;
  return result;
}