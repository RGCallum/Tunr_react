import React, {Component} from 'react';
import axios from 'axios'


class Artist extends Component {
      state = {
            artist: {},
            songs: [],
    }

    componentDidMount() {
        const id = this.props.match.params.id

        axios.get(``)
    }
    render() {
        return (
            <div>
               hola Artist
            </div>
        );
    }
}

export default Artist;