import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

type Props ={
  styled:string,
  onPress: ()=>void,
  title:string
}
const StyleButton :React.FC<Props> = props =>{
  const {
    styled,
    onPress,
    title
  } = props;

  return (
    <View>
      <Pressable style={styles.rounded} onPress={onPress} >{title}</Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
  rounded:{
    width:100,
    height:100,
    borderRadius:50,
  }
})

export default StyleButton;