'use strict';

import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text,
} from 'react-native';

class ListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.index);
    }

    render() {
        const item = this.props.item;

        return (
            <TouchableHighlight
                onPress={this._onPress}
                underlayColor='#dddddd'>
            <View>
                <View style={styles.rowContainer}>
                    <Image style={styles.thumb} source={{ uri: "https://image.tmdb.org/t/p/w45" + item.poster_path }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {item.title}
                        </Text>
                        <Text style={styles.description}>{item.overview}</Text>
                    </View>
                </View>
                <View stuyle={styles.separator} />
            </View>
            </TouchableHighlight>
        );
    }
}

export default class SearchResults extends Component<{}> {
    _keyExtractor = (item, index) => item.id +"";

    _renderItem = ({item, index}) => {
        return (
            <ListItem
                item={item}
                index={index}
                onPressItem={this._onPressItem}
            />
        );
    };

    _onPressItem = (index) => {
        console.log("Pressed row: "+index);
    };

    render() {
        return (
            <FlatList
                data={this.props.results}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    description: {
        fontSize: 14,
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
});
