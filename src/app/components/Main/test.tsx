import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    // gera snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the color correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
