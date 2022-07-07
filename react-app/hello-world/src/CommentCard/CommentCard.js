import styles from './CommentCard.module.css';
import React, { Component } from 'react';

class CommentCard extends Component {
    comments = [{name:'Ean', comment: 'That was good!'},{name: 'Romar', comment: 'Congrats!'},{name: 'Ernest', comment: 'Great job!'}];
    commentCards = [];
    constructor(props) {
        super(props);
        this.state = {
            reply: false,
            name: this.props.name
        }
    }

    createCommentCards() {
      this.commentCards = this.comments.map((element) =>  
            (
              <div>
      <div className={styles.CommentCard+'mx-4 container'}>
                      <div className='row'>
                        <div className={ styles.image+' col-3'}>
                        </div>
                        <div className={ styles.content+' col-9'}>
                          <div className={styles.borderName+' row'}>
                            <p>{element.name}</p>
                          </div>
                          <div className={styles.borderComment+' row'}><p>{element.comment}</p></div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-3'>
      
                        </div>
                        <div className='col-9'>
                        <button>
                            Like
                          </button>
                          <button onClick={() => {
                            this.setState({reply: true});
                        }}>
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
              </div>
            )
          );
    }

    render() {
      this.createCommentCards()
        return (
          <div>
            <h1>TEST</h1>
            {this.commentCards}
          </div>               
        )

    }
}

export default CommentCard

{/* <div className={styles.CommentCard+'mx-4 container'}>
                <div className='row'>
                  <div className={ styles.image+' col-3'}>
                  </div>
                  <div className={ styles.content+' col-9'}>
                    <div className={styles.borderName+' row'}>
                      <p>{this.state.name}</p>
                    </div>
                    <div className={styles.borderComment+' row'}><p>Comment</p></div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-3'>

                  </div>
                  <div className='col-9'>
                  <button>
                      Like
                    </button>
                    <button onClick={() => {
                      this.setState({reply: true});
                  }}>
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            {
              this.state.reply ? 
              <CommentCard /> : <div></div>
            } */}