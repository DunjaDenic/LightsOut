$(document).ready(function(){
    let time=0;
    let numberOfMoves=0;

    $(document).ready(function pocetak(){
        mix();
            
        var colorCheck = checkStart();
        if (colorCheck  == "bad"){arguments.callee()}
        else if (colorCheck  == "good"){
            var degrees = 45;
            $(".square").on('click', function(event) {
                if (numberOfMoves==0) { time=Date.now(); }
                getSquares(this.id);
                numberOfMoves++;
                degrees += 45;
                $('.square').css ({
                    'transform': 'rotate('+degrees+'deg)',
                    '-webkit-transform': 'rotate('+degrees+'deg)',
                    '-moz-transform': 'rotate('+degrees+'deg)' });
                check();
                return false;});

            $(".ikonica1").on('click', () => {
                $("#popup1").css("display", "flex");});

            $("#close").on('click', () => {
                $("#popup1").css("display", "none");});
            $(document).on('keyup', (e) => {
                if (e.key == "Escape") {
                    $("#popup1").css("display", "none");} });} })

    function mix() {
        giveColor($("#sq00"), rnd());
        giveColor($("#sq01"), rnd());
        giveColor($("#sq02"), rnd());
        giveColor($("#sq10"), rnd());
        giveColor($("#sq11"), rnd());
        giveColor($("#sq12"), rnd());
        giveColor($("#sq20"), rnd());
        giveColor($("#sq21"), rnd());
        giveColor($("#sq22"), rnd()); }

    function giveColor(div, x) {
        switch(x) {
                case 0: $(div).addClass("boja1"); break;
                case 1: $(div).addClass("boja2"); break; } }
    
    function rnd() { return Math.round(Math.random()); }
    
    function alertEnd() {
        $("#popup2").css("display", "flex"); }

    function checkStart() {
        var blueSquares = $(".boja1").length;
        var redSquares = $(".boja2").length;
        
        if (blueSquares == 9 || redSquares == 9) return "bad";
        else return "good"; }
    
    function check(){  
        var blueSquares = $(".boja1").length;
        var redSquares = $(".boja2").length;
        
        if (blueSquares == 9 || redSquares == 9) {
            setTimeout(() => { alertEnd(); }, 150);
            time = (Date.now()-time)/1000; } 
        
        time= Math.round(time * 100) / 100;
        $("#time-value").text(time+"s");
        $("#moves-value").text(numberOfMoves);}

    function changeColor(square) {
        if ($(square).hasClass("boja1")) {
            $(square).addClass("boja2");
            $(square).removeClass("boja1"); }
        else {
            $(square).addClass("boja1");
            $(square).removeClass("boja2"); } }

    function getSquares (squareID){    
        var squares = [];
        var i = parseInt(squareID.charAt(2));
        var j = parseInt(squareID.charAt(3));
        squares[0]=(`#sq${i}${j}`);
        squares[1]=(`#sq${i+1}${j}`);
        squares[2]=(`#sq${i}${j+1}`);
        squares[3]=(`#sq${i-1}${j}`);
        squares[4]=(`#sq${i}${j-1}`);

        for(i=0; i<5; i++) {
            changeColor(squares[i]); }; }
});
//fix transform issues

