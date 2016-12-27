import {Pipe, PipeTransform} from '@angular/core';
import {SRC_BASE} from '../../config/src-base';

@Pipe({
  name: 'profilePicturePipe'
})
export class ProfilePicturePipe implements  PipeTransform {
  transform (src: string): string {
    return SRC_BASE.images.profileBaseSrc + src;
  }
}