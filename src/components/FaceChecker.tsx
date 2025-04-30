import React, { useState } from 'react';
import UploadArea from './UploadArea';
import ResultsDisplay from './ResultsDisplay';
import { processFaceImage } from '../services/faceRecognition';
import { FaceMatch } from '../types';

const FaceChecker: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [matches, setMatches] = useState<FaceMatch[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [blurEnabled, setBlurEnabled] = useState<boolean>(false);

  const handleImageUpload = async (imageDataUrl: string) => {
    setError(null);
    setUploadedImage(imageDataUrl);
    setIsProcessing(true);
    
    try {
      // Simulate processing delay
      const results = await processFaceImage(imageDataUrl);
      setMatches(results);
    } catch (err) {
      setError('Error processing the image. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClearResults = () => {
    setUploadedImage(null);
    setMatches([]);
    setError(null);
  };

  const toggleBlur = () => {
    setBlurEnabled(!blurEnabled);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Similar Faces</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload a face image and our advanced AI will find the most similar faces from our database.
          Fast, secure, and privacy-focused.
        </p>
      </div>

      {!uploadedImage ? (
        <UploadArea onImageUpload={handleImageUpload} />
      ) : (
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Uploaded Image</h3>
              <div className="aspect-square relative overflow-hidden rounded-md bg-gray-100">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded face" 
                  className={`w-full h-full object-cover ${blurEnabled ? 'blur-md' : ''}`}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button 
                  onClick={handleClearResults}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  New Search
                </button>
                <button 
                  onClick={toggleBlur}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
                >
                  {blurEnabled ? 'Show Faces' : 'Anonymize'}
                </button>
              </div>
            </div>
            
            <div className="w-full sm:w-2/3">
              <ResultsDisplay 
                isLoading={isProcessing}
                matches={matches} 
                error={error}
                blurEnabled={blurEnabled}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceChecker;