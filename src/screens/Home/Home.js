import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'

import styles from './styles'
import logoIcon from '../../../assets/landing.jpg'
import logoCircle from '../../../assets/circle.png'

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={logoIcon}
                resizeMode="contain"
                style={styles.imag}
                />
                <Text style={styles.textFreeDoctor}>Free online calls with certified doctors</Text>
                <Text style={styles.textFreeDoctorDescription}>Get free consultations with the best doctors out there to understand you symptoms</Text>
            </View>
            <TouchableOpacity style={styles.touchableCircle}>
                <View style={styles.containerFirstCircle}>
                   <View style={styles.containerSecondCircle}>
                       <Image source={logoCircle}
                       resizeMode="contain"
                       style={styles.imageCircle}
                       />
                   </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}