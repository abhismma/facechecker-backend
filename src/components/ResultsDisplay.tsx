import React from 'react';
import FaceCard from './FaceCard';
import { FaceMatch } from '../types';
import { Loader2 } from 'lucide-react';

interface ResultsDisplayProps {
  isLoading: boolean;
  matches: FaceMatch[];
  error: string | null;
  blurEnabled: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
  isLoading, matches, error, blurEnabled 
}) => {
  if (isLoading) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
        <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-4" />
        <h3 className="text-xl font-semibold mb-2">Processing Image</h3>
        <p className="text-gray-600 text-center max-w-md">
          Our AI is analyzing the face features and searching for matches...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="p-4 bg-red-50 border border-red-200 rounded-md mb-4">
          <h3 className="text-red-700 font-medium mb-1">Error</h3>
          <p className="text-red-600">{error}</p>
        </div>
        <p className="text-gray-600">
          Please try uploading a different image or try again later.
        </p>
      </div>
    );
  }

  if (matches.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Similar Faces Found</h3>
      <p className="text-gray-600 mb-6">
        We found {matches.length} potential matches based on facial features.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {matches.map((match, index) => (
          <FaceCard 
            key={index} 
            match={match} 
            rank={index + 1}
            blurEnabled={blurEnabled}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsDisplay;