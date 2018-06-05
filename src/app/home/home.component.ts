import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit{


    showdetail: boolean;
    detail = {
        name:'',
        address:'',
        tel:'',
        cc_number:'',
        cc_month:'',
        cc_year:'',
        cc_cvc:'',
        order:'',
    }
    msg = {
        status : false,
        error: ""
    }

    ngOnInit(): void {
        this.showdetail = false;
    }

    payment(){
        this.validate()
        if(!this.msg.status){
            console.log(this.detail);
            let card_no = this.detail.cc_number.slice(0,this.detail.cc_number.length-2);
            this.detail.cc_number = card_no+"xx";
            this.detail.order =  "BEA00"+Math.floor(Math.random() * (300000));
            this.showdetail = true;
        }
    }

    validate(){
        this.msg.status = false
        if(this.detail.name==''){
            this.msg.status = true
            this.msg.error = 'กรุณาระบุชื่อ'
            return;
        }
        if(this.detail.address==''){
            this.msg.status = true
            this.msg.error = 'กรุณาระบุที่อยู่ในการจัดส่ง'
            return;
        }
        if(this.detail.tel==''){
            this.msg.status = true
            this.msg.error = 'กรุณาระบุหมายเลขโทรศัพท์'
            return;
        }
        if(this.detail.cc_number==''){
            this.msg.status = true
            this.msg.error = 'กรุณาระบุหมายเลขบัตร'
            return;
        }
        if(this.detail.cc_month==''){
            this.msg.status = true
            this.msg.error = 'กรุณาระบุเดือน'
            return;
        }
        if(this.detail.cc_year==''){
            this.msg.status = true
            this.msg.error = 'กรุณาระบุปี'
            return;
        }
        if(this.detail.cc_cvc==''){
            this.msg.status = true
            this.msg.error = 'กรุณาระบุรหัส cvc'
            return;
        }
    }

    back(){
        this.showdetail = false;
        this.detail = {
            name:'',
            address:'',
            tel:'',
            cc_number:'',
            cc_month:'',
            cc_year:'',
            cc_cvc:'',
            order:'',
        }
    }

    clearErrMsg(){
        this.msg.status = false;
    }
}
