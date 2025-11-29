import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import SearchInput from "./components/SearchInput";
import { fetchLocationId } from "./utils/api";
import  getImageForWeather  from "./utils/getImageForWeather";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location:"San Francisco",
      loading:false,
      error:false,
      temparature:0,
      weather:"Clear",
    };
  }
  
 componentDidMount(){
  this.handleUpdateLocation("San Francisco");
 }

 handleUpdateLocation = async (city)=>{
  if (!city)return;

  this.setState({loading:true});

  try{
    const result = await fetchLocationId(city);

    this.setState({
      loading:false,
      error:false,
      location:result.location,
      temparature:Math.round(result.temparature),
      weather:result.weather,
    });
  }catch(e){
    this.setState({
      loading:false,
      error:true,
    })
  }
}

render() {
  const {location,error,loading,weather,temparature} = this.state
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>

            {loading &&(
              <ActivityIndicator size="large" color="white" />
            )}

            {!loading && (
              <>
              {error &&(
                <Text style={[styles.smallText, styles.textStyle]}>
                  Could not load weather, please try a different city.
                </Text>
              )}

              {!error &&(
                <>

                <Text style={[styles.largeText, styles.textStyle]}>
                  {location}°
                </Text>
                <Text style={[styles.smallText, styles.textStyle]}>
                  {weather}
                </Text>
                <Text style={[styles.largeText, styles.textStyle]}>{temparature}°C</Text>
                </>
              )}
              </>
            )}

            <SearchInput 
            placeholder="Search any city"
            onSubmit={this.handleUpdateLocation}
             />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "white",
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
    marginBottom: 20,
  },
  // textInput: {
  //   backgroundColor: "#666",
  //   color: "white",
  //   height: 40,
  //   width: 300,
  //   marginTop: 20,
  //   paddingHorizontal: 10,
  //   alignSelf: "center",
  //   borderRadius: 8,
  // },
  imageContainer:{
    flex:1,
    ...StyleSheet.absoluteFillObject,
  
   
  },
  image:{
   
    resizeMode:"cover"
  },
  detailsContainer:{
    flex:1,
    justifyContent:"center",
    backgroundColor:"rgba(0,0,0,0.2)",
    paddingHorizontal:20,
  }
});
