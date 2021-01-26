/*import * as React from 'react';
import * as firebase from 'firebase';
import db from '../config'
import { StyleSheet, Text, View, TextInput , Image, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
export default class WriteStoryScreen extends React.Component {
    
    constructor(){
      super();
      this.state = {
        storyTitle:'',
        storyContent:'',
        storyAuthor:'',
      }
    }
    onButtonPress = async () => {
      db.collection('stories').add({
        'storyTitle' : this.state.storyTitle,
        'storyContent' : this.state.storyContent,
        'storyAuthor' : this.state.storyAuthor,
      })
      Alert.alert("Submission complete")
      this.setState({
        storyTitle:'',
        storyContent:'',
        storyAuthor:'',
      })
    }
    render(){
      return(
        <KeyboardAvoidingView style = {{backgroundColor:'p', flex:1}}>
          <Header
            backgroundColor={'pink'}
            centerComponent={{
              text: 'Bed Time Stories',
              style: { color: 'white', fontSize: 20 },
            }}
          />
          <TextInput
            style = {{borderWidth:3, borderColor:'white', paddingLeft:10,color:'white',paddingRight:10}}
            placeholder="Enter your Story Title Here"
            onChangeText={(text) => {
              this.setState({ storyTitle: text });
            }}
            value={this.state.storyTitle}
          />

          <TextInput
            style = {{borderWidth:3, borderColor:'white', paddingLeft:10,color:'white',paddingRight:10}}
            placeholder="Enter your Story's Author here"
            onChangeText={(text) => {
              this.setState({ storyAuthor: text });
            }}
            value={this.state.storyAuthor}
          />

          <TextInput
            style = {{borderWidth:3, borderColor:'pink', paddingLeft:10, marginTop:5, color:'pink', paddingRight:10, height:'45%'}}
            multiline={true}
            placeholder="Enter your story here"
            onChangeText={(text) => {
              this.setState({storyContent: text})
            }}
            value = {this.state.storyContent}
          />

          <TouchableOpacity onPress={this.onButtonPress} style = {{borderColor:'pink', borderWidth:3, width:60, marginTop:10, alignSelf:'center'}}>
            <Text style = {{color:'white', alignSelf:'center'}}>Submit</Text>
          </TouchableOpacity>

          
        </KeyboardAvoidingView>
      )
    }
  */
 import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
constructor(props){
super(props);
this.state = {
title: '',
author: '',
storyText: '',
}
}

submitStory = ()=>{
db.collection("stories").add({
title: this.state.title,
author: this.state.author,
storyText: this.state.storyText,
//date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
})
this.setState({
title: '',
author: '',
storyText: ''
})
ToastAndroid.show('Your story has been sumitted', ToastAndroid.SHORT)
}

render(){
return(
<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
<Header 
backgroundColor = {'pink'}
centerComponent = {{
text : 'Bedtime Stories',
style : { color: 'white', fontSize: 20}
}}
/>
<TextInput 
placeholder="Story Title"
onChangeText= {(text)=>{
this.setState({
title: text
})
}}
value={this.state.title}
style={styles.title}/>
<TextInput
placeholder="Author"
onChangeText= {(text)=>{
this.setState({
author: text
})
}}
value={this.state.author}
style={styles.author} />
<TextInput 
placeholder="Write your story"
onChangeText= {(text)=>{
this.setState({
storyText: text
})
}}
value={this.state.storyText}
style={styles.storyText}
multiline={true}/>

<TouchableOpacity
style={styles.submitButton}
onPress={this.submitStory}
>
<Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
</KeyboardAvoidingView>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
title:{
height: 40,
borderWidth: 2,
marginTop: 40,
padding: 10,
margin:10
},
author: {
height: 40,
borderWidth: 2,
padding: 10,
margin:10
},
storyText: {
color:'black',
height: 250,
borderWidth: 2,
margin: 10,
padding:10
},
submitButton:{
justifyContent: 'center',
alignSelf: 'center',
backgroundColor: 'pink',
width: 80,
height: 40
},
buttonText: {

textAlign: 'center',
color: 'white',
fontWeight: 'bold'
}
});