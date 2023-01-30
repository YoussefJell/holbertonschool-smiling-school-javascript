$(document).ready(function () {
	$.ajax({
		url: 'https://smileschool-api.hbtn.info/quotes',
		type: "get",
		beforeSend: function () {
			$("#QuotesLoader").show();
		},
		success: function (response) {
			$("#QuotesLoader").hide();
			for (let i = 0; i < response.length; i++) {
				let $html = $(`
			  <div class="carousel-item ${i === 0 ? 'active' : ''} px-5">
			  <div class="row d-flex justify-content-center align-items-center">
				<div class="col-12 col-sm-4 d-flex justify-content-sm-end">
				  <img src=${response[i].pic_url} class="rounded-circle profileCarousel mx-auto">
				</div>
				<div class="col mr-3 pt-5 pt-sm-0">
				  <p class="font-weight-light mb-3"> ${response[i].text} </p>
				  <h6 class="font-weight-bold m-0 mb-1">${response[i].name}</h6>
				  <p class="font-italic m-0">${response[i].title}</p>
				</div>
			  </div>
			</div>`);
				$("#quotesCarouselInner").append($html);
			}
		},
	});


	$.ajax({
		url: 'https://smileschool-api.hbtn.info/popular-tutorials',
		type: "get",
		beforeSend: function () {
			$("#VideosLoader").show();
		},
		success: function (response) {
			$("#VideosLoader").hide();
			for (let i = 0; i < response.length; i++) {
				let $stars = '';
				for (let j = 0; j < response[i].star; j++) {
					$stars += '<img src="./images/star_on.png" class="star-rating">';
				}
				for (let j = 0; j < 5 - response[i].star; j++) {
					$stars += '<img src="./images/star_off.png" class="star-rating" />';
				}

				$("#tutorialvideos").append(`<div id="carousel-video-item" class="carousel-item ${i === 0 ? 'active' : ''} d-flex justify-content-center flex-nowrap d-none d-lg-flex">`);

				let $html = $(`
				<div class="card d-none d-md-block" style="width: 16rem;">
				  <div class=" d-flex align-items-center justify-content-center">
					<img src="${response[i].thumb_url}" alt="" class="card-img-top" />
					<img src="./images/play.png" class="position-absolute iconPlay" />
				  </div>
				  <div class="card-body">
					<h5 class="card-title font-weight-bold text-left">${response[i].title}</h5>
					<p class="card-text text-muted text-left">${response[i]["sub-title"]}</p>
					<div class="d-flex align-items-center">
					  <div class="mr-3">
						<img src="${response[i].author_pic_url}" class="img_user rounded-circle">
					  </div>
					  <div class="person highlightText">${response[i].author}
					  </div>
					</div>
					<div class="cfooter d-flex bg-transparent">
					  <div class="review d-flex justify-content-between mt-3 align-items-center">
						${$stars}
					  </div>
					  <div class="highlightText mt-3 ml-5 pl-2">${response[i].duration}</div>
					</div>
				  </div>
				</div>`);
				$("#carousel-video-item").append($html);
			}
		},
	});


	$.ajax({
		url: 'https://smileschool-api.hbtn.info/latest-videos',
		type: "get",
		beforeSend: function () {
			$("#LVideosLoader").show();
		},
		success: function (response) {
			$("#LVideosLoader").hide();
			for (let i = 0; i < response.length; i++) {
				let $stars = '';
				for (let j = 0; j < response[i].star; j++) {
					$stars += '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">';
				}
				for (let j = 0; j < 5 - response[i].star; j++) {
					$stars += '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">';
				}
				let $html = $(`
					<div class="text-center col-12 col-sm-6 col-md-3">
						<div class="carousel-item active">
							<img class="w-100" src="${response[i].thumb_url}" alt="smile image">
							<div class="mx-3">
								<div class="font-weight-bold text-dark text-left mt-3">
									${response[i].title}
								</div>
								<div class="text-secondary text-left mt-3 mb-3">
									${response[i]["sub-title"]}
								</div>
								<div class="d-flex align-items-center mb-3">
									<img src="${response[i].author_pic_url}" class="rounded-circle mr-3 video-carousel-img-profile" alt="profile image">
									<div class="purple-text font-weight-bold">${response[i].author}</div>
								</div>
								<div class="d-flex justify-content-between">
									<div class="d-flex pt-1">
									${$stars}
									</div>
									<div class="purple-text font-weight-bold">
										${response[i].duration}
									</div>
								</div>
							</div>
						</div>
					</div>`);
				$("#latestvideos").append($html);
			}
		},
	});
});