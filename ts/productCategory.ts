abstract class ProductCategory { // abstract template for product category, protected field for imgPath, has name and method for URl
	protected imgPath = "img/";  
    
	name: string;
	abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory { // template for sodacategories, has name, implements getImageUrl, imgPath specific to class
	name = "Soda"
	getImageUrl () {
    	return this.imgPath + "SodaCan.png"; // return "img/SodaCan.png" as String
	}
}

class NutsCategory extends ProductCategory {
	name = "Nuts"
	getImageUrl () {
    	return this.imgPath + "Nuts.png";
	}
}

class ChipsCategory extends ProductCategory {
	name = "Potato chips"
	getImageUrl () {
    	return this.imgPath + "Chips.png";
	}
}

class CandyCategory extends ProductCategory {
	name = "Candy"
	getImageUrl () {
    	return this.imgPath + "Candy.png";
	}
}

class CandyBarCategory extends ProductCategory {
	name = "Candy bar"
	getImageUrl () {
    	return this.imgPath + "CandyBar.png";
	}
}

export {ProductCategory, SodaCategory, ChipsCategory, CandyCategory, CandyBarCategory, NutsCategory} // so others can import
