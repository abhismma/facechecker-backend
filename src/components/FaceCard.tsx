import React, { useState } from 'react';
import { FaceMatch } from '../types';
import { ChevronDown, ChevronUp, Globe, Instagram, Twitter } from 'lucide-react';

interface FaceCardProps {
  match: FaceMatch;
  rank: number;
  blurEnabled: boolean;
}

const FaceCard: React.FC<FaceCardProps> = ({ match, rank, blurEnabled }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Calculate color based on similarity
  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 90) return 'bg-green-100 text-green-800';
    if (similarity >= 80) return 'bg-emerald-100 text-emerald-800';
    if (similarity >= 70) return 'bg-blue-100 text-blue-800';
    if (similarity >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-orange-100 text-orange-800';
  };

  // Format the percentage with one decimal place
  const formattedSimilarity = match.similarity.toFixed(1);
  const similarityColorClass = getSimilarityColor(match.similarity);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-md">
      <div className="flex items-center p-3">
        <div className="font-medium text-gray-500 w-8 text-center">{rank}</div>
        <div className="relative flex-1 aspect-square max-w-[80px] overflow-hidden rounded-md bg-gray-100">
          <img 
            src={match.imageUrl} 
            alt={`Face match ${rank}`}
            className={`w-full h-full object-cover ${blurEnabled ? 'blur-md' : ''}`}
          />
        </div>
        <div className="flex-1 ml-3">
          <div className="font-medium text-gray-900">{match.name}</div>
          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${similarityColorClass}`}>
            {formattedSimilarity}% match
          </div>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
        >
          {expanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {expanded && (
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="text-sm text-gray-500 mb-2">Source: {match.source}</div>
          
          {match.description && (
            <p className="text-gray-600 text-sm mb-3">{match.description}</p>
          )}
          
          {match.links && match.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {match.links.map((link, i) => {
                // Show appropriate icon based on link type
                let Icon = Globe;
                if (link.url.includes('instagram')) Icon = Instagram;
                if (link.url.includes('twitter')) Icon = Twitter;
                
                return (
                  <a 
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
                  >
                    <Icon className="h-3 w-3 mr-1" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FaceCard;