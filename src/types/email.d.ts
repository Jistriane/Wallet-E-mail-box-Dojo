export interface Email {
  from: string;
  to: string;
  subject: string;
  content: string;
  timestamp: number;
  read: boolean;
  encrypted?: boolean;
}

export type EmailTab = 'inbox' | 'enviados' | 'novo' | 'spam'; 