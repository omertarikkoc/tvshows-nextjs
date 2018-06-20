import _ from 'lodash';
import React, {Component} from 'react'
import Layout from '../components/MyLayout.js'
import SearchBar from '../components/SearchBar.js'
import ShowList from '../components/ShowList.js'
import fetch from 'isomorphic-unfetch'


export default class Index extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            searchTerm: 'Batman',
            loading: true,
            error: null,
            shows: []
        }
    }

    componentDidMount() {
        this.showSearch('batman');
    }

    showSearch(term) {
        this.setState({loading: true})
        fetch(`https://api.tvmaze.com/search/shows?q=${term}`)
            .then((res) => {
                return res.json()
            })
            .then((shows) => this.setState({
                searchTerm: term,
                shows: shows,
                loading: false
            }))
            .catch((err) => console.log(err))
    }

    render() {
        const {loading} = this.state
        const showSearch = _.debounce((term) => {this.showSearch(term)}, 1000);
        if (loading) {
            return (
                <Layout>
                    <h1> Loading.. </h1>
                    <style jsx> {`
                    h1 {
                        margin: auto;
                        text-align: center;

                    }
                    `} </style>
                </Layout>
            )
        } else {
        return (
            <Layout>
                <div>
                    <h1 style={{textAlign: 'center'}}>{this.state.searchTerm.toUpperCase()} TV SHOWS </h1>
                    <SearchBar onSearchTermChange = {showSearch} />
                    <ShowList shows={this.state.shows}/>
                </div>
            </Layout>
        )}
    }
}



