import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Input() placeholder!: string;
  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();
  @Output() enterPressed: EventEmitter<void> = new EventEmitter<void>();

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.enterPressed.emit();
    }
  }
}
