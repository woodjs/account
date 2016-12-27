import {Pipe, PipeTransform} from '@angular/core';
import {SRC_BASE} from '../../config/src-base';

@Pipe({
  name: 'framePicturePipe'
})
export class FramePicturePipe implements PipeTransform {
  transform(src: string): string {
    return SRC_BASE.images.frameBaseSrc + src;
  }
}