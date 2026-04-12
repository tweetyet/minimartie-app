import React from 'react'

const PageLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#A16207]/5 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#A16207]/30 border-t-[#A16207] rounded-full animate-spin"></div>
        
        {/* Text */}
        <p className="text-[#A16207] font-medium text-sm animate-pulse">
          Loading...
        </p>
        
      </div>
    </div>
  )
}

export default PageLoading
