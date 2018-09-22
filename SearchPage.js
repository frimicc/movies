'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';
import SearchResults from './SearchResults';

function urlForQueryAndPage(key, value, pageNumber) {
    const data = {
        api_key: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
        include_adult: "false",
        page: pageNumber,
    };
    data[key] = value;

    const queryString = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');

    return 'https://api.themoviedb.org/3/search/movie?' + queryString;
}

export default class SearchPage extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            isLoading: false,
            message: '',
        };
    }

    _handleResponse = (response) => {
        this.setState({ isLoading: false, message: '' });
        console.log('Found ' + response.results.length + ' of ' + response.total_results + '.');
        this.props.navigator.push({
            title: 'Results',
            component: SearchResults,
            passProps: {results: response.results}
        });
    };

    _executeQuery = (query) => {
        console.log("query: " + query);
        this.setState({ isLoading: true });
        fetch(query)
            .then(response => response.json())
            .then(json => this._handleResponse(json))
            .catch(error =>
                this.setState({
                    isLoading: false,
                    message: "Something didn't work: " + error
                }));
    }

    _onSearchPressed = () => {
        const query = urlForQueryAndPage('query', this.state.searchString, 1);
        this._executeQuery(query);
    }

    _onSearchTextChanged = (event) => {
        this.setState({ searchString: event.nativeEvent.text });
    };

    render() {
        const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Search for movies
                </Text>
                <View style={styles.flowRight}>
                    <TextInput style={styles.searchInput}
                        value={this.state.searchString}
                        onChange={this._onSearchTextChanged}
                        placeholder='Movie Title'/>
                    <Button
                        onPress={this._onSearchPressed}
                        color='#48bbec'
                        title='Go' />
                </View>
                {spinner}
                <Text style={styles.description}>{this.state.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec',
        borderRadius: 8,
        color: '#48bbec'
    },
    image: {
        width: 217,
        height: 138,
    },
});


