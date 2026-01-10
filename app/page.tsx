"use client"

import { Download } from "lucide-react"

function page() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Stock Management Setup 0.1.0.exe"
    link.download = "Stock Management Setup 0.1.0.exe"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center mb-10">Bienvenue dans l&apos;application <br />de gestion des stocks</h1>
      <button
        onClick={handleDownload}
        className="px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition cursor-pointer"
      >
        <Download />
        Télécharger l&apos;application
      </button>
    </div>
  )
}

export default page
