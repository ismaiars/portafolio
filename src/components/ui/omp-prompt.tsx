'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, Folder, Terminal, Check, Clock, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface OmpSegment {
  label: string
  bg: string
  fg?: string
  icon?: 'terminal' | 'folder' | 'git' | 'zap' | 'clock' | 'check'
}

interface OmpPromptProps {
  /** Path shown in the directory segment, e.g. "~/portafolio/proyectos" */
  path?: string
  /** Git branch label, e.g. "main" */
  branch?: string
  /** Extra badge segment, e.g. "next 14" or "v2.0" */
  tag?: string
  /** Command text to type out after the prompt */
  command: string
  /** Right-side execution time badge */
  execTime?: string
  /** Whether to animate typing when scrolled into view */
  animate?: boolean
  /** Typing speed in ms per character */
  speed?: number
  /** Delay before typing starts in ms */
  startDelay?: number
  /** Callback when typing finishes */
  onComplete?: () => void
  /** Extra segments override */
  segments?: OmpSegment[]
  className?: string
  /** Show blinking cursor even after typing completes */
  keepCursor?: boolean
}

function SegmentIcon({ type }: { type?: OmpSegment['icon'] }) {
  const cls = 'w-3.5 h-3.5 shrink-0'
  switch (type) {
    case 'terminal':
      return <Terminal className={cls} />
    case 'folder':
      return <Folder className={cls} />
    case 'git':
      return <GitBranch className={cls} />
    case 'zap':
      return <Zap className={cls} />
    case 'clock':
      return <Clock className={cls} />
    case 'check':
      return <Check className={cls} />
    default:
      return null
  }
}

/**
 * Renders an Oh My Posh style powerline prompt with interlocking SVG chevrons
 * and a realistic terminal typing animation.
 */
