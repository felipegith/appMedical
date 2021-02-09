import React from 'react'

import { View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import styles from './styles'
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons'; 
import cirIcon from '../../../assets/cir.png'
import doctorIcon from '../../../assets/ww.png'
import teste from '../../../assets/sas.png'

export default function Account(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.teste}>
                <Image source={teste}
                resizeMode="contain"
                style={styles.imagDocw}
                />
            </View>
            
            <View style={styles.containerDoctor}> 
            
                <Text style={styles.texttDocc}>Dr. James Kayn</Text>
            </View>
            
            <View style={styles.containerCamCall}>
                <TouchableOpacity style={styles.containerTouchabb}>
                    <FontAwesome name="video-camera" size={24} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerTouchabbb}>
                    <MaterialIcons name="call-end" size={24} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerTouchabb}>
                    <FontAwesome name="microphone" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            
            
            <View style={styles.containerTextDoc}>
                <View style={styles.containerMeeting}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                    <Text style={styles.textMeet}>Metting Notes</Text>
                    <View />
                </View>
                <View style={styles.containeranBott}>
                   
                    <View style={styles.contanTextCir}>
                        <Image source={cirIcon}
                        resizeMode="contain"
                        style={styles.imagCir}
                        />
                       <Text style={styles.textDress}>Dress in very warm clothes</Text>
                    </View>

                    <View style={styles.contanTextCir}>
                        <Image source={cirIcon}
                        resizeMode="contain"
                        style={styles.imagCir}
                        />
                       <Text style={styles.textDress}>Don't go outside</Text>
                    </View>
                </View>
                <View style={styles.containerBottoms}>
                    <TouchableOpacity style={styles.touchableBottom}>
                        <Text style={styles.textNote}>Edit notes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchableBottomm}>
                        <AntDesign name="pluscircle" size={13} color="#FFF" />
                        <Text style={styles.textADD}>New point</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}