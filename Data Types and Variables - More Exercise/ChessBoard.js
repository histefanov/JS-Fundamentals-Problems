function chessBoard(n) {
    console.log('<div class="chessboard">');
    for (let i = 0; i < n; i++) {
        console.log('   <div>');
        for (let j = 0; j < n; j++) {
            console.log(`       <span class="${(i + j) % 2 == 0 ? "black" : "white"}"></span>`);
        }
        console.log('   </div>');
    }
    console.log('</div>');
}
chessBoard(4)