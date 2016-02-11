import {Page} from 'ionic/ionic';
import {Http} from 'angular2/http';
import {FormBuilder, Validators} from 'angular2/common'
import 'rxjs/add/operator/map';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  constructor( fb: FormBuilder, http: Http) {

    this.http = http;

    this.DataItem = [];

    this.initDataItem();

    this.dataForm = fb.group({
      name_private: ["", Validators.required]
    });

  }


  onSave(form)
  {

    console.log(this.DataItem.published);

    event.preventDefault();
  }

  stringToBoolean(string) {
    switch (string.toLowerCase().trim()) {
      case "true":
      case "yes":
      case "1":
        return true;
      case "false":
      case "no":
      case "0":
      case null:
        return false;
      default:
        return Boolean(string);
    }
  }

  initDataItem()
  {

    this.http.get(window.location.protocol + '//' + window.location.hostname+ '/TestToggle/get.php?q=test')

        .map((res: Response) => res.json())

  .subscribe(
      data => {

    this.DataItem.published = this.stringToBoolean(data.data[0].published);

  },
    err => console.error(err)
  );

  }


}
