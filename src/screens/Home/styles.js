import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    containerImage:{
        alignItems: 'center'
    },
    imag:{
        width: 350,
        height: 150,
        
    },
    textFreeDoctor:{
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular'
    },
    textFreeDoctorDescription:{
        textAlign: 'center',
        color: '#ccc',
        top: 10,
        fontFamily: 'Poppins_300Light'
    },

    touchableCircle:{
        
        height: 170,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 35
    },

    containerFirstCircle:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderTopWidth: 1,
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#3791e0'
    },
    containerSecondCircle:{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#3791e0',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles