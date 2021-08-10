let app = Vue.createApp({
    data() {
        return {
            board: ["", "", "", "", "", "", "", "", ""],
            player: "X",
            ganador: [],
            ended: false,
            mensaje: "",
            winnerposition: [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
        }
    }, methods: {
        clickhandler(pos) {
            if (this.board[pos] != "") { return }
            this.board[pos] = this.player;
            if (this.checkwinner()) {
                this.ganador = this.checkwinner()
                this.ended = true;
                this.mensaje = this.player + " Wins";
                return
            }
            if (this.checkdraw()) {
                this.mensaje = "It's a draw"
                this.ended = true
            }
            (this.player == "X") ? this.player = "O" : this.player = "X";
        }, checkwinner() {
            for (let i of this.winnerposition) {
                if ((this.board[i[0]] == this.player && this.board[i[1]] == this.player) && this.board[i[2]] == this.player) {
                    return i
                }
            }
            return false
        }, reset() {
            this.board = ["", "", "", "", "", "", "", "", ""];
            this.player = "X";
            this.ended = false;
            this.ganador = []
        }, checkdraw() {
            return this.board.every((x) => x != "")
        }
    }

})
app.mount(".app-container")