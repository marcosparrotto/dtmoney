import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface Headerprops {
  onOpenNewTranslationModal: () => void;
}

export function Header({ onOpenNewTranslationModal }: Headerprops) {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={onOpenNewTranslationModal}>
        Nova transação
      </button>
      </Content>
    </Container>
  )
}