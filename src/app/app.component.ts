import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practichna29';

  isVisible = false;
  showParagraph = true;
  isHidden = false;
  isParagraphVisible = true;

  toggleParagraph() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
  items = [
    { text: 'Paragraph 1', checked: false },
    { text: 'Paragraph 2', checked: false },
    { text: 'Paragraph 3', checked: false }
  ];

  toggleParagraph1(item: { text: string, checked: boolean }) {
    if((item.checked==false)==false){
      item.checked=false;
    }else{
      item.checked=true
  }}
  isChecked = false;
  isRed = false;
  isCrossedOut = false;
  countries: string[] = ['Україна', 'США', 'Канада', 'Великобританія', 'Німеччина'];
  selectedCountry: string = this.countries[0];

  selectedCity: string = '';
  cities: string[] = ['Kyiv', 'Lviv', 'Odessa', 'Kharkiv'];

  onSelect(event:any) {
    this.selectedCity = event.target.value;
  }
  countries1 = [
    { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
    { name: 'Canada', cities: ['Toronto', 'Montreal', 'Vancouver'] },
    { name: 'UK', cities: ['London', 'Manchester', 'Birmingham'] }
  ];

  selectedCountry1: any;

  onCountrySelect(event:any) {
    this.selectedCountry1 = this.countries1.find(country => country.name === event.target.value);
  }
}
