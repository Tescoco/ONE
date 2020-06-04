var container = new Vue({
    el:'#container',

    data:{  
       link1:"show",link2:"none",link3:"none",link4:"none",link5:"none",link6:"none",link7:"none",
       NameofItem:"example1",NameofItem2:"example2", NameofItem3:"example3",NameofItem4:"example4", NameofItem5:"example5",NameofItem6:"example6", NameofItem7:"example7",
        Total:0,
       delivery:0,
       Commision:0,
       Totalprice:0,
       totalprice1:0,totalprice2:0,totalprice3:0,totalprice4:0,totalprice5:0,totalprice6:0,totalprice7:0,
       Commision1:0,Commision2:0,Commision3:0,Commision4:0,Commision5:0,Commision6:0,Commision7:0,
       Total1:0,Total2:0,Total3:0,Total4:0,Total5:0,Total6:0,Total7:0,
       tagtransferedPrice2:2000,tagtransferedPrice3:150,tagtransferedPrice4:2000,tagtransferedPrice5:150,tagtransferedPrice6:2000,tagtransferedPrice7:150,//example 
       delivery1:10, delivery2:150, delivery3:100, delivery4:270, delivery5:100, delivery6:10, delivery7:70,//example
       deliveryclone1:10, deliveryclone2:150, deliveryclone3:100, deliveryclone4:270, deliveryclone5:180, deliveryclone6:10, deliveryclone7:70,//example
       //delivery and clone would be set the same
       totalQuantity1:0,totalQuantity2:0,totalQuantity3:0,totalQuantity4:0,totalQuantity5:0,totalQuantity6:0,totalQuantity7:0,
       Quantity:0,
       Quantity2:0,
       Quantity3:0,
       Quantity4:0,
       Quantity5:0,
       Quantity6:0,
       Quantity7:0,
       thirdOption:"none",
       fourthOption:"none",
       fifthOption:'none',
       sixthOption:"none",
       seventhOption:"none",
       clickedmoreoptions:0,clickedmoreoptionsthree:0,clickedmoreoptionsfour:0,clickedmoreoptionsfive:0,clickedmoreoptionssix:0,clickedmoreoptionsseven:0,
       btn:"show",
       Quantitytwo:0,
       Quantitytwo2:0,
       Quantitytwo3:0,
       Quantitytwo4:0,
       Quantitytwo5:0,
       Quantitytwo6:0,
       Quantitytwo7:0,
       Quantitythree:0,
       Quantitythree2:0,
       Quantitythree3:0,
       Quantitythree4:0,
       Quantitythree5:0,
       Quantitythree6:0,
       Quantitythree7:0,
       Quantityfour:0,
       Quantityfour2:0,
       Quantityfour3:0,
       Quantityfour4:0,
       Quantityfour5:0,
       Quantityfour6:0,
       Quantityfour7:0,
       Quantityfive:0,
       Quantityfive2:0,
       Quantityfive3:0,
       Quantityfive4:0,
       Quantityfive5:0,
       Quantityfive6:0,
       Quantityfive7:0,
       Quantitysix:0,
       Quantitysix2:0,
       Quantitysix3:0,
       Quantitysix4:0,
       Quantitysix5:0,
       Quantitysix6:0,
       Quantitysix7:0,
       Quantityseven:0,
       Quantityseven2:0,
       Quantityseven3:0,
       Quantityseven4:0,
       Quantityseven5:0,
       Quantityseven6:0,
       Quantityseven7:0,
       thirdOptiontwo:"none",
       fourthOptiontwo:"none",
       fifthOptiontwo:'none',
       sixthOptiontwo:"none",
       seventhOptiontwo:"none",
       clickedmoreoptionstwo:0,
       btntwo:"show",btnthree:"show",btnfour:"show",btnfive:"show",btnsix:"show",btnseven:"show",
       thirdOptionthree:"none",
       fourthOptionthree:"none",
       fifthOptionthree:"none",
       sixthOptionthree:"none",
       seventhOptionthree:"none",
       thirdOptionfour:"none",
       fourthOptionfour:"none",
       fifthOptionfour:"none",
       sixthOptionfour:"none",
       seventhOptionfour:"none",
       thirdOptionfive:"none",
       fourthOptionfive:"none",
       fifthOptionfive:"none",
       sixthOptionfive:"none",
       seventhOptionfive:"none",
       thirdOptionsix:"none",
       fourthOptionsix:"none",
       fifthOptionsix:"none",
       sixthOptionsix:"none",
       seventhOptionsix:"none",
       thirdOptionseven:"none",
       fourthOptionseven:"none",
       fifthOptionseven:"none",
       sixthOptionseven:"none",
       seventhOptionseven:"none",

       //detail one
       dit1:"none",dit2:"none",dit3:"none",dit4:"none",dit5:"none",dit6:"none",dit7:"none",
      color1 :'',color2:'',color3:'',color4:'',color5:'',color6:'',color7:'',
       size1:"",size2:"",size3:"",size4:"",size5:"",size6:"",size7:"",
      
       ditT1:"none",ditT2:"none", ditT3:"none",ditT4:"none", ditT5:"none",ditT6:"none", ditT7:"none",

       //detail two
       dittwo1:"none",dittwo2:"none",dittwo3:"none",dittwo4:"none",dittwo5:"none",dittwo6:"none",dittwo7:"none",
       colortwo1 :'',colortwo2:'',colortwo3:'',colortwo4:'',colortwo5:'',colortwo6:'',colortwo7:'',
       sizetwo1:"",sizetwo2:"",sizetwo3:"",sizetwo4:"",sizetwo5:"",sizetwo6:"",sizetwo7:"",
         
        //detail three
        ditthree1:"none",ditthree2:"none",ditthree3:"none",ditthree4:"none",ditthree5:"none",ditthree6:"none",ditthree7:"none",
        colorthree1 :'',colorthree2:'',colorthree3:'',colorthree4:'',colorthree5:'',colorthree6:'',colorthree7:'',
         sizethree1:"",sizethree2:"",sizethree3:"",sizethree4:"",sizethree5:"",sizethree6:"",sizethree7:"",

          //detail four
        ditfour1:"none",ditfour2:"none",ditfour3:"none",ditfour4:"none",ditfour5:"none",ditfour6:"none",ditfour7:"none",
        colorfour1 :'',colorfour2:'',colorfour3:'',colorfour4:'',colorfour5:'',colorfour6:'',colorfour7:'',
         sizefour1:"",sizefour2:"",sizefour3:"",sizefour4:"",sizefour5:"",sizefour6:"",sizefour7:"",

    //detail five
       ditfive1:"none",ditfive2:"none",ditfive3:"none",ditfive4:"none",ditfive5:"none",ditfive6:"none",ditfive7:"none",
       colorfive1 :'',colorfive2:'',colorfive3:'',colorfive4:'',colorfive5:'',colorfive6:'',colorfive7:'',
        sizefive1:"",sizefive2:"",sizefive3:"",sizefive4:"",sizefive5:"",sizefive6:"",sizefive7:"",

         //detail six
       ditsix1:"none",ditsix2:"none",ditsix3:"none",ditsix4:"none",ditsix5:"none",ditsix6:"none",ditsix7:"none",
       colorsix1 :'',colorsix2:'',colorsix3:'',colorsix4:'',colorsix5:'',colorsix6:'',colorsix7:'',
        sizesix1:"",sizesix2:"",sizesix3:"",sizesix4:"",sizesix5:"",sizesix6:"",sizesix7:"",

         //detail seven
       ditseven1:"none",ditseven2:"none",ditseven3:"none",ditseven4:"none",ditseven5:"none",ditseven6:"none",ditseven7:"none",
       colorseven1 :'',colorseven2:'',colorseven3:'',colorseven4:'',colorseven5:'',colorseven6:'',colorseven7:'',
        sizeseven1:"",sizeseven2:"",sizeseven3:"",sizeseven4:"",sizeseven5:"",sizeseven6:"",sizeseven7:"",
       

        numlinkclicks:0,
        newlinkall:"show",
        tagtransferedPrice:0,
    },
    methods:{
       transfer:function () {
          this.tagtransferedPrice = this.$refs.transPrice.value 
       },



       newlink:function () {
          this.numlinkclicks++
          if (this.numlinkclicks == 1) {
             this.link2 = "show"
             
          }
          if (this.numlinkclicks == 2) {
            this.link3 = "show"
            
         }
         if (this.numlinkclicks == 3) {
            this.link4 = "show"
            
         }
         if (this.numlinkclicks == 4) {
            this.link5 = "show"
            
         }
         if (this.numlinkclicks == 5) {
            this.link6 = "show"
            
         }
         if (this.numlinkclicks == 6) {
            this.link7 = "show"
            this.newlinkall ="none"
         }
          
       },
      
      
         moreoptions:function () {
            this.clickedmoreoptions++
           if ( this.clickedmoreoptions == 1) {
            this.thirdOption = "show";
               
           }
           if ( this.clickedmoreoptions == 2) {
            this. fourthOption = "show";
               
           }
           if ( this.clickedmoreoptions == 3) {
            this. fifthOption = "show";
               
           }
           if ( this.clickedmoreoptions == 4) {
            this.sixthOption  = "show";
               
           }
           if ( this.clickedmoreoptions == 5) {
            this.seventhOption  = "show";
            this.btn = "none"
               
           }
        },
        moreoptionstwo:function () {
            this.clickedmoreoptionstwo++
           if ( this.clickedmoreoptionstwo == 1) {
            this.thirdOptiontwo = "show";
               
           }
           if ( this.clickedmoreoptionstwo == 2) {
            this.fourthOptiontwo = "show";
               
           }
           if ( this.clickedmoreoptionstwo == 3) {
            this.fifthOptiontwo = "show";
               
           }
           if ( this.clickedmoreoptionstwo == 4) {
            this.sixthOptiontwo  = "show";
               
           }
           if ( this.clickedmoreoptionstwo == 5) {
            this.seventhOptiontwo  = "show";
            this.btntwo = "none"
               
           }
           
         },
         moreoptionsthree:function () {
            this.clickedmoreoptionsthree++
           if ( this.clickedmoreoptionsthree== 1) {
            this.thirdOptionthree = "show";
               
           }
           if ( this.clickedmoreoptionsthree == 2) {
            this.fourthOptionthree = "show";
               
           }
           if ( this.clickedmoreoptionsthree == 3) {
            this.fifthOptionthree= "show";
               
           }
           if ( this.clickedmoreoptionsthree == 4) {
            this.sixthOptionthree  = "show";
               
           }
           if ( this.clickedmoreoptionsthree == 5) {
            this.seventhOptionthree  = "show";
            this.btnthree = "none"
               
           }
           
         },
         moreoptionsfour:function () {
            this.clickedmoreoptionsfour++
           if ( this.clickedmoreoptionsfour== 1) {
            this.thirdOptionfour = "show";
               
           }
           if ( this.clickedmoreoptionsfour == 2) {
            this.fourthOptionfour = "show";
               
           }
           if ( this.clickedmoreoptionsfour == 3) {
            this.fifthOptionfour= "show";
               
           }
           if ( this.clickedmoreoptionsfour== 4) {
            this.sixthOptionfour = "show";
               
           }
           if ( this.clickedmoreoptionsfour == 5) {
            this.seventhOptionfour = "show";
            this.btnfour = "none"
               
           }
           
         },
         moreoptionsfive:function () {
            this.clickedmoreoptionsfive++
           if ( this.clickedmoreoptionsfive== 1) {
            this.thirdOptionfive = "show";
               
           }
           if ( this.clickedmoreoptionsfive == 2) {
            this.fourthOptionfive = "show";
               
           }
           if ( this.clickedmoreoptionsfive == 3) {
            this.fifthOptionfive= "show";
               
           }
           if ( this.clickedmoreoptionsfive== 4) {
            this.sixthOptionfive = "show";
               
           }
           if ( this.clickedmoreoptionsfive == 5) {
            this.seventhOptionfive = "show";
            this.btnfive = "none"
               
           }
           
         },
         moreoptionssix:function () {
            this.clickedmoreoptionssix++
           if ( this.clickedmoreoptionssix == 1) {
            this.thirdOptionsix = "show";
               
           }
           if ( this.clickedmoreoptionssix == 2) {
            this.fourthOptionsix = "show";
               
           }
           if ( this.clickedmoreoptionssix == 3) {
            this.fifthOptionsix = "show";
               
           }
           if ( this.clickedmoreoptionssix == 4) {
            this.sixthOptionsix = "show";
               
           }
           if ( this.clickedmoreoptionssix == 5) {
            this.seventhOptionsix = "show";
            this.btnsix = "none"
               
           }
           
         },
         moreoptionsseven:function () {
            this.clickedmoreoptionsseven++
           if ( this.clickedmoreoptionsseven == 1) {
            this.thirdOptionseven = "show";
               
           }
           if ( this.clickedmoreoptionsseven == 2) {
            this.fourthOptionseven = "show";
               
           }
           if ( this.clickedmoreoptionsseven == 3) {
            this.fifthOptionseven= "show";
               
           }
           if ( this.clickedmoreoptionsseven == 4) {
            this.sixthOptionseven = "show";
               
           }
           if ( this.clickedmoreoptionsseven == 5) {
            this.seventhOptionseven = "show";
            this.btnseven = "none"
               
           }
           
         },
        
       add:function () {
            this.Quantity++;
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
            if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
        

           
         },
        minus:function () {
         this.Quantity--;
               if ( this.Quantity < 0) {
               this.Quantity =  0
               }
         this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
      
               if ( this.totalQuantity1 > 0) {
                  this.delivery1 =  this.deliveryclone1
                 
             
                  }
              
                   
         },
         add2:function () {
            this.Quantity2++;
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
            if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
        
         
         },
        minus2:function () {
            this.Quantity2--; 
            if ( this.Quantity2 < 0) {
               this.Quantity2 =  0
              }
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          

           
              if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
            
         },
         add3:function () {
            this.Quantity3++;
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
            if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
          

           
         },
        minus3:function () {
            this.Quantity3--; 
            if ( this.Quantity3 < 0) {
               this.Quantity3 =  0
              }
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
           
              if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
           
         },
         add4:function () {
            this.Quantity4++;
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
            if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
           
         },
        minus4:function () {
            this.Quantity4--;
             if ( this.Quantity4 < 0) {
               this.Quantity4 =  0
              }
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
           
              if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
            
         },
         add5:function () {
            this.Quantity5++;
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
            if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }

           
         },
        minus5:function () {
            this.Quantity5--; 
            if ( this.Quantity5 < 0) {
               this.Quantity5 =  0
              }
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
              if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
            
         },
         add6:function () {
            this.Quantity6++;
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
            if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
           
           
         },
        minus6:function () {
            this.Quantity6--;
            if ( this.Quantity6 < 0) {
               this.Quantity6 =  0
              }
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
            
              if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }
            
         },
         add7:function () {
            this.Quantity7++;
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
            if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }

         },
        minus7:function () {
            this.Quantity7--;
              if ( this.Quantity7 < 0) {
               this.Quantity7 =  0
              }
            this.totalQuantity1 = this.Quantity + this.Quantity2 + this.Quantity3 + this.Quantity4 +this.Quantity5 +this.Quantity6 +this.Quantity7
          
          
              if ( this.totalQuantity1 > 0) {
               this.delivery1 =  this.deliveryclone1
              
          
               }

           
         },
         addtwo:function () {
            this.Quantitytwo++;
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
            if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }
          
           
         },
        minustwo:function () {
            this.Quantitytwo--; 
            if ( this.Quantitytwo < 0) {
               this.Quantitytwo =  0
              }
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
          
           
              if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }
             
            
         },
         addtwo2:function () {
            this.Quantitytwo2++;
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
            if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }
           
           
         },
        minustwo2:function () {
            this.Quantitytwo2--;
            if ( this.Quantitytwo2 < 0) {
               this.Quantitytwo2 =  0
              }
              this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
              if ( this.totalQuantity2 > 0) {
                 this.delivery2 =  this.deliveryclone2
                 }
            
           
         },
         addtwo3:function () {
            this.Quantitytwo3++;
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
            if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }

           
         },
        minustwo3:function () {
            this.Quantitytwo3--;
            if ( this.Quantitytwo3 < 0) {
               this.Quantitytwo3 =  0
              }
              this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
              if ( this.totalQuantity2 > 0) {
                 this.delivery2 =  this.deliveryclone2
                 }
           
           
         },
         addtwo4:function () {
            this.Quantitytwo4++;
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
            if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }
           

           
         },
        minustwo4:function () {
            this.Quantitytwo4--;
            if ( this.Quantitytwo4 < 0) {
               this.Quantitytwo4 =  0
              }
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
            if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }
          
           
         },
         addtwo5:function () {
            this.Quantitytwo5++;
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
            if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }
           
         
           
         },
        minustwo5:function () {
            this.Quantitytwo5--;
            if ( this.Quantitytwo5 < 0) {
               this.Quantitytwo5 =  0
              }
              this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
              if ( this.totalQuantity2 > 0) {
                 this.delivery2 =  this.deliveryclone2
                 }
            
           
         },
         addtwo6:function () {
            this.Quantitytwo6++;
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
            if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }
           
            
         },
        minustwo6:function () {
            this.Quantitytwo6--;
            if ( this.Quantitytwo6 < 0) {
               this.Quantitytwo6 =  0
              }
              this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
              if ( this.totalQuantity2 > 0) {
                 this.delivery2 =  this.deliveryclone2
                 }
            
           
         },
         addtwo7:function () {
            this.Quantitytwo7++;
            this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
            if ( this.totalQuantity2 > 0) {
               this.delivery2 =  this.deliveryclone2
               }
          
           
         },
        minustwo7:function () {
            this.Quantitytwo7--;
            if ( this.Quantitytwo7 < 0) {
               this.Quantitytwo7 =  0
              }
              this.totalQuantity2 = this.Quantitytwo + this.Quantitytwo2 + this.Quantitytwo3 + this.Quantitytwo4 +this.Quantitytwo5 +this.Quantitytwo6 +this.Quantitytwo7
              if ( this.totalQuantity2 > 0) {
                 this.delivery2 =  this.deliveryclone2
                 }
       
         
           
         },
         //
         addthree:function () {
            this.Quantitythree++;
            this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
          if ( this.totalQuantity3 > 0) {
               this.delivery3 =  this.deliveryclone3
               }
         },
        minusthree:function () {
            this.Quantitythree--; 
            if ( this.Quantitythree < 0) {
               this.Quantitythree =  0
              }
              this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
              if ( this.totalQuantity3 > 0) {
                   this.delivery3 =  this.deliveryclone3
                   }
         },
         addthree2:function () {
            this.Quantitythree2++;
            this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
          if ( this.totalQuantity3 > 0) {
               this.delivery3 =  this.deliveryclone3
               }
         },
        minusthree2:function () {
            this.Quantitythree2--; 
            if ( this.Quantitythree2 < 0) {
               this.Quantitythree2 =  0
              }
              this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
              if ( this.totalQuantity3 > 0) {
                   this.delivery3 =  this.deliveryclone3
                   }
         },
         addthree3:function () {
            this.Quantitythree3++;
            this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
            if ( this.totalQuantity3 > 0) {
                 this.delivery3 =  this.deliveryclone3
                 }
         },
        minusthree3:function () {
            this.Quantitythree3--; 
            if ( this.Quantitythree3 < 0) {
               this.Quantitythree3 =  0
              }
              this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
              if ( this.totalQuantity3 > 0) {
                   this.delivery3 =  this.deliveryclone3
                   }
         },
         addthree4:function () {
            this.Quantitythree4++;
            this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
          if ( this.totalQuantity3 > 0) {
               this.delivery3 =  this.deliveryclone3
               }
          
           
         },
        minusthree4:function () {
            this.Quantitythree4--; 
            if ( this.Quantitythree4 < 0) {
               this.Quantitythree4 =  0
              }
              this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
              if ( this.totalQuantity3 > 0) {
                   this.delivery3 =  this.deliveryclone3
                   }
         },
         addthree5:function () {
            this.Quantitythree5++;
            this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
            if ( this.totalQuantity3 > 0) {
                 this.delivery3 =  this.deliveryclone3
                 }
         },
        minusthree5:function () {
            this.Quantitythree5--; 
            if ( this.Quantitythree5 < 0) {
               this.Quantitythree5 =  0
              }
              this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
              if ( this.totalQuantity3 > 0) {
                   this.delivery3 =  this.deliveryclone3
                   }
         },
         addthree6:function () {
            this.Quantitythree6++;
            this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
            if ( this.totalQuantity3 > 0) {
                 this.delivery3 =  this.deliveryclone3
                 } 
         },
        minusthree6:function () {
            this.Quantitythree6--; 
            if ( this.Quantitythree6 < 0) {
               this.Quantitythree6 =  0
              }
              this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
              if ( this.totalQuantity3 > 0) {
                   this.delivery3 =  this.deliveryclone3
                   }
         },
         addthree7:function () {
            this.Quantitythree7++;
            this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
          if ( this.totalQuantity3 > 0) {
               this.delivery3 =  this.deliveryclone3
               }
         },
        minusthree7:function () {
            this.Quantitythree7--; 
            if ( this.Quantitythree7 < 0) {
               this.Quantitythree7 =  0
              }
            this.totalQuantity3 = this.Quantitythree + this.Quantitythree2 + this.Quantitythree3 + this.Quantitythree4 +this.Quantitythree5 +this.Quantitythree6 +this.Quantitythree7
          if ( this.totalQuantity3 > 0) {
               this.delivery3 =  this.deliveryclone3
               }
             
            
         },
         //
         addfour:function () {
            this.Quantityfour++;
            this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
            if ( this.totalQuantity4 > 0) {
                 this.delivery4 =  this.deliveryclone4
                 } 
           },
        minusfour:function () {
            this.Quantityfour--; 
            if ( this.Quantityfour < 0) {
               this.Quantityfour =  0
              }
              this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
              if ( this.totalQuantity4 > 0) {
                   this.delivery4 =  this.deliveryclone4
                   } 
             },
         addfour2:function () {
            this.Quantityfour2++;
            this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
            if ( this.totalQuantity4 > 0) {
                 this.delivery4 =  this.deliveryclone4
                 } 
           },
        minusfour2:function () {
            this.Quantityfour2--; 
            if ( this.Quantityfour2 < 0) {
               this.Quantityfour2 =  0
              }
              this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
              if ( this.totalQuantity4 > 0) {
                   this.delivery4 =  this.deliveryclone4
                   } 
             },
         addfour3:function () {
            this.Quantityfour3++;
            this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
            if ( this.totalQuantity4 > 0) {
                 this.delivery4 =  this.deliveryclone4
                 } 
           },
        minusfour3:function () {
            this.Quantityfour3--; 
            if ( this.Quantityfour3 < 0) {
               this.Quantityfour3 =  0
              }
              this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
              if ( this.totalQuantity4 > 0) {
                   this.delivery4 =  this.deliveryclone4
                   } 
             },
         addfour4:function () {
            this.Quantityfour4++;
            this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
            if ( this.totalQuantity4 > 0) {
                 this.delivery4 =  this.deliveryclone4
                 } 
           },
        minusfour4:function () {
            this.Quantityfour4--; 
            if ( this.Quantityfour4 < 0) {
               this.Quantityfour4 =  0
              }
              this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
              if ( this.totalQuantity4 > 0) {
                   this.delivery4 =  this.deliveryclone4
                   } 
             },
         addfour5:function () {
            this.Quantityfour5++;
            this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
            if ( this.totalQuantity4 > 0) {
                 this.delivery4 =  this.deliveryclone4
                 } 
           },
        minusfour5:function () {
            this.Quantityfour5--; 
            if ( this.Quantityfour5 < 0) {
               this.Quantityfour5 =  0
              }
              this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
              if ( this.totalQuantity4 > 0) {
                   this.delivery4 =  this.deliveryclone4
                   } 
             },
         addfour6:function () {
            this.Quantityfour6++;
            this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
          if ( this.totalQuantity4 > 0) {
               this.delivery4 =  this.deliveryclone4
               } 
         },
        minusfour6:function () {
            this.Quantityfour6--; 
            if ( this.Quantityfour6 < 0) {
               this.Quantityfour6 =  0
              }
              this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
              if ( this.totalQuantity4 > 0) {
                   this.delivery4 =  this.deliveryclone4
                   } 
             },
         addfour7:function () {
            this.Quantityfour7++;
            this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
            if ( this.totalQuantity4 > 0) {
                 this.delivery4 =  this.deliveryclone4
                 } 
         
         },
        minusfour7:function () {
            this.Quantityfour7--; 
            if ( this.Quantityfour7 < 0) {
               this.Quantityfour7 =  0
              }
            this.totalQuantity4 = this.Quantityfour + this.Quantityfour2 + this.Quantityfour3 + this.Quantityfour4 +this.Quantityfour5 +this.Quantityfour6 +this.Quantityfour7
          if ( this.totalQuantity4 > 0) {
               this.delivery4 =  this.deliveryclone4
               } 
         },
         //
         addfive:function () {
            this.Quantityfive++;
            this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
          if ( this.totalQuantity5 > 0) {
               this.delivery5 =  this.deliveryclone5
               }
         },
        minusfive:function () {
            this.Quantityfive--; 
            if ( this.Quantityfive < 0) {
               this.Quantityfive =  0
              }
              this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
              if ( this.totalQuantity5 > 0) {
                   this.delivery5 =  this.deliveryclone5
                   } 
         },
         addfive2:function () {
            this.Quantityfive2++;
            this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
            if ( this.totalQuantity5 > 0) {
                 this.delivery5 =  this.deliveryclone5
                 }
         },
        minusfive2:function () {
            this.Quantityfive2--; 
            if ( this.Quantityfive2 < 0) {
               this.Quantityfive2 =  0
              }
              this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
              if ( this.totalQuantity5 > 0) {
                   this.delivery5 =  this.deliveryclone5
                   } 
         },
         addfive3:function () {
            this.Quantityfive3++;
            this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
          if ( this.totalQuantity5 > 0) {
               this.delivery5 =  this.deliveryclone5
               } 
         },
        minusfive3:function () {
            this.Quantityfive3--; 
            if ( this.Quantityfive3 < 0) {
               this.Quantityfive3 =  0
              }
              this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
              if ( this.totalQuantity5 > 0) {
                   this.delivery5 =  this.deliveryclone5
                   }
         },
         addfive4:function () {
            this.Quantityfive4++;
            this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
            if ( this.totalQuantity5 > 0) {
                 this.delivery5 =  this.deliveryclone5
                 }
         },
        minusfive4:function () {
            this.Quantityfive4--; 
            if ( this.Quantityfive4 < 0) {
               this.Quantityfive4 =  0
              }
              this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
              if ( this.totalQuantity5 > 0) {
                   this.delivery5 =  this.deliveryclone5
                   }
         },
         addfive5:function () {
            this.Quantityfive5++;
            this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
            if ( this.totalQuantity5 > 0) {
                 this.delivery5 =  this.deliveryclone5
                 }
         },
        minusfive5:function () {
            this.Quantityfive5--; 
            if ( this.Quantityfive5 < 0) {
               this.Quantityfive5 =  0
              }
              this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
              if ( this.totalQuantity5 > 0) {
                   this.delivery5 =  this.deliveryclone5
                   }
         },
         addfive6:function () {
            this.Quantityfive6++;
            this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
            if ( this.totalQuantity5 > 0) {
                 this.delivery5 =  this.deliveryclone5
                 }
          
           
         },
        minusfive6:function () {
            this.Quantityfive6--; 
            if ( this.Quantityfive6 < 0) {
               this.Quantityfive6 =  0
              }
              this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
              if ( this.totalQuantity5 > 0) {
                   this.delivery5 =  this.deliveryclone5
                   }
            
         },
         addfive7:function () {
            this.Quantityfive7++;
            this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
            if ( this.totalQuantity5 > 0) {
                 this.delivery5 =  this.deliveryclone5
                 }
          
           
         },
        minusfive7:function () {
            this.Quantityfive7--; 
            if ( this.Quantityfive7 < 0) {
               this.Quantityfive7 =  0
              }
            this.totalQuantity5 = this.Quantityfive + this.Quantityfive2 + this.Quantityfive3 + this.Quantityfive4 +this.Quantityfive5 +this.Quantityfive6 +this.Quantityfive7
          if ( this.totalQuantity5 > 0) {
               this.delivery5 =  this.deliveryclone5
               }
             
            
         },
         //
         addsix:function () {
            this.Quantitysix++;
            this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
            if ( this.totalQuantity6 > 0) {
             this.delivery6 =  this.deliveryclone6
             }
         },
        minussix:function () {
            this.Quantitysix--; 
            if ( this.Quantitysix < 0) {
               this.Quantitysix =  0
              }
              this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
              if ( this.totalQuantity6 > 0) {
               this.delivery6 =  this.deliveryclone6
               }
         },
         addsix2:function () {
            this.Quantitysix2++;
            this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
            if ( this.totalQuantity6 > 0) {
             this.delivery6 =  this.deliveryclone6
             }
         },
        minussix2:function () {
            this.Quantitysix2--; 
            if ( this.Quantitysix2 < 0) {
               this.Quantitysix2=  0
              }
              this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
              if ( this.totalQuantity6 > 0) {
               this.delivery6 =  this.deliveryclone6
               }
         },
         addsix3:function () {
            this.Quantitysix3++;
            this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
            if ( this.totalQuantity6 > 0) {
             this.delivery6 =  this.deliveryclone6
             }
         },
        minussix3:function () {
            this.Quantitysix3--; 
            if ( this.Quantitysix3 < 0) {
               this.Quantitysix3 =  0
              }
              this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
              if ( this.totalQuantity6 > 0) {
               this.delivery6 =  this.deliveryclone6
               }
         },
         addsix4:function () {
            this.Quantitysix4++;
            this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
            if ( this.totalQuantity6 > 0) {
             this.delivery6 =  this.deliveryclone6
             }
           
         },
        minussix4:function () {
            this.Quantitysix4--; 
            if ( this.Quantitysix4 < 0) {
               this.Quantitysix4 =  0
              }
              this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
              if ( this.totalQuantity6 > 0) {
               this.delivery6 =  this.deliveryclone6
               }
            
         },
         addsix5:function () {
            this.Quantitysix5++;
            this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
            if ( this.totalQuantity6 > 0) {
             this.delivery6 =  this.deliveryclone6
             }
           
         },
        minussix5:function () {
            this.Quantitysix5--; 
            if ( this.Quantitysix5 < 0) {
               this.Quantitysix5 =  0
              }
              this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
              if ( this.totalQuantity6 > 0) {
               this.delivery6 =  this.deliveryclone6
               }
         },
         addsix6:function () {
            this.Quantitysix6++;
            this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
            if ( this.totalQuantity6 > 0) {
             this.delivery6 =  this.deliveryclone6
             }
          
           
         },
        minussix6:function () {
            this.Quantitysix6--; 
            if ( this.Quantitysix6 < 0) {
               this.Quantitysix6 =  0
              }
              this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
              if ( this.totalQuantity6 > 0) {
               this.delivery6 =  this.deliveryclone6
               }
            
         },
         addsix7:function () {
            this.Quantitysix7++;
            this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
            if ( this.totalQuantity6 > 0) {
             this.delivery6 =  this.deliveryclone6
             }
         },
         
        minussix7:function () {
            this.Quantitysix7--; 
            if ( this.Quantitysix7 < 0) {
               this.Quantitysix7 =  0
              }
            this.totalQuantity6 = this.Quantitysix + this.Quantitysix2 + this.Quantitysix3 + this.Quantitysix4 +this.Quantitysix5 +this.Quantitysix6 +this.Quantitysix7
          
           
              if ( this.totalQuantity6 > 0) {
               this.delivery6 =  this.deliveryclone6
               }
             
            
         },
         //
         addseven:function () {
            this.Quantityseven++;
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
          
           
         },
        minusseven:function () {
            this.Quantityseven--; 
            if ( this.Quantityseven < 0) {
               this.Quantityseven =  0
              }
              this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            
           
              if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
             
            
         },
         addseven2:function () {
            this.Quantityseven2++;
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
          
           
         },
        minusseven2:function () {
            this.Quantityseven2--; 
            if ( this.Quantityseven2 < 0) {
               this.Quantityseven2 =  0
              }
              this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            
           
              if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
             
            
         },
         addseven3:function () {
            this.Quantityseven3++;
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
          
           
         },
        minusseven3:function () {
            this.Quantityseven3--; 
            if ( this.Quantityseven3 < 0) {
               this.Quantityseven3 =  0
              }
              this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            
           
              if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
             
            
         },
         addseven4:function () {
            this.Quantityseven4++;
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
             }
          
           
         },
        minusseven4:function () {
            this.Quantityseven4--; 
            if ( this.Quantityseven4 < 0) {
               this.Quantityseven4 =  0
              }
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + 
            this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
          
           
              if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
             
            
         },
         addseven5:function () {
            this.Quantityseven5++;
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + 
            this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
          
           
         },   
        minusseven5:function () {
            this.Quantityseven5--; 
            if ( this.Quantityseven5 < 0) {
               this.Quantityseven5 =  0
              }
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + 
            this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
          
           
              if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
             
            
         },
         addseven6:function () {
            this.Quantityseven6++;
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +
            this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
          
           
         },
        minusseven6:function () {
            this.Quantityseven6--; 
            if ( this.Quantityseven6 < 0) {
               this.Quantityseven6 =  0
              }
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +
            this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
          
           
              if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
             
            
         },
         addseven7:function () {
            this.Quantityseven7++;
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + 
            this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
            if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
          
           
         },
        minusseven7:function () {
            this.Quantityseven7--; 
            if ( this.Quantityseven7 < 0) {
               this.Quantityseven7 =  0
              }
            this.totalQuantity7 = this.Quantityseven + this.Quantityseven2 + this.Quantityseven3 + this.Quantityseven4 +this.Quantityseven5 +this.Quantityseven6 +this.Quantityseven7
          
           
              if ( this.totalQuantity7 > 0) {
               this.delivery7 =  this.deliveryclone7
               }
             
            
         },
         QuotationCreation:function () {
            if (this.Quantity >= 0 ||this.Quantity2 >= 0|| this.Quantity3 >= 0|| this.Quantity4 >= 0 || this.Quantity5 >= 0 || this.Quantity6 >= 0 || this.Quantity7 >= 0 ) {
        return (  
           this.totalprice1 = this.totalQuantity1 *this.tagtransferedPrice
             ,this.Commision1 = (this.totalprice1 + this.delivery1)/20
               ,this.Total1 =  this.delivery1 + this.Commision1 + this.totalprice1 
          ) }
        
         },
        
         QuotationCreationtwo:function () {
            if (this.Quantitytwo >= 0) {
            return(   this.totalprice2 = (this.totalQuantity2 ) *this.tagtransferedPrice2
            ,this.Commision2 = (this.totalprice2 + this.delivery2)/20
          ) ,this.Total2 =  this.delivery2 + this.Commision2 + this.totalprice2
          
        }},
         QuotationCreationthree:function () {
            if (this.Quantitythree >= 0 ||this.Quantitythree2 >= 0|| this.Quantitythree3 >= 0|| this.Quantitythree4 >= 0 || this.Quantitythree5 >= 0 || this.Quantitythree6 >= 0 || this.Quantitythree7 >= 0 ) {
        return (  
           this.totalprice3 = this.totalQuantity3 *this.tagtransferedPrice3
             ,this.Commision3 = (this.totalprice3 + this.delivery3)/20
               ,this.Total3 =  this.delivery3 + this.Commision3 + this.totalprice3 
          ) }
        
         },
        QuotationCreationfour:function () {
         if (this.Quantityfour >= 0 ||this.Quantityfour2 >= 0|| this.Quantityfour3 >= 0|| this.Quantityfour4 >= 0 || this.Quantityfour5 >= 0 || this.Quantityfour6 >= 0 || this.Quantityfour7 >= 0 ) {
     return (  
        this.totalprice4= this.totalQuantity4 *this.tagtransferedPrice4
          ,this.Commision4 = (this.totalprice4 + this.delivery4)/20
            ,this.Total4 =  this.delivery4 + this.Commision4 + this.totalprice4 
       ) }
     
      },
      QuotationCreationfive:function () {
         if (this.Quantityfive >= 0 ||this.Quantityfive2 >= 0|| this.Quantityfive3 >= 0|| this.Quantityfive4 >= 0 || this.Quantityfive5 >= 0 || this.Quantityfive6 >= 0 || this.Quantityfive7 >= 0 ) {
     return (  
        this.totalprice5 = this.totalQuantity5 *this.tagtransferedPrice5
          ,this.Commision5 = (this.totalprice5 + this.delivery5)/20
            ,this.Total5 =  this.delivery5 + this.Commision5 + this.totalprice5
       ) }
     
      },
      QuotationCreationsix:function () {
         if (this.Quantitysix >= 0 ||this.Quantitysix2 >= 0|| this.Quantitysix3 >= 0|| this.Quantitysix4 >= 0 || this.Quantitysix5 >= 0 || this.Quantitysix6 >= 0 || this.Quantitysix7 >= 0 ) {
     return (  
        this.totalprice6 = this.totalQuantity6 *this.tagtransferedPrice6
          ,this.Commision6 = (this.totalprice6 + this.delivery6)/20
            ,this.Total6 =  this.delivery6 + this.Commision6 + this.totalprice6
       ) }
     
      },
      QuotationCreationseven:function () {
         if (this.Quantityseven >= 0 ||this.Quantityseven2 >= 0|| this.Quantityseven3 >= 0|| this.Quantityseven4 >= 0 || this.Quantityseven5 >= 0 || this.Quantityseven6 >= 0 || this.Quantityseven7 >= 0 ) {
     return (  
        this.totalprice7 = this.totalQuantity7 *this.tagtransferedPrice7
          ,this.Commision7 = (this.totalprice7 + this.delivery7)/20
            ,this.Total7 =  this.delivery7 + this.Commision7 + this.totalprice7
       ) }
     
      },
        sumTotal:function () {
         if ( this.totalQuantity1 == 0) {
            this.delivery1 =  0
            this.Commision1 = 0
            this.Total1 = 0
            }
           
   if ( this.totalQuantity2 == 0) {
               this.delivery2 =  0
               this.Commision2 = 0
               this.Total2 = 0
               }
               if ( this.totalQuantity3 == 0) {
                  this.delivery3 =  0
                  this.Commision3 = 0
                  this.Total3 = 0
                  }
                  if ( this.totalQuantity4 == 0) {
                     this.delivery4 =  0
                     this.Commision4 = 0
                     this.Total4 = 0
                     }
                     if ( this.totalQuantity5 == 0) {
                        this.delivery5 =  0
                        this.Commision5 = 0
                        this.Total5 = 0   } 
    if ( this.totalQuantity6 == 0) {
        this.delivery6 =  0
      this.Commision6 = 0
     this.Total6 = 0 } 
     if ( this.totalQuantity7 == 0) {
      this.delivery7 =  0
      this.Commision7 = 0
      this.Total7 = 0
      }                                          
              
        //detailes
        if (this.Quantity > 0) {
           this.dit1 = "show"
           
        }
        if (this.Quantity == 0) {
         this.dit1 = "none"
         
      }
        if (this.Quantity2 > 0) {
         this.dit2 = "show"
         
      }
      if (this.Quantity2 == 0) {
         this.dit2 = "none"
         
      }
      if (this.Quantity3 > 0) {
         this.dit3 = "show"
         
      }
      if (this.Quantity3 == 0) {
         this.dit3 = "none"
         
      }
      if (this.Quantity4 > 0) {
         this.dit4 = "show"
         
      }
      if (this.Quantity4 == 0) {
         this.dit4 = "none"
         
      }
      if (this.Quantity5 > 0) {
         this.dit5 = "show"
      }
      if (this.Quantity5 == 0) {
         this.dit5 = "none"
      }
         
         if (this.Quantity6 > 0) {
            this.dit6 = "show"
            
         }
         if (this.Quantity6 == 0) {
            this.dit6 = "none"
            
         }
         if (this.Quantity7 > 0) {
            this.dit7 = "show"
            
         }
         if (this.Quantity7 == 0) {
            this.dit7 = "none"
            
         }
         if (this.totalQuantity1 > 0) {
            this.ditT1 = "show"
            
         }
         if (this.totalQuantity1 == 0) {
            this.ditT1 = "none"
            
         }
         if (this.Quantitytwo > 0) {
            this.dittwo1 = "show"
            
         }
         if (this.Quantitytwo == 0) {
          this.dittwo1 = "none"
          
       }
         if (this.Quantitytwo2 > 0) {
          this.dittwo2 = "show"
          
       }
       if (this.Quantitytwo2 == 0) {
          this.dittwo2 = "none"
          
       }
       if (this.Quantitytwo3 > 0) {
          this.dittwo3 = "show"
          
       }
       if (this.Quantitytwo3 == 0) {
          this.dittwo3 = "none"
          
       }
       if (this.Quantitytwo4 > 0) {
          this.dittwo4 = "show"
          
       }
       if (this.Quantitytwo4 == 0) {
          this.dittwo4 = "none"
          
       }
       if (this.Quantitytwo5 > 0) {
          this.dittwo5 = "show"
       }
       if (this.Quantitytwo5 == 0) {
          this.dittwo5 = "none"
       }
          
          if (this.Quantitytwo6 > 0) {
             this.dittwo6 = "show"
             
          }
          if (this.Quantitytwo6 == 0) {
             this.dittwo6 = "none"
             
          }
          if (this.Quantitytwo7 > 0) {
             this.dittwo7 = "show"
             
          }
          if (this.Quantitytwo7 == 0) {
             this.dittwo7 = "none"
             
          }
          
          if (this.totalQuantity2 > 0) {
             this.ditT2 = "show"
             
          }
          if (this.totalQuantity2 == 0) {
             this.ditT2 = "none"
             
          }
          if (this.Quantitythree > 0) {
            this.ditthree1 = "show"
            
         }
         if (this.Quantitythree == 0) {
          this.ditthree1 = "none"
          
       }
         if (this.Quantitythree2 > 0) {
          this.ditthree2 = "show"
          
       }
       if (this.Quantitythree2 == 0) {
          this.ditthree2 = "none"
          
       }
       if (this.Quantitythree3 > 0) {
          this.ditthree3 = "show"
          
       }
       if (this.Quantitythree3 == 0) {
          this.ditthree3 = "none"
          
       }
       if (this.Quantitythree4 > 0) {
          this.ditthree4 = "show"
          
       }
       if (this.Quantitythree4 == 0) {
          this.ditthree4 = "none"
          
       }
       if (this.Quantitythree5 > 0) {
          this.ditthree5 = "show"
       }
       if (this.Quantitythree5 == 0) {
          this.ditthree5 = "none"
       }
          
          if (this.Quantitythree6 > 0) {
             this.ditthree6 = "show"
             
          }
          if (this.Quantitythree6 == 0) {
             this.ditthree6 = "none"
             
          }
          if (this.Quantitythree7 > 0) {
             this.ditthree7 = "show"
             
          }
          if (this.Quantitythree7 == 0) {
             this.ditthree7 = "none"
             
          }
          if (this.totalQuantity3 > 0) {
             this.ditT3 = "show"
             
          }
          if (this.totalQuantity3 == 0) {
             this.ditT3 = "none"
             
          }
          if (this.Quantityfour > 0) {
            this.ditfour1 = "show"
            
         }
         if (this.Quantityfour == 0) {
          this.ditfour1 = "none"
          
       }
         if (this.Quantityfour2 > 0) {
          this.ditfour2 = "show"
          
       }
       if (this.Quantityfour2 == 0) {
          this.ditfour2 = "none"
          
       }
       if (this.Quantityfour3 > 0) {
          this.ditfour3 = "show"
          
       }
       if (this.Quantityfour3 == 0) {
          this.ditfour3 = "none"
          
       }
       if (this.Quantityfour4 > 0) {
          this.ditfour4 = "show"
          
       }
       if (this.Quantityfour4 == 0) {
          this.ditfour4 = "none"
          
       }
       if (this.Quantityfour5 > 0) {
          this.ditfour5 = "show"
       }
       if (this.Quantityfour5 == 0) {
          this.ditfour5 = "none"
       }
          
          if (this.Quantityfour6 > 0) {
             this.ditfour6 = "show"
             
          }
          if (this.Quantityfour6 == 0) {
             this.ditfour6 = "none"
             
          }
          if (this.Quantityfour7 > 0) {
             this.ditfour7 = "show"
             
          }
          if (this.Quantityfour7 == 0) {
             this.ditfour7 = "none"
             
          }
          if (this.totalQuantity4 > 0) {
             this.ditT4 = "show"
             
          }
          if (this.totalQuantity4 == 0) {
             this.ditT4 = "none"
             
          }
          if (this.Quantityfive > 0) {
            this.ditfive1 = "show"
            
         }
         if (this.Quantityfive == 0) {
          this.ditfive1 = "none"
          
       }
         if (this.Quantityfive2 > 0) {
          this.ditfive2 = "show"
          
       }
       if (this.Quantityfive2 == 0) {
          this.ditfive2 = "none"
          
       }
       if (this.Quantityfive3 > 0) {
          this.ditfive3 = "show"
          
       }
       if (this.Quantityfive3 == 0) {
          this.ditfive3 = "none"
          
       }
       if (this.Quantityfive4 > 0) {
          this.ditfive4 = "show"
          
       }
       if (this.Quantityfive4 == 0) {
          this.ditfive4 = "none"
          
       }
       if (this.Quantityfive5 > 0) {
          this.ditfive5 = "show"
       }
       if (this.Quantityfive5 == 0) {
          this.ditfive5 = "none"
       }
          
          if (this.Quantityfive6 > 0) {
             this.ditfive6 = "show"
             
          }
          if (this.Quantity6 == 0) {
             this.dit6 = "none"
             
          }
          if (this.Quantityfive7 > 0) {
             this.ditfive7 = "show"
             
          }
          if (this.Quantityfive7 == 0) {
             this.ditfive7 = "none"
             
          }
          if (this.totalQuantity5 > 0) {
             this.ditT5 = "show"
             
          }
          if (this.totalQuantity5 == 0) {
             this.ditT5 = "none"
             
          }
          if (this.Quantitysix > 0) {
            this.ditsix1 = "show"
            
         }
         if (this.Quantitysix == 0) {
          this.ditsix1 = "none"
          
       }
         if (this.Quantitysix2 > 0) {
          this.ditsix2 = "show"
          
       }
       if (this.Quantitysix2 == 0) {
          this.ditsix2 = "none"
          
       }
       if (this.Quantitysix3 > 0) {
          this.ditsix3 = "show"
          
       }
       if (this.Quantitysix3 == 0) {
          this.ditsix3 = "none"
          
       }
       if (this.Quantitysix4 > 0) {
          this.ditsix4 = "show"
          
       }
       if (this.Quantitysix4 == 0) {
          this.ditsix4 = "none"
          
       }
       if (this.Quantitysix5 > 0) {
          this.ditsix5 = "show"
       }
       if (this.Quantitysix5 == 0) {
          this.ditsix5 = "none"
       }
          
          if (this.Quantitysix6 > 0) {
             this.ditsix6 = "show"
             
          }
          if (this.Quantitysix6 == 0) {
             this.ditsix6 = "none"
             
          }
          if (this.Quantitysix7 > 0) {
             this.ditsix7 = "show"
             
          }
          if (this.Quantitysix7 == 0) {
             this.ditsix7 = "none"
             
          }
          if (this.totalQuantity6 > 0) {
             this.ditT6 = "show"
             
          }
          if (this.totalQuantity6 == 0) {
             this.ditT6 = "none"
             
          }
          if (this.Quantityseven > 0) {
            this.ditseven1 = "show"
            
         }
         if (this.Quantityseven == 0) {
          this.ditseven1 = "none"
          
       }
         if (this.Quantityseven2 > 0) {
          this.ditseven2 = "show"
          
       }
       if (this.Quantityseven2 == 0) {
          this.ditseven2 = "none"
          
       }
       if (this.Quantityseven3 > 0) {
          this.ditseven3 = "show"
          
       }
       if (this.Quantityseven3 == 0) {
          this.ditseven3 = "none"
          
       }
       if (this.Quantityseven4 > 0) {
          this.ditseven4 = "show"
          
       }
       if (this.Quantityseven4 == 0) {
          this.ditseven4 = "none"
          
       }
       if (this.Quantityseven5 > 0) {
          this.ditseven5 = "show"
       }
       if (this.Quantityseven5 == 0) {
          this.ditseven5 = "none"
       }
          
          if (this.Quantityseven6 > 0) {
             this.ditseven6 = "show"
             
          }
          if (this.Quantityseven6 == 0) {
             this.ditseven6 = "none"
             
          }
          if (this.Quantityseven7 > 0) {
             this.ditseven7 = "show"
             
          }
          if (this.Quantityseven7 == 0) {
             this.ditseven7 = "none"
             
          }
          if (this.totalQuantity7 > 0) {
             this.ditT7 = "show"
             
          }
          if (this.totalQuantity7 == 0) {
             this.ditT7 = "none"
             
          }
       
      

          return (   this.delivery = this.delivery1 + this.delivery2 + this.delivery3 + this.delivery4 + this.delivery5 + this.delivery6 + this.delivery7,
             this.Totalprice = this.totalprice1 + this.totalprice2 +  this.totalprice3 + this.totalprice4 +  this.totalprice5 + this.totalprice6 + this.totalprice7  ,
             this.Commision = this.Commision1 + this.Commision2  +  this.Commision3 + this.Commision4 +  this.Commision5 + this.Commision6 + this.Commision7,
         this.Total = this.Total1 + this.Total2 +this.Total3 + this.Total4+this.Total5 + this.Total6+this.Total7
            
         )}

         
        }});
       
        
        
        container.transfer()
       // console.log(9*5);
        
       
         
         
      /*  $( "#search1" ).keyup(function() {
         alert( "Handler for .keyup() called." );
       });*/