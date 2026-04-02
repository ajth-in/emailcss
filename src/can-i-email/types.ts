export interface CanIEmailItem {
  slug: string;
  category: string;
  title: string;
  description: string;
  url: string;
  last_test_date: string;
  stats: Record<string, Record<string, Record<string, string>>>;
  notes_by_num: Record<string, string> | null;
  notes: string | null;
}

export interface Coverage {
  support: number;
  partial: number;
  notSupported: number;
}

export interface ProcessedItem {
  slug: string;
  description: string | null;
  url: string;
  last_test_date: string;
  coverage: Coverage;
  notes: string | null;
  type: string;
}
