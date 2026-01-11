export interface OptionDetail {
  value: string;
  imageUrl: string | null;
  audioUrl: string | null;
}

export interface Quiz {
  id: string;
  question: string;
  answer: string;
  options: string[];
  point: number;
  materiId: string;
  answerImage: string | null;
  answerAudio: string | null;
  optionDetails: OptionDetail[];
  hasAnswerImage: boolean;
  hasAnswerAudio: boolean;
  hasOptionsMedia: boolean;
}

export interface ApiResponse {
  success: boolean;
  data: Quiz[];
  count: number;
  message?: string;
  error?: string;
}
