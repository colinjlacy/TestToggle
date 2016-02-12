import {Page} from 'ionic/ionic';
import {Http} from 'angular2/http';
import {FormBuilder, Validators} from 'angular2/common'
import 'rxjs/add/operator/map';


@Page({
	templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	public DataItem;
	constructor( fb: FormBuilder, http: Http) {

		this.http = http;

		this.dataForm = fb.group({
			name_private: ["", Validators.required]
		});

	}

	onSave(form) {
		event.preventDefault();
	}

	//stringToBoolean(string) {
	//  switch (string.toLowerCase().trim()) {
	//    case "true":
	//    case "yes":
	//    case "1":
	//    case true:
	//      return true;
	//    case "false":
	//    case "no":
	//    case "0":
	//    case null:
	//      return false;
	//    default:
	//      return Boolean(string);
	//  }
	//}

	onPageWillEnter() {
		this.initDataItem();
	}
	initDataItem() {
		this.http.get('./build/js/test.json')
			.map((res) => res.json())
			.subscribe(
				data => this.DataItem = data,
				err => console.error(err)
			);
	}


}