export function OmpPrompt({
  path = '~/portafolio',
  branch = 'main',
  tag,
  command,
  execTime = '12ms',
  animate = true,
  speed = 38,
  startDelay = 120,
  onComplete,
  segments,
  className,
  keepCursor = false,
}: OmpPromptProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const [typedLength, setTypedLength] = useState(animate ? 0 : command.length)
  const [isDone, setIsDone] = useState(!animate)
  const completedRef = useRef(false)

  useEffect(() => {
    if (!animate) {
      setTypedLength(command.length)
      setIsDone(true)
      return
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setTypedLength(command.length)
      setIsDone(true)
      if (!completedRef.current) {
        completedRef.current = true
        onComplete?.()
      }
      return
    }

    if (!isInView) return

    setTypedLength(0)
    setIsDone(false)
    completedRef.current = false

    let charIndex = 0
    let intervalId: ReturnType<typeof setInterval> | null = null

    const delayTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        charIndex += 1
        setTypedLength(charIndex)
        if (charIndex >= command.length) {
          if (intervalId) clearInterval(intervalId)
          setIsDone(true)
          if (!completedRef.current) {
            completedRef.current = true
            onComplete?.()
          }
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(delayTimer)
      if (intervalId) clearInterval(intervalId)
    }
  }, [animate, command, isInView, speed, startDelay, onComplete])

  const defaultSegments: OmpSegment[] = segments ?? [
    { label: 'ismael', bg: '#7c3aed', fg: '#ffffff', icon: 'terminal' },
    { label: path, bg: '#0ea5e9', fg: '#06121e', icon: 'folder' },
    { label: `${branch} ✓`, bg: '#10b981', fg: '#041a11', icon: 'git' },
    ...(tag ? [{ label: tag, bg: '#f59e0b', fg: '#1a1000', icon: 'zap' as const }] : []),
  ]

  const displayedCommand = command.slice(0, typedLength)

  return (
    <div ref={containerRef} className={cn('font-mono text-left select-text', className)}>
      {/* Top Oh My Posh Powerline Bar */}
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex flex-wrap items-center gap-y-1 max-w-full">
          {/* Leading rounded cap */}
          <span
            className="inline-block w-2 sm:w-2.5 h-6 rounded-l-md"
            style={{ backgroundColor: defaultSegments[0]?.bg ?? '#7c3aed' }}
            aria-hidden="true"
          />

          {defaultSegments.map((seg, idx) => {
            const nextBg = defaultSegments[idx + 1]?.bg
            return (
              <div key={`${seg.label}-${idx}`} className="inline-flex items-center">
                <span
                  className="inline-flex items-center gap-1 sm:gap-1.5 h-6 px-2 sm:px-2.5 text-[11px] sm:text-xs font-semibold tracking-tight whitespace-nowrap"
                  style={{ backgroundColor: seg.bg, color: seg.fg ?? '#ffffff' }}
                >
                  <SegmentIcon type={seg.icon} />
                  <span>{seg.label}</span>
                </span>
                {/* Powerline Chevron SVG */}
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  className="shrink-0 block"
                  aria-hidden="true"
                >
                  {nextBg && (
                    <rect x="0" y="0" width="10" height="24" fill={nextBg} />
                  )}
                  <polygon points="0,0 10,12 0,24" fill={seg.bg} />
                </svg>
              </div>
            )
          })}
        </div>

        {/* Right-side execution pill */}
        {execTime && (
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 h-6 rounded-md bg-[#181d2a] border border-[#262e40] text-[11px] text-[#94a3b8]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-[#10b981] font-semibold">0</span>
            <span className="text-[#475569]">│</span>
            <Clock className="w-3 h-3 text-[#38bdf8]" />
            <span>{execTime}</span>
          </div>
        )}
      </div>

      {/* Second line: Oh My Posh prompt connector + typed command */}
      <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg leading-relaxed pl-1">
        <span className="text-[#7c3aed] font-bold select-none" aria-hidden="true">
          ╰─❯
        </span>
        <span className="text-[#e2e8f0] font-medium break-words min-w-0">
          <TypedSyntax text={displayedCommand} />
          {(!isDone || keepCursor) && (
            <span
              className="inline-block w-2.5 h-[1.15em] align-middle ml-0.5 bg-[#00ff9c] animate-pulse"
              aria-hidden="true"
            />
          )}
        </span>
      </div>
    </div>
  )
}

/**
 * Lightweight syntax highlighter for typed shell commands
 */
function TypedSyntax({ text }: { text: string }) {
  if (!text) return null
  const parts = text.split(' ')
  return (
    <>
      {parts.map((part, i) => {
        const isFirst = i === 0
        const isFlag = part.startsWith('--') || part.startsWith('-')
        const isPath = part.includes('/') || part.startsWith('.')
        const colorClass = isFirst
          ? 'text-[#00ff9c] font-semibold'
          : isFlag
          ? 'text-[#f59e0b]'
          : isPath
          ? 'text-[#38bdf8]'
          : 'text-[#e2e8f0]'

        return (
          <React.Fragment key={i}>
            {i > 0 && ' '}
            <span className={colorClass}>{part}</span>
          </React.Fragment>
        )
      })}
    </>
  )
}

interface TerminalWindowProps {
  title?: string
  badge?: string
  children: React.ReactNode
  className?: string
  headerRight?: React.ReactNode
}

/**
 * Authentic terminal pane with macOS/Kitty/tmux window chrome
 */
export function TerminalWindow({
  title = 'zsh — ismael@portafolio',
  badge = 'oh-my-posh',
  children,
  className,
  headerRight,
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'rounded-xl border border-[#262e40] bg-[#0d111a]/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.75)] overflow-hidden backdrop-blur-md',
        className
      )}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#151a26] border-b border-[#262e40]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="font-mono text-xs text-[#94a3b8] truncate">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {badge && (
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#7c3aed]/15 text-[#c4b5fd] border border-[#7c3aed]/30">
              {badge}
            </span>
          )}
          {headerRight}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6">{children}</div>
    </motion.div>
  )
}
