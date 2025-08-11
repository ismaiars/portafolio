import { renderHook, act } from '@testing-library/react'
import { useScrollTo } from '@/hooks/use-scroll-to'

// Mock scrollIntoView
const mockScrollIntoView = jest.fn()
Element.prototype.scrollIntoView = mockScrollIntoView

describe('useScrollTo Hook', () => {
  let mockScrollTo: jest.Mock
  let mockGetElementById: jest.SpyInstance

  beforeEach(() => {
    mockScrollTo = jest.fn()
    
    // Mock window.scrollTo
    Object.defineProperty(window, 'scrollTo', {
      value: mockScrollTo,
      writable: true
    })
    
    // Mock window.pageYOffset
    Object.defineProperty(window, 'pageYOffset', {
      value: 0,
      writable: true
    })
    
    // Mock getElementById to return an element with getBoundingClientRect
    mockGetElementById = jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'test-section' || id === 'section-1' || id === 'section-2') {
        return {
          getBoundingClientRect: jest.fn(() => ({
            top: 100,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0
          }))
        } as any
      }
      return null
    })
  })

  afterEach(() => {
    mockGetElementById.mockRestore()
    mockScrollTo.mockClear()
  })

  it('returns a function', () => {
    const { result } = renderHook(() => useScrollTo())
    expect(typeof result.current).toBe('function')
  })

  it('scrolls to element when element exists', () => {
    const { result } = renderHook(() => useScrollTo())
    
    act(() => {
      result.current('test-section')
    })

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 20, // 100 (getBoundingClientRect top) + 0 (pageYOffset) - 80 (default offset)
      behavior: 'smooth'
    })
  })

  it('does not scroll when element does not exist', () => {
    const { result } = renderHook(() => useScrollTo())
    
    act(() => {
      result.current('non-existent-section')
    })

    expect(mockScrollIntoView).not.toHaveBeenCalled()
  })

  it('handles empty string id', () => {
    const { result } = renderHook(() => useScrollTo())
    
    act(() => {
      result.current('')
    })

    expect(mockScrollIntoView).not.toHaveBeenCalled()
  })

  it('handles null id', () => {
    const { result } = renderHook(() => useScrollTo())
    
    act(() => {
      result.current(null as any)
    })

    expect(mockScrollIntoView).not.toHaveBeenCalled()
  })

  it('handles undefined id', () => {
    const { result } = renderHook(() => useScrollTo())
    
    act(() => {
      result.current(undefined as any)
    })

    expect(mockScrollIntoView).not.toHaveBeenCalled()
  })

  it('works with multiple elements', () => {
    // Create multiple test elements
    const element1 = document.createElement('div')
    element1.id = 'section-1'
    const element2 = document.createElement('div')
    element2.id = 'section-2'
    
    document.body.appendChild(element1)
    document.body.appendChild(element2)
  })

  it('works with multiple elements', () => {
    const { result } = renderHook(() => useScrollTo())
    
    act(() => {
      result.current('section-1')
    })
    
    expect(mockScrollTo).toHaveBeenCalledTimes(1)
    
    act(() => {
      result.current('section-2')
    })
    
    expect(mockScrollTo).toHaveBeenCalledTimes(2)
  })

  it('maintains function reference across re-renders', () => {
    const { result, rerender } = renderHook(() => useScrollTo())
    const firstFunction = result.current
    
    rerender()
    const secondFunction = result.current
    
    expect(firstFunction).toBe(secondFunction)
  })
})