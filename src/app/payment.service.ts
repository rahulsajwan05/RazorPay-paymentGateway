import { Injectable } from '@angular/core';

function _Window() : any {
  //return thr global native browser window object
  return window;
}

declare var Razorpay: any;
 
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private rzp: any;


  constructor() { }

  createPayment(order: any, successCallback: any, errorCallback: any) {
    const options = {
      key: 'rzp_test_D7Hs82CAxf5Z4E',
      amount: order.amount, // The amount in paisa (e.g., 1000 for ₹10)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Purchase Description',
      order_id:'order_McYHBFnJktYVH6', // You need to create an order on the server-side
      prefill: {
        name: 'Rahul',
        email: 'customer@example.com',
        contact: '9898989897',
      },
      handler: (response: any) => {
        successCallback(response);
        console.warn(response);
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
      },
      modal: {
        confirm_close:true,
        handleback: true,
        ondismiss: () => {
          errorCallback();
          console.log("failure2")
        },
      },
    
    };
    
    this.rzp = new Razorpay(options);
    this.rzp.on('payment.failed', function (response:any){
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
  });
    this.rzp.open();
  }

}
