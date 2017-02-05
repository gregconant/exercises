module.exports = function(functionToRun, threshold) {
    var calledWithinThreshold = false;

    return function() {
        if(!calledWithinThreshold) {
            calledWithinThreshold = true;
            setTimeout(function() {
                // once function is called,
                // reset the "called" flag so it will
                // execute the next time you call debounce
                calledWithinThreshold = false;
                functionToRun();
            }, threshold);
        }
    }
};
