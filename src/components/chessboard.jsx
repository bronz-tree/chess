import React from 'react';
import SingleSquare from './singleSquare.jsx';

const defaultStyle ={
    wrapper:{
        height: '100%', 
        backgroundColor: '#909090',
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 10% 10px 10%'
    },
    board:{
        display: 'flex',
        flexDirection: 'column'
    },
    row:{
        display: 'flex',
    }
    
} 

const defaultBoard ={
    lines: 8,
    columns:8,
    pieces:{
        '4_4':'white_knight','4_5':'white_knight'
    }
}

class Chessboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pieces: defaultBoard.pieces,
        }
        this.movePiece = this.movePiece.bind(this)
        // this.changePassword = this.changePassword.bind(this)
        // this.changeUser = this.changeUser.bind(this)
        // this.submit = this.submit.bind(this)
    }

    normalizeNumber(num){
        if(typeof num == 'number') return num;
        if(isNaN(Number(num))) return 0;
        return Number(num)
    }
    movePiece(rowIndex, columnIndex){
        console.log(rowIndex, columnIndex);
    }

    locatePiece(rowIndex, columnIndex, recievedPieces){
        const pieceKey = `${rowIndex}_${columnIndex}` 
        const pieces = recievedPieces || this.state.pieces

        if(pieces[pieceKey]) console.log('pieces[pieceKey] ' , pieces[pieceKey]);
        return pieces[pieceKey] || false
    }

    calculateChessboard({boardLinesNumber, boardColumnsNumber}){
        const lines = this.normalizeNumber(boardLinesNumber);
        const columns = this.normalizeNumber(boardColumnsNumber);
    
        if(lines===0 || columns===0) {
            console.log(`empty chess board: lines-${lines}  columns-${columns}`)
            return false
        }
    
        let boardArray = [];

        
        for (let lineIndex = 0; lineIndex < lines; lineIndex++) {
            let rowArray =[]
            for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
                let squareObj = {
                    squareColor : (lineIndex%2 === columnIndex%2) ? 'white': 'black',
                    piece: this.locatePiece(lineIndex, columnIndex)
                }  
                rowArray.push(squareObj)
            }
            boardArray.push(rowArray)
        }
    
        return boardArray
    }
    
    renderChessboard(boardToDisplay, usedStyle){
         
        return (
            <article style={usedStyle.board}>
                {boardToDisplay.map((row, rowIndex) => {
                  return (<div className='chessboardRow' key={`${rowIndex}`} style={usedStyle.row}>
                      {row.map((cell,cellIndex)=> {
                            return (<SingleSquare
                                rowIndex={rowIndex}
                                cellIndex = {cellIndex}
                                styleProp={{backgroundColor:cell.squareColor, border: '2px solid black'}}
                                backgroundColor={cell.color}
                                piece = {cell.piece}
                                onClick = {this.movePiece}
                          />) 
                      })}
                  </div>)
                })}
            </article>
          )
    }

    render(){
        const { styleProp , boardLinesNumber = defaultBoard.lines, boardColumnsNumber = defaultBoard.columns} = this.props
        const usedStyle = {...defaultStyle , ...styleProp}
    
        const boardToDisplay = this.calculateChessboard({boardLinesNumber, boardColumnsNumber})
        return (
          <section style={usedStyle.wrapper}>
            <h1>Chess</h1>
            {this.renderChessboard(boardToDisplay, usedStyle)}
          </section>
        )
      }    
}

 export default Chessboard;