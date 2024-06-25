// home.component.ts

import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/chatbot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userInput: string = '';
  chatbotClosed: boolean = true;
  messages: { content: string; isUser: boolean }[] = [];
  load: boolean = false;

  constructor(private chatbotService: ChatbotService) {
    this.aiMessage(
      'Hi there 🖐... Welcome To Pharmalint I am here to help with your general enquiries.'
    );
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (text.length > 0) {
      this.userMessage(text);
      this.userInput = '';
      this.load = true;
      this.aiMessage('Loading...', true);

      this.chatbotService.sendMessage(text).subscribe(
        (response) => {
          this.aiMessage(response.response);
          this.removeLoadingMessage();
        },
        (error) => {
          console.error('Error fetching response from AI service', error);
          this.aiMessage(
            "My apologies, I'm not available at the moment. Feel free to call our support team directly at 0123456789."
          );
          this.removeLoadingMessage();
        }
      );
    }
  }

  removeLoadingMessage() {
    this.messages = this.messages.filter(
      (message) => message.content !== 'Loading...'
    );
    this.load = false;
  }

  userMessage(content: string) {
    this.messages.push({ content: content, isUser: true });
  }

  aiMessage(content: string, isLoading: boolean = false) {
    if (isLoading) {
      this.messages.push({ content: 'Loading...', isUser: false });
    } else {
      this.messages.push({ content: content, isUser: false });
    }
  }

  toggleChatbot() {
    this.chatbotClosed = !this.chatbotClosed;
    if (!this.chatbotClosed) {
      setTimeout(() => {
        const inputElement = document.querySelector(
          '.chatbot__input'
        ) as HTMLInputElement;
        if (inputElement) {
          inputElement.focus();
        }
      }, 100); // Adjust delay as needed
    }
  }
}
