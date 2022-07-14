export interface EventData {
  value: {
    id: string;
    recipient: string[];
    subject: string;
    template: string;
    message: string;
    data: string;
    timestamp: string;
  };
}
