import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';


HttpClient `https://api.worldbank.org/V2/country/${AppComponent.idValue}?format=json`