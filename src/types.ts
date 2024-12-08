export interface StoredDocument {
  id: string;  // UUID for reference
  content: string;
  metadata: {
    title?: string;
    pageCount: number;
    chunks?: {
      id: string;
      startPage: number;
      endPage: number;
      summary?: string;
    }[];
    lastAccessed: Date;
    mimeType: string;
  };
}

export interface DocumentReference {
  id: string;
  summary?: string;
  pageCount: number;
  mimeType: string;
}