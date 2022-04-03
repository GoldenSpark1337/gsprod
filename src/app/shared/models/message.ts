export interface IMessage {
    id: number;
    senderId: number;
    senderUsername: string;
    senderImage: string;
    recipientId: number;
    recipientUsername: string;
    recipientImage: string;
    content: string;
    dateRead: Date;
    createdAt: Date;
}