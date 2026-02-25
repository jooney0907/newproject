import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'boy' | 'girl' | 'translation';
  translation?: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChatComponent {
  messages: ChatMessage[] = [
    { id: 1, text: "Hey, are you okay?", sender: 'boy', timestamp: new Date('2026-02-25T10:30:00') },
    { id: 2, text: "Yeah I'm fine", sender: 'girl', translation: "I'm actually upset but don't want to talk about it", timestamp: new Date('2026-02-25T10:31:00') },
    { id: 3, text: "Okay cool", sender: 'boy', timestamp: new Date('2026-02-25T10:31:30') },
  ];

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      const message: ChatMessage = {
        id: this.messages.length + 1,
        text: this.newMessage,
        sender: 'boy',
        timestamp: new Date()
      };
      this.messages.push(message);
      this.newMessage = '';
    }
  }
}
