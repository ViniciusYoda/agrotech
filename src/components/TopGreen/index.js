import {   TopSquare,
  CloseIcon,
  Title,
} from './styles'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TopGreen({text}) {
  const navigation = useNavigation();
  return (
      <TopSquare>
      <TouchableOpacity onPress={() => navigation.navigate('Servicos')}>
        <CloseIcon name="times-circle" size={24} />
      </TouchableOpacity>
        <Title>{text}</Title>
      </TopSquare>
  )
}