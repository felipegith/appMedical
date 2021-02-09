import React  from 'react'

import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 

import styles from './styles'
import inputIcon from '../../assets/inputimage.png'
import orangeIcon from '../../assets/badorang.png'
import headIcon from '../../assets/head.png'
import feverIcon from '../../assets/fever.png'
import fatiIcon from '../../assets/fati.png'
import medIcon from '../../assets/med.jpg'
import meddIcon from '../../assets/medd.jpg'


export default function Doctors(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeaderText}>
                <Text style={styles.textHeaderName}>Hello, Felipe!</Text>
                <Text style={styles.textHeaderDoctor}>Explore doctors</Text>
            </View>
            <View style={styles.touchableSearch}>
            <EvilIcons name="search" size={24} color="black" />
                <TextInput
                placeholder="Search doctors..."
                style={styles.input}
                />
                <Image source={inputIcon}
                resizeMode="contain"
                style={styles.imageInput}
                />
            </View>
            <View style={styles.containerSymp}>
                <Text style={styles.textSymp}> View by symptom</Text>
            </View>
            <View style={styles.containerAllSymp}>
                <TouchableOpacity style={styles.touchableCough}>
                    <Image source={orangeIcon}
                    resizeMode="contain"
                    style={styles.imageSym}
                    />
                    <View style={styles.containerTextSy}>
                        <Text style={styles.textSym}>Cough</Text>
                        <Text style={styles.textDescrSym}>19 doctors</Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableCoughpur}>
                    <Image source={headIcon}
                    resizeMode="contain"
                    style={styles.imageSym}
                    />
                    <View style={styles.containerTextSy}>
                        <Text style={styles.textSym}>Headache</Text>
                        <Text style={styles.textDescrSym}>14 doctors</Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableCoughFev}>
                    <Image source={feverIcon}
                    resizeMode="contain"
                    style={styles.imageSym}
                    />
                    <View style={styles.containerTextSy}>
                        <Text style={styles.textSym}>Fever</Text>
                        <Text style={styles.textDescrSym}>13 doctors</Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableCoughRox}>
                    <Image source={fatiIcon}
                    resizeMode="contain"
                    style={styles.imageSym}
                    />
                    <View style={styles.containerTextSy}>
                        <Text style={styles.textSym}>Fatigue</Text>
                        <Text style={styles.textDescrSym}>12 doctors</Text>
                    </View>
                    
                </TouchableOpacity>
                
            </View> 

            <View style={styles.containerTextRecommended}>
                <Text style={styles.textRecommended}>RECOMMENDED SPECIALISTS</Text>
            </View>
           
            <View style={styles.containerScroll}>
                <ScrollView horizontal  contentContainerStyle={{alignItems: 'center'}} showsHorizontalScrollIndicator={false} >
                    <View style={styles.containerNameDoct}>
                        
                        <Image source={medIcon}
                        resizeMode="contain"
                        style={styles.imageScroll}
                        />
                        <View style={styles.containerTes}>
                            <Text style={styles.textDoc}>Tonya K</Text>
                            <Text style={styles.textDocGra}>Family Doctor</Text>
                        </View>  
                        
                                           
                    </View>

                    <View style={styles.containerNameDoct}>
                        
                        <Image source={meddIcon}
                        resizeMode="contain"
                        style={styles.imageScroll}
                        />
                        <View style={styles.containerTes}>
                            <Text style={styles.textDoc}>Addam S</Text>
                            <Text style={styles.textDocGra}>Family Doctor</Text>
                        </View>  
                        
                                           
                    </View>

                    <View style={styles.containerNameDoct}>
                        
                        <Image source={medIcon}
                        resizeMode="contain"
                        style={styles.imageScroll}
                        />
                        <View style={styles.containerTes}>
                            <Text style={styles.textDoc}>Tonya K</Text>
                            <Text style={styles.textDocGra}>Family Doctor</Text>
                        </View>  
                        
                                           
                    </View>

                    
                    
                   
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}