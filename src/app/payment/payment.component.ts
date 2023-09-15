import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}

  pay() {
    const order = {
      amount: 1000, // Replace with the actual amount
    };
  
    this.paymentService.createPayment(
      order,(response: any) => {
        // Payment success logic here
        console.log(response);
      },
      (response: any) => {
        console.log(response)
        console.log("failure")
        // Payment failure or dismissal logic here
      }
    );
  }
}

  //   pay(){

  //   const options = {
  //     key: 'rzp_test_D7Hs82CAxf5Z4E',
  //     amount: 5000, // The amount in paisa (e.g., 1000 for ₹10)
  //     currency: 'INR',
  //     name: 'Rahul Co.' ,
  //     description: 'Purchase Description',
  //     image: "https://example.com/your_logo",
  //     order_id:'order_McVPMZRwpH88PH', // You need to create an order on the server-side
  //     "handler": function (response:any){
  //       alert(response.razorpay_payment_id);
  //       alert(response.razorpay_order_id);
  //       alert(response.razorpay_signature)
  //   },
  //     prefill: {
  //       name: 'Rahul',
  //       email: 'customer@example.com',
  //       contact: '9898989898',
  //     },
  //     theme:{
  //       color: '#32655'
  //     },
  //     modal:{
  //       ondismiss:() =>{
  //         console.warn('dismissed');

  //       }
  //     }
  //     };

  //   const successCallback = (response:any) =>{
  //     console.warn(response);

  //   }

  //   const failureCallback = (e:any) =>{
  //     console.warn(e);

  //   }

  //   Razorpay.open(options, successCallback, failureCallback)
  // }
  // }
