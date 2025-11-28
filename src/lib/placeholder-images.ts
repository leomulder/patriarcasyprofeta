import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// The data is now an empty object, so we handle that case.
export const PlaceHolderImages: ImagePlaceholder[] = (data as any).placeholderImages || [];
