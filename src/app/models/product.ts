export class Product {
  id: number;
  name: string;
  description: string;
  smallPrice: number;
  mediumPrice: number;
  largePrice:number;
  imageUrl: string;
  constructor(id: number, name:string, description="", smallPrice=0, mediumPrice=0, largePrice=0, imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png") {
    this.id = id
    this.name = name
    this.description= description
    this.smallPrice = smallPrice
    this.mediumPrice = mediumPrice
    this.largePrice = largePrice
    this.imageUrl = imageUrl
  }
}
