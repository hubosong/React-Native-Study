import React, { useState } from 'react'
import { View, Alert, Modal, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'

import Icon from "react-native-vector-icons/MaterialIcons";
import { RNCamera } from "react-native-camera"

/** imports camera 
 * https://react-native-community.github.io/react-native-camera/docs/installation
 * npm install react-native-camera --save
 * react-native link react-native-camera
*/

import logo from '../assets/react.png'

const Camera = ({ isVisible, onChangePhoto, onCloseCamera }) => {

    const [camera, setCamera] = useState()

    const onTakePicture = async () => {
        try {
            const { uri } = await camera.takePictureAsync({
                quality: 0.5,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true,
            })
            onChangePhoto(uri)
        } catch (error) { Alert.alert("Erro", "Houve um erro ao tirar a foto.") }
        
    }

    return (
        <Modal animationType="slide" transparent={false} visible={isVisible}>
            
            <RNCamera
                ref={ref => setCamera(ref)}
                style={{ flex: 1 }}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                    title: "Permissão para usar a câmera",
                    message: "Precisamos da sua permissão para usar a câmera.",
                    buttonPositive: "Ok",
                    buttonNegative: "Cancelar"
                }}
                captureAudio={false}>


                <TouchableOpacity onPress={onTakePicture} style={styles.buttonTakePicture}>
                <Icon
                    name="photo-camera"
                    size={40}
                    color={"#fff"}
                    onPress={onTakePicture} />
                </TouchableOpacity>

                <Icon
                    name="close"
                    size={40}
                    color={"#fff"}
                    onPress={onCloseCamera}
                    style={styles.buttonCloseCamera} />

            </RNCamera>

        </Modal>
    )
}

export default function Cam() {

    const [isCameraVisible, setIsCameraVisible] = useState(false)
    const [photo, setPhoto] = useState(null)

    const onChangePhoto = newPhoto => {
        setIsCameraVisible(false)
        setPhoto(newPhoto)        
    }

    const onCloseCamera = () => {
        setIsCameraVisible(false)
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.photo}>
                <ImageBackground
                    style={{ width: "100%", height: "100%" }}
                    source={{ uri: photo }}
                />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setIsCameraVisible(true);
                    }}>
                    <Icon name="camera-alt" size={40} color={"#f37272"} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setPhoto(null);
                    }}>
                    <Icon name="delete" size={40} color={"#f37272"} />
                </TouchableOpacity>
            </View>
            <Camera
                isVisible={isCameraVisible}
                onChangePhoto={onChangePhoto}
                onCloseCamera={onCloseCamera}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f37272"
    },
    logo: {
        alignSelf: "center",
        marginTop: 60,
        width: 150,
        height: 180,
    },
    photo: {
        width: 300,
        height: 200,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: 80
    },
    buttons: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#fff",
        margin: 20,
        borderRadius: 150,
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonTakePicture: {
        flex: 0,
        alignSelf: "center",
        position: "absolute",
        bottom: 50
    },
    buttonCloseCamera: {
        flex: 0,
        position: "absolute",
        top: 20,
        right: 20
    }
})