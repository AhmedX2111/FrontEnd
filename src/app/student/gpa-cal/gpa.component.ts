import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/chatbot.service';

@Component({
  selector: 'gpa-cal',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent {
  constructor(private chatbotService: ChatbotService) {}
}
