import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASEURL:string="http://localhost:8081/api/";
BASEURL1:string="http://localhost:8082/api/";

  constructor(private http:HttpClient) { }

  validate(data:any){
    return this.http.post<any>(this.BASEURL+"users/validate",data);
  }

  validateadmin(data:any){
    return this.http.post<any>(this.BASEURL+"admin/validate",data);
  }
  submitQuestion(data:any){
    return this.http.post<any>(this.BASEURL1+"questions",data)
  }
  approveQuestion(data:any){
    return this.http.get<any>(this.BASEURL1+"questions/approvequestion/"+data)
  }
  uploadImage(uploadImageData){
    return this.http.post<any>(this.BASEURL1+"images",uploadImageData)
  }
  //categories
  getImage(imageName){
    return this.http.get<any>(this.BASEURL1+"images/"+imageName)
  }
  deleteQuestion(data:any){
    return this.http.delete<any>(this.BASEURL1+"questions/deletequestion/"+data)
  }
  

  deletecategory(id:number){
    return this.http.delete<any>(this.BASEURL+"categories/"+id)
  }

  //customer
  register(data:any){
    return this.http.post<any>(this.BASEURL+"users",data);
  }
  registeradmin(data:any){
    return this.http.post<any>(this.BASEURL+"admin",data)
  }

  listcustomers(){
    return this.http.get<any[]>(this.BASEURL+"customers")
  }
  questions(){
    return this.http.get<any[]>(this.BASEURL1+"questions")
  }
  
  // getcustomerdetails(id:any){
  //   return this.http.get<any>(this.BASEURL+"customers/"+id)
  // }
  getUserDetails(id:any){
    return this.http.get<any>(this.BASEURL+"users/"+id)
  }

  //products
  saveproduct(data:any){
    new HttpHeaders().set("Accept", "application/json");
    return this.http.post<any>(this.BASEURL+"products",data)
  }
  findQuestionById(id:any){
    return this.http.get<any>(this.BASEURL1+"questions/"+id)
  }
  addAnswer(id:any,data:any){
    return this.http.post<any>(this.BASEURL1+"questions/postanswer/"+id,data)
  }
  approveAnswer(answerId:any){
    console.log("hii")
    return this.http.get<any>(this.BASEURL1+"answers/approveanswer/"+answerId)
  }
  deleteAnswer(answerId:any){
    return this.http.delete<any>(this.BASEURL1+"answers/deleteanswer/"+answerId)
  }

  
  

 

  

  //wishlist
  

  

  deletefromwishlist(id:any){
    return this.http.delete<any>(this.BASEURL+"wishlist/"+id)
  }

  //cart
  addtocart(data:any){
    return this.http.post<any>(this.BASEURL+"cart",data)
  }

  getcart(id:any){
    return this.http.get<any[]>(this.BASEURL+"cart?custid="+id)
  }

  deletefromcart(id:any){
    return this.http.delete<any>(this.BASEURL+"cart/"+id)
  }

  updateqty(cartid:number,qty:number){
    return this.http.get<any>(this.BASEURL+"cart/updateqty?cartid="+cartid+"&qty="+qty);
  }

  //orders
  placeorder(data:any){
    return this.http.post<any>(this.BASEURL+"orders",data);
  }

  orderhistory(custid:any){
    return this.http.get<any[]>(this.BASEURL+"orders?custid="+custid);
  }

  allorders(){
    return this.http.get<any[]>(this.BASEURL+"orders");
  }
}
