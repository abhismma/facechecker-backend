import { FaceMatch } from '../types';

// This is a simulated service that would be replaced with actual AI face recognition
// in a production environment with a proper backend

// Mock database of faces
const mockFaceDatabase: FaceMatch[] = [
  {
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    name: 'Alexander Morgan',
    similarity: 94.8,
    source: 'Celebrity Database',
    description: 'Actor known for roles in action movies and drama series.',
    links: [
      { label: 'Instagram', url: '#' },
      { label: 'IMDB', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    name: 'Jason Brooks',
    similarity: 92.3,
    source: 'Model Agency Database',
    description: 'Professional model featured in various fashion magazines.',
    links: [
      { label: 'Portfolio', url: '#' },
      { label: 'Instagram', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
    name: 'Emma Wilson',
    similarity: 87.5,
    source: 'Public Domain Images',
    description: 'Stock photo model.',
    links: [
      { label: 'Getty Images', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    name: 'Sarah Johnson',
    similarity: 85.9,
    source: 'Photography Archives',
    description: 'Featured in multiple advertising campaigns for skincare products.',
    links: [
      { label: 'Portfolio', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    name: 'Jessica Chen',
    similarity: 83.2,
    source: 'Fashion Database',
    description: 'Model and influencer specializing in beauty and lifestyle content.',
    links: [
      { label: 'Instagram', url: '#' },
      { label: 'YouTube', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    name: 'Olivia Martinez',
    similarity: 82.1,
    source: 'Creative Commons Images',
    description: 'Freelance photographer and occasional model.',
    links: [
      { label: 'Portfolio', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    name: 'David Anderson',
    similarity: 78.6,
    source: 'Modeling Agency',
    description: 'Commercial model who has appeared in print advertisements.',
    links: [
      { label: 'Agency', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    name: 'Marcus Taylor',
    similarity: 77.3,
    source: 'Digital Content Platform',
    description: 'Content creator focused on travel and lifestyle.',
    links: [
      { label: 'Instagram', url: '#' },
      { label: 'Twitter', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    name: 'Rachel Wong',
    similarity: 76.9,
    source: 'Stock Photography',
    description: 'Professional model for commercial photography.',
    links: [
      { label: 'Portfolio', url: '#' }
    ]
  },
  {
    imageUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
    name: 'Michael Stevens',
    similarity: 72.4,
    source: 'Public Profiles',
    description: 'Model and actor appearing in independent films.',
    links: [
      { label: 'IMDB', url: '#' }
    ]
  }
];

/**
 * Simulates processing a face image and returning similar faces.
 * In a real application, this would connect to a backend API that performs actual face recognition.
 */
export const processFaceImage = async (imageDataUrl: string): Promise<FaceMatch[]> => {
  // Simulate network delay and processing time
  return new Promise((resolve) => {
    // Random timing between 1-2 seconds to simulate processing
    const processingTime = 1000 + Math.random() * 1000;
    
    setTimeout(() => {
      // In a real application, we would send the image to a backend API
      // and get actual results based on AI face recognition.
      // For this simulation, we'll return the mock data with slight randomization
      
      // Randomize similarity scores slightly for demo purposes
      const results = mockFaceDatabase.map(face => ({
        ...face,
        similarity: face.similarity + (Math.random() * 2 - 1) // Add/subtract up to 1%
      }));
      
      // Sort by similarity (highest first)
      const sortedResults = results.sort((a, b) => b.similarity - a.similarity);
      
      resolve(sortedResults);
    }, processingTime);
  });
};

/**
 * This function would handle limiting uploads per user
 * In a real application, this would connect to a database or authentication system
 */
export const checkUploadLimit = async (userId: string): Promise<boolean> => {
  // Simulate checking if user has exceeded their upload limit
  return true; // For demo purposes, always allow uploads
};