import {   TopSquare,
  CloseIcon,
  Title,
} from './styles'

export default function TopGreen({text}) {
  return (
      <TopSquare>
        <CloseIcon name="times-circle" size={24} />
        <Title>{text}</Title>
      </TopSquare>
  )
}