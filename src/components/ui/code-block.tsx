'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface CodeBlockProps {
  language?: string
  code: string
}

export function CodeBlock({ language = 'tsx', code }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      toast.success('Código copiado al portapapeles')
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      toast.error('Error al copiar el código')
    }
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-slate-950">
      <div className="absolute right-4 top-4 z-10">
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-slate-50 hover:bg-slate-800 hover:text-slate-50"
          onClick={copyToClipboard}
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">Copiar código</span>
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
          backgroundColor: 'transparent', // Let the container handle bg
        }}
        wrapLines={true}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
