"use client"

import { useEffect, useRef } from "react"

export default function ContactEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://lp2.well-c.biz") return
      if (event.data?.type !== "traingo:resize" || !event.data.height) return

      const height = Number(event.data.height)
      if (!Number.isFinite(height) || height < 300 || height > 4000) return

      const iframe = iframeRef.current
      if (!iframe) return
      iframe.style.height = `${height}px`
      iframe.style.minHeight = "0"
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      id="traingo-embed"
      className="traingo-embed"
      src="https://lp2.well-c.biz/f/form-jq8c?embed=1"
      width="100%"
      height="600"
      scrolling="no"
      title="阿久津和宏へのお問い合わせフォーム"
    />
  )
}
