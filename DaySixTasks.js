//Day 6 Tasks

//1. class movie

class Movie{ //creating a movie class
    //a. constructor created to set the respective argument values to class properties.
    //b. rating is set to "PG" when no rating is passed.
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
     //c. function/method to get array of PG rated movie instances
     getPG(array){
        let pgRated= array.filter((d)=>{
            return d.rating=='PG'
        })
        console.log(pgRated);
    }
 }
 let film1=new Movie('Casino Royale','Eon Productions','PG13'); //d. created an instance for Casino Royale movie
 let film2=new Movie('K.G.F','Hombale Films','G');
 let film3=new Movie('The Eternals','Marvel Studios','PG')
 let film4=new Movie('Bahubali','ARKA media')
 let films=[film1,film2,film3,film4];

 let movies=new Movie();
 movies.getPG(films)
 

//------------------------------******************************---------------------------
//output:
/* [
  Movie {
    title: 'The Eternals',
    studio: 'Marvel Studios',
    rating: 'PG'
  },
  Movie { title: 'Bahubali', studio: 'ARKA media', rating: 'PG' }
]*/
 
  //2.Circle

 class Circle{ //creatinf a Circle class
    constructor(radius,color){ //constructor
        this.radius=radius;
        this.color=color;
    }
    getRadius(){ //to get the radius
        return this.radius;
    }
    setRadius(radius){ //to set the value of radius
        this.radius=radius;
    }
    getColor(){ //to get the color
        return this.color;
    }
    setColor(color){ //to set the value of color
        this.color=color;
    }
    toString(){ // to print the radius and color in below format
        console.log(`Circle[Radius=${this.radius}, Color=${this.color}]`);
    }
    getArea(){ //returns the area of circle
        return 3.142*Math.pow(this.radius,2);
    }
    getCircumference(){ //returns the circumference of circle
        return 2*3.142*this.radius;
    }
}

let c1=new Circle(2,'blue'); // creating a object for Circle class 
console.log(`Area: ${c1.getArea()}`); //printing the area for c1 object
c1.toString(); // printing the radius and circle in a specific format

//--------------------------------*****************************-------------------------
//output:
/* Area: 12.568
Circle[Radius=2, Color=blue] */

//3.Write a “person” class to hold all the details.

class Person{
    constructor(firstName,LastName,age,DoB,mail,mobile,address){
        this.firstName=firstName;
        this.LastName=LastName;
        this.age=age;
        this.DoB=DoB;
        this.mail=mail;
        this.mobile=mobile;
        this.address=address;
    }
    getPersonDetails(){
        console.log(`
        Person Deatils:
        First Name: ${this.firstName},
        Last Name: ${this.LastName},
        Age: ${this.age}
        Date of Birth: ${this.DoB}
        Mail: ${this.mail}
        mobile: ${this.address}`)
    }
}
let p1=new Person('Satish','Ganesan',24,'08/07/1998','ggss@gmail.com',9988776655,'Kadapa, A.P')
p1.getPersonDetails();
 
//-----------------------******************************------------------------
//output:
/* Person Deatils:
First Name: Satish,
Last Name: Ganesan,
Age: 24
Date of Birth: 08/07/1998
Mail: ggss@gmail.com
mobile: Kadapa, A.P */

//4.write a class to calculate the uber price.

class Uber{ //class Uber
    constructor(type,numberOfSeats,location,destinationAddress,travelDistance){ // constructor and setting values
        this.type=type;
        this.numberOfSeats=numberOfSeats;
        this.location=location,
        this.destinationAddress=destinationAddress,
        this.travelDistance=travelDistance  
        if(type=='uberPool'){
            this.sharing=true;
        }else{
            this.sharing=false;
        }
    }
    getPrice(){ //method for calculating price
        this.costPerKM='18'
        //conditon checking if sharing is true or not
        if(this.sharing==true){
            this.basePrice=(this.costPerKM-3)*this.travelDistance*this.numberOfSeats;
        }else{
            this.basePrice=(this.costPerKM)*this.travelDistance*this.numberOfSeats;
        }
        //switch case to calcuate the price for different ride types
        switch(this.type){
            case 'uberPool':
            case 'uberX':
                return `
                Ride: ${this.location} to ${this.destinationAddress}
                Ride Type: ${this.type}
                Ride Distance; ${this.travelDistance}
                Number of seats booked: ${this.numberOfSeats}
                Total Price is Rs.${this.basePrice*1}`;  
            case 'uberXL':
                return `
                Ride: ${this.location} to ${this.destinationAddress}
                Ride Type: ${this.type}
                Ride Distance; ${this.travelDistance}
                Number of seats booked: ${this.numberOfSeats}
                Total Price is Rs.${this.basePrice*2}`; 
            case 'uberSUV':
                return `
                Ride: ${this.location} to ${this.destinationAddress}
                Ride Type: ${this.type}
                Ride Distance; ${this.travelDistance}
                Number of seats booked: ${this.numberOfSeats}
                Total Price is Rs.${this.basePrice*2}`; 
            default:
                return 'Invalid Type';
        }
        return 0;
   }
}
let ride1=new Uber('uberXL',2,'yelhanka','majestic',19); //creating an instance
console.log(ride1.getPrice()); // printing the price details

//----------------------------********************************-----------
//output:
/* Ride: yelhanka to majestic
Ride Type: uberXL
Ride Distance; 19
Number of seats booked: 2
Total Price is Rs.1368 */  