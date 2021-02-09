import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF',
    },
    containerHeaderText:{
        padding: 10,
        marginTop: 50,
    },
    textHeaderName:{
        color: '#ccc',
        fontFamily: 'Poppins_300Light'
    },
    textHeaderDoctor:{
        fontSize: 21,
        fontFamily: 'Poppins_400Regular'
    },
    touchableSearch:{
        padding: 5,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerSearch:{
        flex: 1,
        backgroundColor: '#ccc'
    },
    imageInput:{
        
        width: 25
    },
    input:{
        maxWidth: '80%',
        textAlign: 'center',
       
    },
    textSymp:{
        fontSize: 12,
        fontFamily: 'Poppins_400Regular'
    },
    containerSymp:{
        width: '80%',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 18
        
    },
    touchableCough:{
        width: 150,
        height: 100,
        padding: 7,
        borderRadius: 10,
        backgroundColor: '#FBE0DA',
        marginLeft: 10,
        marginBottom: 10
    },
    textSym:{
        color: '#000',
        fontFamily: 'Poppins_400Regular',
        fontSize: 13
    },

    textDescrSym:{
        color: '#9c9c9c',
        fontFamily: 'Poppins_300Light',
        fontSize: 10
    },

    textRecommended:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 13
    },
    containerTextSy:{
        
        height: 65,
        justifyContent: 'flex-end'
    },
    containerAllSymp:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableCoughpur:{
        width: 150,
        height: 100,
        padding: 7,
        borderRadius: 10,
        backgroundColor: '#E1CAF2',
        marginLeft: 10
    },
    touchableCoughRox:{
        width: 150,
        height: 100,
        padding: 7,
        borderRadius: 10,
        backgroundColor: '#F0E3F3',
        marginLeft: 10
    },
    touchableCoughFev:{
        width: 150,
        height: 100,
        padding: 7,
        borderRadius: 10,
        backgroundColor: '#F6EFD2',
        marginLeft: 10
    },
    containerScroll:{
        marginTop: 20,
        flex: 1,
        paddingLeft: 10
    },
    imageScroll:{
        width: 146,
        height: 61,
        borderRadius: 30,
    },
    containerTextRecommended:{
        paddingLeft: 10,
        marginTop: 10,
        height: 40,
        justifyContent: 'flex-end',
        paddingLeft: 18
    },

    containerNameDoct:{
        alignItems: 'center',
        maxHeight: 100,
    },
    textScrollDoctor:{
        textAlign: 'center',
    },
    containerTes:{
        alignItems: 'center',
        maxWidth: 110,
        maxHeight: 100,
    },
    textDoc:{
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
        fontSize: 9
    },
    textDocGra:{
        color: '#9c9c9c',
        fontSize: 10
    }

})

export default styles;