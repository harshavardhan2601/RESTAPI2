import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import { studentModal } from '../table';


@Component({
  selector: 'app-table-curd',
  templateUrl: './table-curd.component.html',
  styleUrls: ['./table-curd.component.css']
})
export class TableCurdComponent implements OnInit {

  newdata = <studentModal>{}
  IsForUpdate: boolean = false;
  updatedItem;
  Data :studentModal[] = new Array(); 
    constructor(private formBuilder: FormBuilder, private auth: AuthService) {
}



ngOnInit(): void {
  this.auth.getdata()
    .subscribe(res => {
      this.Data = res;
      console.log(this.Data);
    });


}

editdata(e, i) {
  console.log(this.newdata)
  console.log(i)
  console.log(this.Data[i])

  this.newdata = this.Data[i]

  console.log(this.newdata)
  this.updatedItem = i;
  this.IsForUpdate = true;
  // $('#input_studentid' + i).show();
  // $('#label_studentid' + i).hide();
  // var studentid = $('#userId' + i).val();
  // var studentid_html = '<input class="form-control studentid' + i + '" id="sid" type="text" name="studentid" value="' + studentid + '" />'
  // $('#input_studentid' + i).html($('#input_studentid' + i).html() + studentid_html);
  // $('#delete' + i).hide();
  // $('#edit' + i).hide();
  // $('#save' + i).show();

}

Update() {
  
  console.log(this.newdata)
  var data = this.newdata
  this.auth.updatedata(data)
  .subscribe(res =>{
    console.log(res)
    if(res){
      window.location.reload();
    }
  })
}


deletedata(e,i) {
  console.log(this.Data[i])
  var data = this.Data[i]
  this.auth.delete(data).subscribe(res =>{
    console.log(res)
    if (res) {
      window.location.reload(); 
    }
  })
}

onSubmit() {
  console.log(this.newdata)
  var data = this.newdata
  
  this.auth.addform(data)
    .subscribe(res => {
      console.log(res)
      if (res) {
        window.location.reload();
      }
    });
}

}
