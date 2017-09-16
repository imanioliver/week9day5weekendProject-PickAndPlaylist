import React, { Component } from 'react';

export default class PlaylistItem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="card card-inverse card-warning mb-3">
                <div className="card-block">
                    <p className="card-text">User: {this.props.aSong.userName}</p>
                    <p className="card-text">Artist/Band: {this.props.aSong.songArtist}</p>
                    <p className="card-text">Title: {this.props.aSong.songTitle}</p>
                    <p className="card-text">Notes: {this.props.aSong.songNotes}</p>
                </div>
            </div>
        )
    }
}
