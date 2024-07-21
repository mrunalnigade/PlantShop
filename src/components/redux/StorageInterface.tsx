export interface PropertyDetails {
    loading:boolean
    code: number
    message: string
    statusCode: number
    result: Result,
    count:number
  }
  
  export interface Result {
    page: number
    totalProducts: number
    products: Product[]
    totalPages: number
  }
  
  export interface Product {
    _id: string
    product_name: string
    description: string
    mrp_price: number
    selling_price: number
    SKU: string
    category: string
    sub_category: string
    stock_quantity: number
    selling_quantity: number
    remaining_quantity: number
    color: string
    productImage: string
    tag_keywords: string
    seo_title: string
    seo_description: string
    url_slug: string
    brand: string
    weight: string
    dimensions: string
    material: string
    salesPackage: string
    netQuantity: number
    image_gallery: string[]
    colorOption: ColorOption[]
    care_instruction: string
    onlineSelling: number
    offlineSelling: number
    return_policy: string
    shipping_option: string
    discountPercentage?: number
    related_products: any[]
    ratings: any[]
    reviews: any[]
    popularityCount: number
    createdAt: string
    updatedAt: string
    __v: number
    isCart: boolean
    isWishlist: boolean
  }
  
  export interface ColorOption {
    colorName: string
    productName: string
    product_image: string
    imageGallery: any[]
    _id: string
  }
  