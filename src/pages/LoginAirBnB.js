import React from 'react'
import { View, TextInput, Text, StatusBar, TouchableHighlight, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const { width: WIDTH } = Dimensions.get('window')

export default class LoginAirBnB extends React.Component {

    state = { email: '', password: '', error: '', showPass: true, press: false }
    
    handleEmailChange = (email) => {
        this.setState({ email })
    }

    handlePasswordChange = (password) => {
        this.setState({ password })
    }

    handleCreateAccountPress = () => {
        alert('SignUp')
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    handleSignInPress = async () => {
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false)
        } else {
            try {
                alert('OK')
                /*
                const response = await api.post('/sessions', {
                    email: this.state.email,
                    password: this.state.password,
                });

                await AsyncStorage.setItem('@AirBnbApp:token', response.data.token)

                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Main' }),
                    ],
                });
                this.props.navigation.dispatch(resetAction);
                */
            } catch (_err) {
                this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' })
            }
        }
    }

    render() {
        return (
            <View style={styles.container} >

                {/*<StatusBar hidden />*/}

                <Image style={styles.logo} source={require('../assets/react.png')} resizeMode="contain" />

                <View style={styles.inputContainer}>
                    <Icon name='person-outline' size={28} color='#aaa' style={styles.inputIcon} />
                    <TextInput
                        placeholder="Endereço de e-mail"
                        placeholderTextColor='#aaa'
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid='transparent'
                        //keyboardType='email-address'
                        returnKeyType='next'
                        onSubmitEditing={() => { this.two.focus() }}
                        blurOnSubmit={false}
                        style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='lock-outline' size={28} color='#aaa' style={styles.inputIcon} />
                    <TextInput
                        ref={(input) => { this.two = input }}
                        placeholder="Senha"
                        placeholderTextColor='#aaa'
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={this.state.showPass}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        returnKeyType='go'
                        onSubmitEditing={this.handleSignInPress}
                        style={styles.input} />

                    <TouchableOpacity onPress={this.showPass.bind(this)} style={styles.btnPass}>
                        <Icon name={this.state.press == false ? 'visibility' : 'lock-outline'} size={28} color='#aaa' style={{top: 5}} />
                    </TouchableOpacity>
                </View>


                {this.state.error.length !== 0 && <Text style={styles.ErrorMessage}>{this.state.error}</Text>}

                <TouchableHighlight style={styles.Button} onPress={this.handleSignInPress}>
                    <Text style={styles.ButtonText}>Entrar</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.SignUpLink} onPress={this.handleCreateAccountPress}>
                    <Text style={styles.SignUpLinkText}>Criar conta grátis</Text>
                </TouchableHighlight>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    logo: {
        height: '30%',
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    inputIcon: {
        position: 'absolute',
        top: 12,
        left: 35,
        zIndex: 2,
    },
    btnPass: {
        position: 'absolute',
        top: 8,
        right: 37,
        zIndex: 3,
    },
    input: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: '#FFF',
        zIndex: 1,
        alignSelf: 'stretch',
        marginBottom: 15,
        marginHorizontal: 25,
        paddingStart: 45,
        fontSize: 16,
        color: '#000',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#aaa'
    },
    ErrorMessage: {
        textAlign: 'center',
        color: '#ce2029',
        fontSize: 16,
        marginBottom: 15,
        marginHorizontal: 20,
    },
    Button: {
        //width: WIDTH - 40,
        padding: 20,
        borderRadius: 5,
        backgroundColor: 'darkorange',
        alignSelf: 'stretch',
        margin: 15,
        marginHorizontal: 25,
        borderRadius: 12
    },
    ButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    SignUpLink: {
        padding: 10,
        marginTop: 20,
    },
    SignUpLinkText: {
        color: '#999',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
})
