// includes temporal
  $(function(){
	  
	// load home
	$("#content.all").load( "home.html", function() {
	  	$("#products-items").load("product_item.html"); 
	  	$("#content.all").show();
	});
	
	// load products
	$('.item-products').on('click', function(e) {
		e.preventDefault();
		$("#content.all").hide();

		$("#content.products").load( "products.html", function() {
			$("#sidebar").load("sidebar.html"); 
	  		$("#products-items").load("product_item.html"); 
	  		$('.bread-products').load('breadcrumb_products.html');
	  		$("#content.products, #sidebar,.bread-products ").show();
	  		$("#content.all, .bread-general").hide();
		});
	
	});
	
	// load product
	$('.item-product').on('click', function(e) {
		e.preventDefault();		
		
		$("#content.products, #content.all, #sidebar, .bread-products").hide();

		$("#content.all").load( "product.html", function() {
	  		$('.bread-general').load('breadcrumb.html');
	  		$("#content.all, .bread-general").show();
		});
	
	});
	
	// load page content
	$('.item-page').on('click', function(e) {
		e.preventDefault();
		
		$("#content.products, #sidebar, .bread-products").hide();

		$("#content.all").load( "page.html", function() {
	  		$('.bread-general').load('breadcrumb.html');
	  		$("#content.all, .bread-general").show();
		});
	
	});
	
	// load cart
	$('.item-cart').on('click', function(e) {
		e.preventDefault();
		
		$("#content.products, #sidebar, .bread-products").hide();

		$("#content.all").load( "cart.html", function() {
	  		$('.bread-general').load('breadcrumb.html');
	  		$("#content.all, .bread-general").show();
		});
	
	});
	
	
      
   });
   // end includes