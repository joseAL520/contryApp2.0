import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-components-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  placeHolder:string = '';

  @Output()
  onValue = new EventEmitter<string>();


  emitValue( value:string):void{
    this.onValue.emit(value)
  }

}
