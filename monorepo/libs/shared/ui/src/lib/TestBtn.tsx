import { Text, Pressable } from 'react-native'
// * click 이벤트를 가진 버튼 역할 -> <Pressable> + onPress 사용

export const TestBtn = ({onPress}:{onPress:()=>void})=>{
return (
  <Pressable onPress={onPress}>
    <Text>테스트</Text>
  </Pressable>
)
}