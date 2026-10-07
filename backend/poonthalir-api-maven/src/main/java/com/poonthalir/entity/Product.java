package com.poonthalir.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(length = 100)
    private String brand;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal mrp;

    @Column(name = "poonthalir_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal poonthalirPrice;

    @Column(nullable = false)
    private Integer stock = 0;

    @Column(length = 1000)
    private String description;

    @Column(name = "image_url", length = 1000)
    private String imageUrl;

    @Column(nullable = false)
    private Boolean active = true;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    public Product() {
    }

    public Product(
            String name,
            String brand,
            BigDecimal mrp,
            BigDecimal poonthalirPrice,
            Integer stock,
            String description,
            String imageUrl,
            Category category
    ) {
        this.name = name;
        this.brand = brand;
        this.mrp = mrp;
        this.poonthalirPrice = poonthalirPrice;
        this.stock = stock;
        this.description = description;
        this.imageUrl = imageUrl;
        this.category = category;
        this.active = true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public BigDecimal getMrp() {
        return mrp;
    }

    public void setMrp(BigDecimal mrp) {
        this.mrp = mrp;
    }

    public BigDecimal getPoonthalirPrice() {
        return poonthalirPrice;
    }

    public void setPoonthalirPrice(BigDecimal poonthalirPrice) {
        this.poonthalirPrice = poonthalirPrice;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}