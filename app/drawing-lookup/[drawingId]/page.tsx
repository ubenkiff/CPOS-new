'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function DrawingLookupPage() {
  const { drawingId } = useParams<{ drawingId: string }>()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState('')

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setError('')
    }
  }

  const handleOpenFile = () => {
    if (selectedFile) {
      // Create a blob URL for the selected file
      const url = URL.createObjectURL(selectedFile)
      window.open(url, '_blank')
      // Clean up the URL after opening
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } else {
      setError('Please use the file picker above to select the drawing file from your local computer.')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: 16,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: 500,
        width: '100%',
        padding: 40,
        textAlign: 'center'
      }}>
        <div style={{
          width: 80,
          height: 80,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: 32
        }}>
          📄
        </div>
        
        <h1 style={{
          fontSize: 24,
          fontWeight: 700,
          color: '#1a202c',
          marginBottom: 8
        }}>
          Drawing Lookup
        </h1>
        
        <div style={{
          fontSize: 48,
          fontWeight: 800,
          color: '#667eea',
          marginBottom: 8,
          fontFamily: 'monospace'
        }}>
          {drawingId}
        </div>
        
        <p style={{
          fontSize: 14,
          color: '#718096',
          marginBottom: 32
        }}>
          Scan this drawing from your local files
        </p>

        {/* File Picker */}
        <div style={{
          background: '#f7fafc',
          borderRadius: 8,
          padding: 16,
          marginBottom: 16,
          textAlign: 'left'
        }}>
          <label style={{
            display: 'block',
            fontSize: 12,
            fontWeight: 600,
            color: '#4a5568',
            marginBottom: 8
          }}>
            Select Drawing File
          </label>
          <input
            type="file"
            accept=".pdf,.dwg,.dxf,.dwf"
            onChange={handleFileSelect}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #e2e8f0',
              borderRadius: 6,
              fontSize: 14,
              marginBottom: 8,
              boxSizing: 'border-box'
            }}
          />
          {selectedFile && (
            <div style={{
              fontSize: 12,
              color: '#48bb78',
              marginBottom: 8
            }}>
              ✓ Selected: {selectedFile.name}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#fed7d7',
            color: '#c53030',
            padding: 12,
            borderRadius: 6,
            fontSize: 12,
            marginBottom: 16
          }}>
            {error}
          </div>
        )}

        {/* Open Button */}
        <button
          onClick={handleOpenFile}
          disabled={!selectedFile}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 700,
            cursor: !selectedFile ? 'not-allowed' : 'pointer',
            opacity: !selectedFile ? 0.5 : 1,
            width: '100%',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => {
            if (selectedFile) {
              e.currentTarget.style.transform = 'scale(1.02)'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          Open Drawing
        </button>

        <p style={{
          fontSize: 11,
          color: '#a0aec0',
          marginTop: 24
        }}>
          Tip: Select the drawing file from your local computer to open it.
        </p>
      </div>
    </div>
  )
}
