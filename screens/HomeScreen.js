import React from 'react';
import {
    Text,
    Button,
    StyleSheet,
    View,
} from 'react-native';
import { Auth } from 'aws-amplify';

export default class HomeScreen extends React.Component {
    handleSignOut = () => {
        Auth.signOut()
            .then(() => this.props.navigation.navigate('Authentication'))
            .catch(err => console.log(err));
    };

    render() {
        const user = this.props.navigation.state.params.user;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You're signed in to DDA.</Text>
                <Text>userName: {user.username ? user.username : "not signed in"}</Text>
                <Button
                    title="Sign Out"
                    onPress={this.handleSignOut}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        marginBottom: 20,
        color: 'black',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
    },
});
