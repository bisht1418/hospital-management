"use client"

import { useEffect, useRef } from "react"

interface DashboardChartProps {
  type?: "line" | "bar"
}

export function DashboardChart({ type = "line" }: DashboardChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Sample data
    const data = type === "line" ? [12, 19, 15, 25, 22, 30, 28] : [35, 45, 30, 25, 40, 20, 15]

    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const maxValue = Math.max(...data) * 1.2

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.font = "10px sans-serif"
    ctx.fillStyle = "#94a3b8"

    for (let i = 0; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.strokeStyle = "#e2e8f0"
      ctx.stroke()

      // Draw y-axis labels
      const value = Math.round(maxValue - (maxValue / gridLines) * i)
      ctx.fillText(value.toString(), padding - 5, y)
    }

    // Draw x-axis labels
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    const barWidth = chartWidth / data.length

    for (let i = 0; i < data.length; i++) {
      const x = padding + barWidth * i + barWidth / 2
      ctx.fillText(labels[i], x, height - padding + 5)
    }

    // Draw data
    if (type === "line") {
      // Line chart
      ctx.beginPath()
      for (let i = 0; i < data.length; i++) {
        const x = padding + (chartWidth / (data.length - 1)) * i
        const y = height - padding - (data[i] / maxValue) * chartHeight

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.stroke()

      // Add points
      for (let i = 0; i < data.length; i++) {
        const x = padding + (chartWidth / (data.length - 1)) * i
        const y = height - padding - (data[i] / maxValue) * chartHeight

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "#3b82f6"
        ctx.fill()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.stroke()
      }
    } else {
      // Bar chart
      const barPadding = 8
      const actualBarWidth = barWidth - barPadding * 2

      for (let i = 0; i < data.length; i++) {
        const x = padding + barWidth * i + barPadding
        const barHeight = (data[i] / maxValue) * chartHeight
        const y = height - padding - barHeight

        ctx.fillStyle = "#3b82f6"
        ctx.fillRect(x, y, actualBarWidth, barHeight)
      }
    }
  }, [type])

  return <canvas ref={canvasRef} width={500} height={300} className="w-full h-auto" />
}
