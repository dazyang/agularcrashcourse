import { Directive, HostBinding } from '@angular/core'

@Directive({
 selector: '[mwFavorite]'
})
export class FavoriteDirective {
  // class is referring to a native DOM property available on elements
  @HostBinding('class.is-foavorite') isFavorite = true
}
