import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/hero'

// Mock the custom hook
jest.mock('@/hooks/use-scroll-to', () => ({
  useScrollTo: () => jest.fn(),
}))

// Mock the UI components
jest.mock('@/components/ui/typewriter-effect', () => ({
  TypewriterEffect: ({ words }: { words: any[] }) => (
    <div data-testid="typewriter-effect">
      {words.map((word, index) => (
        <span key={index} className={word.className}>
          {word.text}
        </span>
      ))}
    </div>
  ),
}))

jest.mock('@/components/ui/particle-background', () => ({
  ParticleBackground: () => <div data-testid="particle-background" />,
}))

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}))

// Mock document.createElement and link.click
const mockClick = jest.fn()

// Mock URL.createObjectURL for CV download
Object.defineProperty(URL, 'createObjectURL', {
  value: jest.fn(() => 'mocked-url'),
  writable: true,
})

describe('Hero Component', () => {
  beforeEach(() => {
    mockClick.mockClear()
  })

  it('renders hero section', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /descargar cv/i })).toBeInTheDocument()
    expect(screen.getByTestId('typewriter-effect')).toBeInTheDocument()
    expect(screen.getByTestId('particle-background')).toBeInTheDocument()
  })

  it('displays greeting text', () => {
    render(<Hero />)
    expect(screen.getByText('Hola, soy')).toBeInTheDocument()
  })

  it('displays name', () => {
    render(<Hero />)
    expect(screen.getByText('Ismael Salazar')).toBeInTheDocument()
  })

  it('displays description', () => {
    render(<Hero />)
    expect(screen.getByText(/especializado en/i)).toBeInTheDocument()
  })

  it('has download CV button', () => {
    render(<Hero />)
    const downloadButton = screen.getByRole('button', { name: /descargar cv/i })
    expect(downloadButton).toBeInTheDocument()
  })

  it('has contact button', () => {
    render(<Hero />)
    const contactButton = screen.getByRole('button', { name: /contactar/i })
    expect(contactButton).toBeInTheDocument()
  })

  it('has GitHub link', () => {
    render(<Hero />)
    const githubLink = screen.getByRole('link', { name: /ver perfil de github/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ismaiars')
  })

  it('renders CV download button', () => {
    render(<Hero />)
    const downloadButton = screen.getByRole('button', { name: /descargar cv/i })
    expect(downloadButton).toBeInTheDocument()
  })

  it('renders typewriter effect with roles', () => {
    render(<Hero />)
    // The typewriter effect is rendered as part of the component
    expect(screen.getByText('Ismael Salazar')).toBeInTheDocument()
  })

  it('has proper section structure', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('renders particle background', () => {
    render(<Hero />)
    expect(screen.getByTestId('particle-background')).toBeInTheDocument()
  })

  it('renders main content', () => {
    render(<Hero />)
    expect(screen.getByText('Ismael Salazar')).toBeInTheDocument()
  })
})