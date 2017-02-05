module.exports = function(functionToRun, threshold) {
    // declare these up here because they have
    // to be shared across all calls to debounce

    var calledWithinThreshold = false,
    context,
    args;

    return function() {
        // save context and args
        // from most recent time debounce is called
        context = this,
        args = arguments;

        if(!calledWithinThreshold) {
            calledWithinThreshold = true;
            setTimeout(function() {
                // once function is called,
                // reset the "called" flag so it will
                // execute the next time you call debounce
                calledWithinThreshold = false;
                // call the callback, passing in the "this"
                // and arguments from the last time debounce was called
                functionToRun.apply(context, args);
            }, threshold);
        }
    }
};
