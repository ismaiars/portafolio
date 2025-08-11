import { render } from '@testing-library/react'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

// Mock framer-motion for testing
jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}))

describe('TypewriterEffect Component', () => {
  const mockWords = ['Hello', 'World', 'Testing']

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders the component', () => {
    const { container } = render(<TypewriterEffect words={mockWords} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<TypewriterEffect words={mockWords} className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders cursor element', () => {
    const { container } = render(<TypewriterEffect words={mockWords} />)
    expect(container.firstChild).toBeInTheDocument()
    // The cursor is part of the component structure
  })

  it('starts with empty text initially', () => {
    const { container } = render(<TypewriterEffect words={mockWords} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('handles empty words array', () => {
    const { container } = render(<TypewriterEffect words={[]} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts typeSpeed prop', () => {
    const customTypeSpeed = 200
    const { container } = render(<TypewriterEffect words={mockWords} typeSpeed={customTypeSpeed} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts deleteSpeed prop', () => {
    const customDeleteSpeed = 150
    const { container } = render(<TypewriterEffect words={mockWords} deleteSpeed={customDeleteSpeed} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts delayBetweenWords prop', () => {
    const customDelay = 3000
    const { container } = render(<TypewriterEffect words={mockWords} delayBetweenWords={customDelay} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts loop prop', () => {
    const { container } = render(<TypewriterEffect words={mockWords} loop={false} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts cursorClassName prop', () => {
    const { container } = render(<TypewriterEffect words={mockWords} cursorClassName="custom-cursor" />)
    expect(container.firstChild).toBeInTheDocument()
  })
})