import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phoneNum: number): unknown {
    const phoneStr = '0' + phoneNum.toString();
    const phoneStrFmt = phoneStr.slice(0, 3) + '-' + phoneStr.slice(3);
    return phoneStrFmt;
  }
}
