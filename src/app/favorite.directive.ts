import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
 selector: '[mwFavorite]'
})
export class FavoriteDirective {
  // class is referring to a native DOM property available on elements
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter(){
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hovering = false;
  }
  // Setter method will be called when a property with the same name is set to a value from an instense of a class
  // a setter method will get pass a value
  @Input() set mwFavorite(value) {
    this.isFavorite = value
  }
}
