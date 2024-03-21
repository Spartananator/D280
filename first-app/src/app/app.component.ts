import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  clickResponse = 'no click';

  getCountry(event) {
    var idAttribute = event.target.parentNode.attributes.id
    var idValue
    if ( idAttribute != null){
      idValue = idAttribute.nodeValue;
    }
    else {
      idAttribute = event.target.attributes.id
      idValue = idAttribute.nodeValue;
    }
    //var idValue = idAttribute.nodeValue;
    this.clickResponse = idValue;
  }
}
//this.parentNode.parentNode.id