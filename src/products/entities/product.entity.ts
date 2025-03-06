import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
 
// import { OrderItem } from 'src/order_items/entities/order_item.entity';
import { Category } from 'src/category/entities/category.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { ProductImage } from 'src/product_image/entities/product_image.entity';
  
  @Entity('products') // Matches the table name in SQL
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ type: 'text', nullable: true })
    description: string;
  
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
  
    @Column({ default: 0 })
    stock_quantity: number;
  
    @Column()
    category_id: number;
  
    @ManyToOne(() => Category, (category) => category.products, {
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'category_id' })
    category: Category;
  
    @Column()
    brand_id: number;
  
    @ManyToOne(() => Brand, (brand) => brand.products, {
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'brand_id' })
    brand: Brand;
  
    @Column({ nullable: true })
    sku: string;

    @OneToMany(() => ProductImage, (productImage) => productImage.product)
    productImages: ProductImage[];

    // @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
    // orderItems: OrderItem[];
  
    @CreateDateColumn()
    creationDate: Date;
  
    @UpdateDateColumn()
    modifiedDate: Date;
  }