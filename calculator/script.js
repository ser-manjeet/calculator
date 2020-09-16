document.addEventListener( 'DOMContentLoaded', () => {
    var inputCalc = document.querySelector( '#input-calc' );
    var calcPadBtn = document.querySelectorAll( '.calc-button' );
    var clearPad = document.querySelector( '#clear' );
    var calculate = document.querySelector( '#calculate' );

    /** Calculator Button */
    calcPadBtn.forEach( cpb => {
        cpb.addEventListener( 'click', function() {
            let inputOpr = this.getAttribute( 'data-pad' );
            inputCalc.value = inputCalc.value + inputOpr;
        } );
    } );

    /** Clear Calculator pad */
    clearPad.addEventListener( 'click', () => {
        inputCalc.value = '';
    } );

    /** Calculate string */
    function calculaterString() {
        try {
            let inputData = inputCalc.value;
            inputCalc.value = eval( inputData );
        } catch(err) {
            alert(err)
        }
    }

    /** Click event on = */
    calculate.addEventListener( 'click', calculaterString );

    /** enter key code */
    inputCalc.addEventListener( 'keyup', ( e ) => {
        ( e.keyCode === 13 ) && calculaterString();
    } );


} );