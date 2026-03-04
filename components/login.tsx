import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulologin}>Login</Text>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input} secureTextEntry={true}/>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.titulosubmit}>Login</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulologin:{
        fontFamily: 'arial',
        marginBottom: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    titulosubmit:{
        fontFamily: 'arial',
        marginBottom: 20,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    input:{
        width: '100%',
        height: 45,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    botao:{
        width: '70%',
        height: 40,
        backgroundColor: '#000080',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    }
})