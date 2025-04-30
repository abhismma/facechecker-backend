import React, { useState, useRef } from 'react';
import { Upload, Camera } from 'lucide-react';

interface UploadAreaProps {
  onImageUpload: (imageDataUrl: string) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    // Check if the file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        onImageUpload(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      className={`
        bg-white p-8 rounded-lg shadow-sm border-2 border-dashed 
        ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} 
        transition-colors duration-200 cursor-pointer
        hover:border-indigo-400 hover:bg-indigo-50/50
      `}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={triggerFileInput}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        accept="image/*" 
        className="hidden" 
      />
      
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-indigo-100 p-4 rounded-full mb-6">
          <Upload className="h-10 w-10 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {isDragging ? 'Drop Your Image Here' : 'Upload a Face Image'}
        </h3>
        <p className="text-gray-500 text-center mb-6">
          Drag and drop your image here, or click to select a file
        </p>
        <div className="text-sm text-gray-400">
          Supported formats: JPG, PNG, WEBP
        </div>
        <div className="mt-8">
          <button 
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              triggerFileInput();
            }}
          >
            <Camera className="mr-2 h-4 w-4" />
            Select Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadArea;