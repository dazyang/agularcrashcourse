import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // the name we use in our templates
  name: 'categoryList',
  // pure helps to define whether it is stateless or stateful. Pure means that the pipe will take in data or return data without any side effects. Pipe are stateless by default, so this metadata is optional.
  // pure: true
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
    // set up an local array to store unique category names found
    const categories = [];
    // use forEach to walk over the collection
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        // and add unique names to the local array
        categories.push(mediaItem.category);
      }
    });
    // then it returns the local array values joined into a string seperated by a comma
    return categories.join(', ');
  }
}
